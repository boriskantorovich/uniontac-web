'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CtaComponent() {
  return (
    <div className="w-full">
      <Card className="bg-gray-900 text-white p-6 sm:p-10 rounded-3xl border-0 ring-0 ring-offset-0 shadow-none">
        <CardHeader>
          <CardTitle className="text-[48px] font-semibold text-left mb-2">
            They can't wait—act now
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
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
        </CardContent>
      </Card>
    </div>
  )
}
