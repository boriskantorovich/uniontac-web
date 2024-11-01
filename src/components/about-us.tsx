'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function AboutUsComponent() {
  return (
    <Card className="bg-gray-900 text-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-3xl m-6">
      <CardHeader className="text-center">
        <div className="grid grid-cols-2 gap-2 mb-6">
          <Image src="/placeholder.svg?height=200&width=200" width={200} height={200} alt="Sveta" className="rounded-lg" />
          <Image src="/placeholder.svg?height=200&width=200" width={200} height={200} alt="Kira with protesters" className="rounded-lg" />
          <Image src="/placeholder.svg?height=200&width=200" width={200} height={200} alt="Close-up of eyes" className="rounded-lg" />
          <Image src="/placeholder.svg?height=200&width=200" width={200} height={200} alt="Kira working" className="rounded-lg" />
        </div>
        <div className="text-blue-400 text-sm font-semibold mb-2">About us</div>
        <CardTitle className="text-[48px] font-semibold mb-4 text-left">
          We are{" "}
          <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
            Sveta and Kira
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-gray-300 text-sm sm:text-base">
        <p>
          Our mission is to provide them with the necessary first aid kits so they can face the challenges of each day.
        </p>
        <p>
          For the military, there are no weekends, holidays, or the possibility to "leave" the front. The enemy doesn't know the word "rest," and every day, our warriors stand at the forefront, at the cost of their health and lives.
        </p>
        <p>
          Help now to support those who hold the front for us – each first aid kit becomes a symbol of gratitude and care for those who bear the burden of protecting our freedom.
        </p>
        <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 rounded-lg text-lg mt-6">
          PAY FOR AID KIT
        </Button>
      </CardContent>
    </Card>
  )
}
