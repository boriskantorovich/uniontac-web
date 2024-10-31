'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function NonprofitNavComponent() {
  const handleDonateClick = () => {
    const donateSection = document.getElementById('donate-form');
    if (donateSection) {
      donateSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-transparent w-full absolute top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="https://uniontacua.com" className="text-xl font-bold text-white uppercase">
              UNIONTAC
            </a>
          </div>
          <div className="flex items-center">
            <button 
              onClick={handleDonateClick}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 text-base md:text-lg cursor-pointer"
            >
              Help
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
