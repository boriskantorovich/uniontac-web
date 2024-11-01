'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function StatisticsComponent() {
  return (
    <div className="w-full">
      <Card className="bg-gray-900 text-white p-6">
        <CardHeader>
          <CardTitle className="text-[48px] font-semibold text-left mb-2">
            What we have done together
          </CardTitle>
          <p className="text-white text-left text-lg sm:text-xl">
            War doesn't stop so we work daily.
          </p>
        </CardHeader>
        <CardContent className="grid gap-8 md:grid-cols-3">
          <div className="space-y-2">
            <h3 className="text-[48px] font-semibold bg-gradient-to-r from-yellow-400 via-yellow-300 to-blue-300 text-transparent bg-clip-text">
              &gt;500
            </h3>
            <h4 className="text-xl sm:text-2xl font-semibold">Medical kits delivered</h4>
            <p className="text-white">
              That's more than <span className="font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-blue-300 text-transparent bg-clip-text">1000 lives saved.</span>
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-[48px] font-semibold bg-gradient-to-r from-yellow-400 via-yellow-300 to-blue-300 text-transparent bg-clip-text">
              &gt;100
            </h3>
            <h4 className="text-xl sm:text-2xl font-semibold">Volunteers help us</h4>
            <p className="text-white">
              Delivered medical supplies to the frontline faster than light.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-[48px] font-semibold bg-gradient-to-r from-yellow-400 via-yellow-300 to-blue-300 text-transparent bg-clip-text">
              &gt;53
            </h3>
            <h4 className="text-xl sm:text-2xl font-semibold">Brigades and volunteer groups supported</h4>
            <p className="text-white">
              We've delivered critical aid to 15 brigades, ensuring they have the medical supplies they need to save lives.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
