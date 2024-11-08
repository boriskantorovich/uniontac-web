"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useTranslations } from 'next-intl'
import { analytics } from '@/utils/analytics'

interface DonationFormProps {
  showCTA?: boolean;
  variant?: 'urgent' | 'default';
  formId: string;
}

const paymentLinks = {
  '5': 'https://buy.stripe.com/8wM01005HgQv90s8wA',
  '10': 'https://buy.stripe.com/fZedRQ9GhgQvgsUaEF',
  '15': 'https://buy.stripe.com/fZe1549GhdEjfoQbIK'
};

export function DonationFormWithCta({ 
  showCTA = false, 
  variant = 'default',
  formId
}: DonationFormProps) {
  const t = useTranslations('donationForm')
  const [amount, setAmount] = useState<string>('15')

  const ctaText = t(`ctaTexts.${variant}`)

  const handleAmountClick = (value: string) => {
    setAmount(value)
    analytics.trackDonationForm('Payment Option Click', `$${value}`, formId);
  }

  const handleDonateClick = () => {
    const numericAmount = parseInt(amount, 10);

    if (!isNaN(numericAmount) && numericAmount > 0) {
      analytics.trackDonationForm('Donate Button Click', `$${amount}`, formId, numericAmount);
    }

    window.location.href = paymentLinks[amount as keyof typeof paymentLinks]
  }

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
            <p className="mb-6">
              {t('description.text')}
            </p>
            <p className="text-xl mb-8">{t('monthlySupport')}</p>
            
            <form onSubmit={(e) => { 
              e.preventDefault(); 
              handleDonateClick(); 
            }} className="space-y-6 mb-8">
              <RadioGroup
                value={amount}
                onValueChange={handleAmountClick}
                className="grid grid-cols-3 gap-4"
              >
                {Object.keys(paymentLinks).map((value) => (
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
            
            <p className="mt-4 text-sm text-blue-100">
              {t('legalText')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
