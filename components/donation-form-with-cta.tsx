"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface DonationFormProps {
  showCTA?: boolean;
  ctaText?: string;
}

const paymentLinks = {
  '10': 'https://buy.stripe.com/test_00geVC122fOC7S0eUU',
  '15': 'https://buy.stripe.com/test_14k5l2dOO0TI7S0cMN',
  '25': 'https://buy.stripe.com/test_8wM6p6bGG0TIfkscMO'
};

export function DonationFormWithCta({ showCTA = false, ctaText }: DonationFormProps) {
  const [amount, setAmount] = useState<string>('15')

  const handleAmountClick = (value: string) => {
    setAmount(value)
  }

  const handleDonateClick = () => {
    window.open(paymentLinks[amount as keyof typeof paymentLinks], '_blank')
  }

  return (
    <div className="w-full p-6">
      {showCTA && ctaText && (
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-left" dangerouslySetInnerHTML={{ __html: ctaText }}></h2>
      )}
      <div className="bg-blue-600 text-white p-8 rounded-3xl">
        <h2 className="text-3xl font-bold mb-4">SAVE A LIFE TODAY</h2>
        <p className="mb-6">
          Since February 24, 2022, <strong>there hasn't been a single day without deaths and casualties</strong> in Ukraine.
        </p>
        <p className="text-xl mb-8">Subscribe to monthly support</p>
        
        <form onSubmit={(e) => { e.preventDefault(); handleDonateClick(); }} className="space-y-6 mb-8">
          <RadioGroup
            value={amount}
            onValueChange={handleAmountClick}
            className="grid grid-cols-3 gap-4"
          >
            {Object.keys(paymentLinks).map((value) => (
              <div key={value}>
                <RadioGroupItem
                  value={value}
                  id={`amount-${value}`}
                  className="peer sr-only"
                />
                <Label
                  htmlFor={`amount-${value}`}
                  className={`flex items-center justify-center p-4 border-2 border-white rounded-lg cursor-pointer transition-colors ${
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
            className="w-full bg-white text-blue-600 hover:bg-blue-100 font-semibold py-10 rounded-lg text-3xl"
          >
            Help Now!
          </Button>
        </form>
        
        <p className="mt-4 text-sm text-blue-100">
          By clicking the button, you agree to the terms of data processing and confirm a voluntary donation to Uniontac (the text is shorter and all legalities are taken to links)
        </p>
      </div>
    </div>
  )
}
