'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function StatisticsComponentComponent() {
  return (
    <Card className="bg-gray-900 text-white p-6 sm:p-10">
      <CardHeader>
        <CardTitle className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-2">
          You made it possible
        </CardTitle>
        <p className="text-gray-400 text-center text-lg sm:text-xl">
          Danger doesn't stop so we work daily.
        </p>
      </CardHeader>
      <CardContent className="grid gap-8 md:grid-cols-2">
        <div className="space-y-2">
          <h3 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
            185
          </h3>
          <h4 className="text-xl sm:text-2xl font-semibold">Medical kits delivered</h4>
          <p className="text-gray-400">
            Thanks to your support, we've bought 185 medical kits.
          </p>
          <p className="text-gray-400">
            That's more than 370 lives saved.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            15
          </h3>
          <h4 className="text-xl sm:text-2xl font-semibold">Brigades Supported</h4>
          <p className="text-gray-400">
            We've delivered critical aid to 15 brigades, ensuring they have the medical supplies they need to save lives.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}