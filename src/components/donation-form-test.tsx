"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useTranslations } from 'next-intl'
import { analytics } from '@/utils/analytics'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { locales } from '@/i18n/config'

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
  const params = useParams()
  const locale = params.locale as keyof typeof PAYMENT_LINKS.monthly
  const isUaLocale = locale === 'ua' && locales.includes('ua')
  
  const [donationType, setDonationType] = useState<DonationType>('monthly')
  const [amount, setAmount] = useState<AmountType[typeof donationType]>(DEFAULT_AMOUNTS[donationType])

  const handleAmountClick = (value: string) => {
    setAmount(value as AmountType[typeof donationType])
    analytics.trackDonationForm('Payment Option Click', `$${value}`, formId)
  }

  const handleDonateClick = () => {
    const paymentLink = PAYMENT_LINKS[donationType][locale][amount as keyof PaymentLinksType[typeof donationType][typeof locale]]
    if (paymentLink) {
      analytics.trackDonation(parseInt(amount, 10), formId)
      window.location.href = paymentLink
    }
  }

  const handleDonationTypeChange = (type: DonationType) => {
    setDonationType(type)
    setAmount(DEFAULT_AMOUNTS[type])
    analytics.trackDonationForm('Type Change', type, formId)
  }

  const ctaText = t(`ctaTexts.${variant}`)

  return (
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

              <Button
                type="submit"
                className="w-full bg-white text-blue-600 hover:bg-blue-100 font-semibold py-10 text-3xl"
              >
                {t('helpButton')}
              </Button>
            </form>
            
            {(locale === 'ua' || locale === 'ru') && donationType === 'onetime' && (
              <p className="mt-6 text-lg text-center">
                {t('singlePaymentText').replace('монобанк', '')}
                <Link
                  href="https://send.monobank.ua/jar/3rE26M54vb"
                  onClick={() => analytics.trackMonobank('Click', formId)}
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
  )
}

export default DonationFormTest;
