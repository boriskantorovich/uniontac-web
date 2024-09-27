'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownToLine } from 'lucide-react'

const steps = [
  {
    title: "You make a donation",
    description: "The cost of one first aid kit is $80.\n\nThis is the price of saving lives and preventing irreversible harm.\n\nThe kit is crucial in the \"golden hour\"—the first hour after injury, when quick medical help significantly increases survival chances."
  },
  {
    title: "We order medkits",
    description: "UNIONTAC works with trusted Ukrainian manufacturers.\n\nOnce we place the order, they quickly deliver the medical kits to us.\n\nOur volunteers then handle the delivery."
  },
  {
    title: "Medkits save lives",
    description: "Our volunteers deliver these life-saving supplies without delay, despite the daily shelling and threats.\n\nWe ensure the kits reach people on the frontlines—civilians, medics, and defenders—providing exactly what they need to save lives."
  }
]

export function HowWeHelpComponent() {
  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <Card className="bg-yellow-400 p-8 rounded-3xl">
        <CardHeader className="p-0 mb-6">
          <CardTitle className="text-3xl font-bold text-left text-blue-600">
            HOW IT WORKS
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex flex-col space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-start text-left">
                <ArrowDownToLine className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-semibold mb-2 text-blue-600">{step.title}</h3>
                <p className="text-base text-blue-600 whitespace-pre-line font-semibold">{step.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
