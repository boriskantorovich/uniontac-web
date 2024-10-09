'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

const medkitItems = [
  "1x Pouch",
  "1x Israeli-type Bandage 6\"",
  "1x Nasopharyngeal Airway with Lubricant (\"Kyivguma\")",
  "1x Thermal Blanket (Pixel)",
  "1x Tactical Scissors",
  "1x Marker",
  "1x Non-woven Base Plaster (10 m)",
  "2x Pairs of Nitrile Gloves",
  "1x Tourniquet (\"SICH\")",
  "1x Sterile Compressed Bandage (for tamponade)",
  "1x Hemostatic Corrugated Bandage (\"Hemostat\")",
  "1x Eye Patch",
  "1x Occlusive Sticker (\"Kyivguma\" with valve)",
  "1x Gel Burn Dressing (\"Opikun\" 10x10 cm)"
]

export function MedkitComponent() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <Card className="bg-yellow-400 p-8 rounded-3xl">
        <CardHeader className="p-0 mb-6">
          <CardTitle className="text-3xl font-bold text-center text-blue-600">
            WHAT'S INCLUDED IN FIRST-AID KIT:
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
              <ul className="list-disc list-inside space-y-2">
                {medkitItems.map((item, index) => (
                  <li key={index} className="text-lg font-semibold text-blue-600">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
