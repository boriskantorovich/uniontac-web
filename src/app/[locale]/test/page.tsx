'use client'

import { DonationFormTest } from "@/components/donation-form-test"

export default function TestPage() {
  return (
    <div className="container mx-auto p-4 pt-20">
      <h1 className="text-4xl font-bold mb-8 text-white">Test Version - Donation Form</h1>
      <DonationFormTest 
        showCTA={true} 
        variant="urgent" 
        formId="test-form" 
      />
    </div>
  )
} 
