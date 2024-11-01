'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

export function CtaComponent() {
  return (
    <div className="w-full">
      <Card className="bg-gray-900 text-white p-6 rounded-3xl border-0 ring-0 ring-offset-0 shadow-none">
        <CardHeader>
          <CardTitle className="text-[48px] font-semibold text-left mb-2">
            They can't wait—act now
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:order-2 md:w-1/2 space-y-4">
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/cta/cta.jpg"
                  alt="CTA Image 1"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:order-1 md:w-1/2">
              <div className="space-y-4">
                <p className="text-white text-lg">
                  Every day, Russia shells Ukrainians with all possible weapons: drones, artillery, bombs and rockets, bringing death to ordinary people—women and children.
                </p>
                <p className="text-white text-lg">
                  Those on the frontline are losing their lives to protect their families, homes, freedom, and justice.
                </p>
                <p className="text-white text-lg">
                  For over a year, Uniontac has been providing vital support to Ukraine—medkits that save lives in critical moments.
                </p>
                <p className="text-white text-lg">
                  One first aid kit can save two lives, increasing the chances of survival and allowing evacuation from the combat zone.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
