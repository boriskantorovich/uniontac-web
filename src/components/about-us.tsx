'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function AboutUsComponent() {
  return (
    <div className="w-full">
      <Card className="bg-gray-900 text-white p-6 border-0 ring-0 ring-offset-0 shadow-none">
        <CardHeader>
          <CardTitle className="text-[48px] font-semibold text-left mb-2">
            We are{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-blue-300 text-transparent bg-clip-text">
              Sveta, Kira, and &gt;100 volunteers
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:order-2 md:w-1/2 space-y-4">
              <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
                <Image
                  src="/images/team/team.jpg"
                  alt="Sveta and Kira"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div className="md:order-1 md:w-1/2">
              <div className="space-y-4">
                <p className="text-white text-lg">
                  Our mission is to provide them with the necessary first aid kits so they can face the challenges of each day.
                </p>
                <p className="text-white text-lg">
                  For the military, there are no weekends, holidays, or the possibility to "leave" the front. The enemy doesn't know the word "rest," and every day, our warriors stand at the forefront, at the cost of their health and lives.
                </p>
                <p className="text-white text-lg">
                  Help now to support those who hold the front for us – each first aid kit becomes a symbol of gratitude and care for those who bear the burden of protecting our freedom.
                </p>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-6 text-xl">
                  PAY FOR AID KIT
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
