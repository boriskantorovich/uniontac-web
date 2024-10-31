'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CtaComponent() {
  return (
    <div className="w-full p-6">
      <Card className="bg-gray-900 text-white p-6 sm:p-10 rounded-3xl">
        <CardHeader>
          <CardTitle className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-2">
            THEY CAN'T WAIT—ACT NOW
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
