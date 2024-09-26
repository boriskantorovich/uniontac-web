"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"

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
    <div className="w-full max-w-4xl mx-auto p-6">
      {showCTA && ctaText && (
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-left" dangerouslySetInnerHTML={{ __html: ctaText }}></h2>
      )}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-left">
          HELP VICTIMS OF DOMESTIC VIOLENCE
        </h3>
        <p className="text-gray-600 mb-4 text-left">
          Get emergency shelter, <br />psychological help, <br />comprehensive support<br />and break free from the vicious cycle
        </p>
        <p className="mb-4 text-left">
          Subscribe to <span className="font-bold">monthly</span> donations
          <br /> <br />
          They can't do it without your help
        </p>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {Object.keys(paymentLinks).map((value) => (
            <Button
              key={value}
              variant={amount === value ? "default" : "outline"}
              onClick={() => handleAmountClick(value)}
              className={`w-full ${
                amount === value 
                  ? 'bg-yellow-500 hover:bg-yellow-600 text-white' 
                  : 'hover:bg-yellow-100'
              }`}
            >
              ${value}
            </Button>
          ))}
        </div>
        <Button 
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white mb-4 text-lg py-3 rounded-md"
          onClick={handleDonateClick}
        >
          Help Now!
        </Button>
        <p className="text-xs text-gray-500 text-left">
          By clicking the button, you agree to the terms of data processing and confirm a voluntary donation to NN (in general, the text is shorter and all legalities are taken to links)
        </p>
      </div>
    </div>
  )
}
