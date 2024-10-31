'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

export function MedkitComponent() {
  return (
    <div className="w-full p-6">
      <Card className="bg-yellow-400 p-8 rounded-3xl">
        <CardHeader className="p-0 mb-6">
          <CardTitle className="text-3xl font-bold text-center text-blue-600">
            HOW THE FIRST-AID KIT WORKS
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:order-2 md:w-1/2 space-y-4">
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/medkit1.jpg"
                  alt="Medkit Image 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/medkit2.jpg"
                  alt="Medkit Image 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:order-1 md:w-1/2">
              <div className="space-y-4 text-lg text-blue-600">
                <p>
                  Our first-aid kit is designed for immediate response to trauma and emergency situations. Each component is carefully selected and arranged for quick access, allowing responders to provide critical care in the crucial first minutes after an injury. The kit includes essential items for controlling bleeding, managing airways, and treating various trauma conditions.
                </p>
                <p>
                  The compact and durable design ensures that all life-saving equipment stays protected and organized. Color-coded sections and clear labeling make it easy to locate specific items under pressure, while the water-resistant exterior protects the contents in any environment. This kit meets international emergency medical standards and is regularly updated based on field experience and medical advances.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
