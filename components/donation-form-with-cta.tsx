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
          ПОМОГИТЕ ЖЕРТВАМ ДОМАШНЕГО НАСИЛИЯ
        </h3>
        <p className="text-gray-600 mb-4 text-left">
         Получить экстренное убежище, <br />психологическую помощь, <br />комплексное сопровождение<br />и вырваться из замкнутого круга
        </p>
        <p className="mb-4 text-left">
          Подпишитесь на <span className="font-bold">ежемесячные</span> пожертвования
          <br /> <br />
          Без вашей помощи они не справятся
        </p>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {Object.keys(paymentLinks).map((value) => (
            <Button
              key={value}
              variant={amount === value ? "default" : "outline"}
              onClick={() => handleAmountClick(value)}
              className={`w-full ${
                amount === value 
                  ? 'bg-red-400 hover:bg-red-500 text-white' 
                  : 'hover:bg-red-100'
              }`}
            >
              ${value}
            </Button>
          ))}
        </div>
        <Button 
          className="w-full bg-red-500 hover:bg-red-600 text-white mb-4 text-lg py-3 rounded-md"
          onClick={handleDonateClick}
        >
          Помочь сейчас!
        </Button>
        <p className="text-xs text-gray-500 text-left">
          Нажимая кнопку, вы соглашаетесь с условиями обработки данных и подтверждаете добровольное пожертвование в НН (в общем, текст короче и все лигалы увести в ссылки)
        </p>
      </div>
    </div>
  )
}
