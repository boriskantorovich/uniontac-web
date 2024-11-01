'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FirstAidKitStatsComponent() {
  return (
    <Card className="bg-gray-900 text-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-3xl">
      <CardHeader className="text-center">
        <CardTitle className="text-[48px] font-semibold text-left mb-4">
          First aid kit — a{" "}
          <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
            chance for life!
          </span>
        </CardTitle>
        <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-4">
          UnionTac — A team dedicated to providing maximum support to the military, supplying them with essential gear.
        </p>
        <p className="text-gray-300 text-xs sm:text-sm mb-6">
          Our primary focus is on the procurement of tactical first aid kits. Each of which has the ability to save two lives on the battlefield. Join our mission, together we can assist our defenders!
        </p>
      </CardHeader>
      <CardContent className="grid gap-6 sm:gap-8 md:grid-cols-2">
        <StatItem
          emoji="👥"
          value="100+"
          label="Volunteers"
          description="From around the world, including in combat zones."
        />
        <StatItem
          emoji="🎖️"
          value="8+"
          label="Brigades Supported"
          description="We have met the needs of over seven brigades of the Armed Forces of Ukraine in 2023."
        />
      </CardContent>
    </Card>
  )
}

function StatItem({ emoji, value, label, description }: { emoji: string, value: string, label: string, description: string }  ) {
  return (
    <div className="text-center space-y-2 p-4 bg-gray-800 rounded-2xl">
      <div className="text-4xl mb-2">{emoji}</div>
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
        {value}
      </h3>
      <h4 className="text-lg sm:text-xl font-semibold text-gray-300">{label}</h4>
      <p className="text-gray-400 text-xs sm:text-sm">{description}</p>
    </div>
  )
}
