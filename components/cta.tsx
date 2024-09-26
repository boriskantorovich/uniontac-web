'use client'

import { TestimonialCard } from './testimonial-card'
import { testimonials } from '../data/testimonials'

export function CtaComponent() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-red-600 to-red-800 py-12 px-4 md:px-8">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 max-w-[800px] w-full mb-8">
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hundreds of thousands of women</h2>
          <p className="text-base md:text-lg mb-4">
            are subjected to violence in Russia.
          </p>
          <p className="text-base md:text-lg mb-4">
            18,000 women were killed in 2021 alone. Many more were beaten and sexually assaulted. And the situation is getting worse.
          </p>
          <p className="text-base md:text-lg mb-4">
            Most often, the abusers are the closest people — husbands, sons, fathers, close relatives.
          </p>
          <p className="text-base md:text-lg mb-6">
            Women are defenseless against them. They have nowhere to go, no one to stand up for them.
          </p>
          <p className="text-2xl md:text-3xl font-bold">They need your help!</p>
        </div>
      </div>
      <TestimonialCard testimonial={testimonials[2]} />
    </div>
  )
}
