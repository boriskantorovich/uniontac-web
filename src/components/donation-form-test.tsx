"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useTranslations } from 'next-intl'
import { analytics } from '@/utils/analytics'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { locales } from '@/i18n/config'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import axios from 'axios';
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type AmountType = {
  monthly: '5' | '10' | '15';
  onetime: '10' | '20' | '40';
}

type DonationType = 'monthly' | 'onetime';

interface DonationFormProps {
  showCTA?: boolean;
  variant?: 'urgent' | 'default';
  formId: string;
}

type PaymentLinksType = {
  monthly: {
    [K in 'ua' | 'ru' | 'en']: {
      '5': string;
      '10': string;
      '15': string;
    }
  };
  onetime: {
    [K in 'ua' | 'ru' | 'en']: {
      '10': string;
      '20': string;
      '40': string;
    }
  };
};

const PAYMENT_LINKS: PaymentLinksType = {
  monthly: {
    ua: {
      '5': 'https://donate.stripe.com/6oE010aKl0Rx2C4bJ0',
      '10': 'https://donate.stripe.com/8wM7ts8Cd1VB6SkbJ1',
      '15': 'https://donate.stripe.com/dR6154bOpas7ekMeVe'
    },
    ru: {
      '5': 'https://donate.stripe.com/aEU8xw8Cd8jZekM3cE',
      '10': 'https://donate.stripe.com/aEUbJI4lX1VB0tWbJb',
      '15': 'https://donate.stripe.com/aEU4hg19L1VBb8A5kO'
    },
    en: {
      '5': 'https://donate.stripe.com/dR6154g4FbwbccE14f',
      '10': 'https://donate.stripe.com/28o8xwbOpfMr6Sk28o',
      '15': 'https://donate.stripe.com/14kfZYbOp57Nb8A00h'
    }
  },
  onetime: {
    ua: {
      '10': 'https://donate.stripe.com/eVa5lkg4F0RxekM8wK',
      '20': 'https://donate.stripe.com/3cs3dc2dP43J7Wo4gt',
      '40': 'https://donate.stripe.com/bIY5lk7y9gQvccE4gs'
    },
    ru: {
      '10': 'https://donate.stripe.com/dR6dRQ5q1as7b8A9AW',
      '20': 'https://donate.stripe.com/aEU3dccSt8jZ2C4fZl',
      '40': 'https://donate.stripe.com/bIYfZYf0BgQvb8AcNa'
    },
    en: {
      '10': 'https://donate.stripe.com/9AQ5lkg4F0Rx1y03cB',
      '20': 'https://donate.stripe.com/9AQ2986u557N4KccNc',
      '40': 'https://donate.stripe.com/4gw010bOp1VB90s9B1'
    }
  }
} as const;

const AMOUNTS = {
  monthly: ['5', '10', '15'] as const,
  onetime: ['10', '20', '40'] as const
};

const DEFAULT_AMOUNTS: Record<DonationType, AmountType[DonationType]> = {
  monthly: '10',
  onetime: '20'
} as const;

