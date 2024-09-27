"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export function DonationFormComponent() {
  const [donationAmount, setDonationAmount] = useState("15")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Donation submitted", { donationAmount })
  }

  return (
    <div className="bg-blue-600 text-white p-8 rounded-3xl max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">HELP VICTIMS OF DOMESTIC VIOLENCE</h2>
      <p className="mb-6">
        Get emergency shelter, psychological help, comprehensive support
        and break free from the vicious cycle
      </p>
      <p className="text-xl mb-4">Subscribe to monthly donations</p>
      <p className="mb-6 font-semibold">They can't do it without your help</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <RadioGroup
          defaultValue="15"
          onValueChange={setDonationAmount}
          className="grid grid-cols-3 gap-4"
        >
          {["10", "15", "25"].map((amount) => (
            <div key={amount}>
              <RadioGroupItem
                value={amount}
                id={`amount-${amount}`}
                className="peer sr-only"
              />
              <Label
                htmlFor={`amount-${amount}`}
                className="flex items-center justify-center p-4 border-2 border-white rounded-lg cursor-pointer peer-checked:bg-white peer-checked:text-blue-600 transition-colors"
              >
                ${amount}
              </Label>
            </div>
          ))}
        </RadioGroup>

        <Button
          type="submit"
          className="w-full bg-white text-blue-600 hover:bg-blue-100 font-semibold py-3 rounded-lg text-lg"
        >
          Help Now!
        </Button>
      </form>

      <p className="mt-4 text-sm text-blue-100">
        By clicking the button, you agree to the terms of data processing and confirm a voluntary donation to NN (in general, the text is shorter and all legalities are taken to links)
      </p>
    </div>
  )
}
