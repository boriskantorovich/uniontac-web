'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CircleIcon } from 'lucide-react'

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
    <div className="w-full max-w-6xl mx-auto p-6">
      <Card className="bg-yellow-400 p-8 rounded-3xl">
        <CardHeader className="p-0 mb-6">
          <CardTitle className="text-3xl font-bold text-center text-blue-600">
            HOW IT WORKS
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-start text-left">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white mb-4">
                  <CircleIcon className="w-8 h-8" />
                  <span className="absolute font-bold">{index + 1}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-blue-600">{step.title}</h3>
                <p className="text-lg font-semibold text-blue-600 whitespace-pre-line">{step.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