export function DonationFormTest({ showCTA = false, variant = 'default', formId }: DonationFormProps) {
  const t = useTranslations('donationForm')
  const params = useParams() as { locale: string }
  const locale = params.locale as keyof typeof PAYMENT_LINKS.monthly
  const isUaLocale = locale === 'ua' && locales.includes('ua')
  
  const [donationType, setDonationType] = useState<DonationType>('monthly')
  const [amount, setAmount] = useState<AmountType[typeof donationType]>(DEFAULT_AMOUNTS[donationType])
  const [showOnetimeModal, setShowOnetimeModal] = useState(false)
  const [customAmount, setCustomAmount] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleAmountClick = (value: string) => {
    setAmount(value as AmountType[typeof donationType]);
    setCustomAmount('');
    setError(null);
    analytics.trackDonationForm('Payment Option Click', `$${value}`, formId, {
      donationAmount: parseInt(value, 10),
      paymentMethod: donationType,
      currency: 'USD',
      locale
    });
  }

  const handleDonateClick = async () => {
    const amountValue = customAmount || amount;
    const amountInCents = Math.round(parseFloat(amountValue) * 100);

    // Determine minimum amount based on donation type
    const minAmount = donationType === 'monthly' ? 300 : 1000; // $3 for monthly, $10 for one-time
    const minAmountDisplay = (minAmount / 100).toFixed(0);

    // Validate amount
    if (isNaN(amountInCents) || amountInCents < minAmount) {
      alert(t('validation.minAmount', { amount: minAmountDisplay }));
      return;
    }

    analytics.trackDonationForm('Donate Button Click', `$${amountValue}`, formId, {
      donationAmount: parseFloat(amountValue),
      paymentMethod: donationType,
      currency: 'USD',
      locale,
    });

    try {
      // Request to create a Checkout Session
      const response = await axios.post('/api/create-checkout-session', {
        amount: amountInCents,
        donationType,
        locale,
      });

      if (response.data.url) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('There was an error processing your donation. Please try again.');
    }
  }

  const handleDonationTypeChange = (type: DonationType) => {
    if (type === 'onetime') {
      setShowOnetimeModal(true);
      analytics.trackDonationForm('Show Onetime Modal', 'modal_shown', formId, {
        paymentMethod: type,
        currency: 'USD',
        locale
      });
      return;
    }
    
    setDonationType(type);
    setAmount(DEFAULT_AMOUNTS[type]);
    setCustomAmount('');
    setError(null);
    analytics.trackDonationForm('Type Change', type, formId, {
      paymentMethod: type,
      currency: 'USD',
      locale
    });
  }

  const handleModalClose = (confirmed: boolean) => {
    setShowOnetimeModal(false)
    
    if (confirmed) {
      setDonationType('onetime')
      setAmount(DEFAULT_AMOUNTS.onetime)
      setCustomAmount('')
      setError(null)
      analytics.trackDonationForm('Type Change', 'onetime', formId)
    } else {
      analytics.trackDonationForm('Modal Rejected', 'stayed_monthly', formId)
    }
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numValue = parseFloat(value);
    const minAmount = donationType === 'monthly' ? 3 : 10;
    
    if (/^\d*\.?\d*$/.test(value)) {
      setCustomAmount(value);
      if (isFocused) {
        if (numValue >= minAmount) {
          setError(null);
          // Track valid custom amount
          analytics.trackDonationForm('Payment Option Click', `$${value}`, formId, {
            donationAmount: numValue,
            paymentMethod: donationType,
            currency: 'USD',
            locale
          });
        } else {
          setError(t('validation.minAmount', { amount: minAmount }));
        }
      }
    }
  }

  const ctaText = t(`ctaTexts.${variant}`)

  return (
    <>
      <div className="w-full pt-6 md:p-6">
        <div className="flex flex-col max-w-[800px] mx-auto">
          {showCTA && ctaText && (
            <div className="m-8 text-left">
              <h2 className="text-3xl font-semibold text-white whitespace-pre-line">
                {ctaText}
              </h2>
            </div>
          )}
          
          <div className="w-full">
            <div className="bg-blue-600 text-white px-6 py-8 md:p-8">
              <h2 className="text-4xl md:text-5xl leading-tight font-semibold mb-4">
                {t('title')}
              </h2>
              <p className="mb-6">{t('description.text')}</p>

              {donationType === 'monthly' && (
                <p className="text-xl mb-6">{t('monthlySupport')}</p>
              )}

              <div className="flex gap-4 mb-6">
                {(['monthly', 'onetime'] as const).map((type) => (
                  <Button
                    key={type}
                    type="button"
                    onClick={() => handleDonationTypeChange(type)}
                    className={`flex-1 px-2 py-2 text-sm sm:text-base rounded-none ${
                      donationType === type 
                        ? 'bg-white text-blue-600' 
                        : 'bg-transparent text-white border-white hover:bg-white/10'
                    }`}
                  >
                    {t(type === 'monthly' ? 'monthlyButton' : 'oneTimeSupport')}
                  </Button>
                ))}
              </div>

              <form onSubmit={(e) => { e.preventDefault(); handleDonateClick(); }} 
                    className="space-y-6 mb-8">
                <RadioGroup
                  value={amount}
                  onValueChange={handleAmountClick}
                  className="grid grid-cols-3 gap-4"
                >
                  {AMOUNTS[donationType].map((value) => (
                    <div key={value}>
                      <RadioGroupItem
                        value={value}
                        id={`amount-${formId}-${value}`}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={`amount-${formId}-${value}`}
                        className={`flex items-center justify-center p-4 border-2 border-white cursor-pointer transition-colors ${
                          amount === value ? 'bg-white text-blue-600' : 'hover:bg-white/10'
                        }`}
                      >
                        ${value}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                {(donationType === 'monthly' || donationType === 'onetime') && (
                  <div className="mt-4">
                    <p className="text-sm text-white mb-2">
                      {t('customAmountDescription')}
                    </p>
                    <Input
                      type="number"
                      inputMode="decimal"
                      value={customAmount}
                      placeholder={t('customAmountPlaceholder')}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      onChange={handleCustomAmountChange}
                      className={cn(
                        "w-full p-4 text-xl border-2 border-white",
                        "bg-transparent text-white placeholder-white/70",
                        "[appearance:textfield]",
                        "[&::-webkit-outer-spin-button]:appearance-none",
                        "[&::-webkit-inner-spin-button]:appearance-none",
                        "outline-none focus:outline-none focus-visible:outline-none",
                        "focus:ring-0 focus:border-white",
                        "hover:bg-white/10 transition-colors",
                        "focus:bg-transparent active:bg-transparent",
                        error && isFocused ? "border-red-500" : "border-white"
                      )}
                      aria-invalid={error && isFocused ? "true" : "false"}
                    />
                    {error && isFocused && (
                      <p className="mt-2 text-white font-semibold text-sm">
                        {error}
                      </p>
                    )}
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-white text-blue-600 hover:bg-blue-100 font-semibold py-10 text-3xl"
                >
                  {t('helpButton')}
                </Button>
              </form>
              
              {(locale === 'ua' || locale === 'ru') && donationType === 'onetime' && (
                <p className="mt-6 text-lg text-center">
                  {t('singlePaymentText')}{' '}
                  <Link
                    href="https://send.monobank.ua/jar/3rE26M54vb"
                    onClick={() => analytics.trackMonobank('Click', formId, locale)}
                    className="underline hover:no-underline"
                  >
                    монобанк
                  </Link>
                </p>
              )}
              
              <p className="mt-4 text-sm text-blue-100">{t('legalText')}</p>
            </div>
          </div>
        </div>
      </div>
      
      <Dialog 
        open={showOnetimeModal} 
        onOpenChange={() => handleModalClose(false)}
      >
        <DialogContent className="sm:max-w-[425px] bg-white border-0">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold text-gray-900">
              {t('onetimeModal.title')}
            </DialogTitle>
            <DialogDescription className="text-lg mt-4 text-gray-600">
              {t('onetimeModal.description')}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 mt-6">
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-semibold"
              onClick={() => handleModalClose(false)}
            >
              {t('onetimeModal.monthlyButton')}
            </Button>
            <Button
              variant="outline"
              className="w-full py-6 text-lg text-gray-300 border-2 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => handleModalClose(true)}
            >
              {t('onetimeModal.onetimeButton')}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default DonationFormTest;
