import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
  apiVersion: '2024-11-20.acacia',
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, donationType, locale } = body;

    // Validate amount
    if (!amount || typeof amount !== 'number') {
      return NextResponse.json(
        { error: 'Invalid amount.' },
        { status: 400 }
      );
    }

    const minAmount = donationType === 'monthly' ? 300 : 1000; // $3 or $10 in cents
    if (amount < minAmount) {
      return NextResponse.json(
        { error: `Amount must be at least $${(minAmount / 100).toFixed(0)}.` },
        { status: 400 }
      );
    }

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

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('Error creating Stripe Checkout Session:', err);
    return NextResponse.json(
      { error: 'An error occurred while creating the session.' },
      { status: 500 }
    );
  }
} 
