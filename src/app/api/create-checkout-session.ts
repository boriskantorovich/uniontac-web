import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
  apiVersion: '2024-11-20.acacia',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { amount, donationType, locale } = req.body;

    // Validate amount on the server
    if (!amount || typeof amount !== 'number') {
      res.status(400).json({ error: 'Invalid amount.' });
      return;
    }
    const minAmount = donationType === 'monthly' ? 300 : 1000; // $3 or $10 in cents
    if (amount < minAmount) {
      res.status(400).json({ error: `Amount must be at least $${(minAmount / 100).toFixed(0)}.` });
      return;
    }

    try {
      const sessionParams: Stripe.Checkout.SessionCreateParams = {
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: donationType === 'monthly' ? 'Monthly Donation' : 'One-Time Donation',
              },
              unit_amount: amount,
              ...(donationType === 'monthly' ? {
                recurring: {
                  interval: 'month',
                },
              } : {}),
            },
            quantity: 1,
          },
        ],
        mode: donationType === 'monthly' ? 'subscription' : 'payment',
        success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/cancel`,
        locale: locale,
      };

      const session = await stripe.checkout.sessions.create(sessionParams);

      res.status(200).json({ url: session.url });
    } catch (err) {
      console.error('Error creating Stripe Checkout Session:', err);
      res.status(500).json({ error: 'An error occurred while creating the session.' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
} 
