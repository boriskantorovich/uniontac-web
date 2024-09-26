'use client'

import { TestimonialCard } from './testimonial-card'
import { testimonials } from '../data/testimonials'

export function CtaComponent() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-red-600 to-red-800 py-12 px-4 md:px-8">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 max-w-[800px] w-full mb-8"> {/* Changed mb-12 to mb-8 */}
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Сотни тысяч женщин</h2>
          <p className="text-base md:text-lg mb-4">
            подвергаются насилию в России.
          </p>
          <p className="text-base md:text-lg mb-4">
            18000 женщин бы убиты только в 2021 году . Гораздо больше — подверглись избиениям и сексуальному насилию. И ситуация становится все хуже.
          </p>
          <p className="text-base md:text-lg mb-4">
            Чаще всего насильники — это самые близкие люди — мужья, сыновья, отцы, близкие родственники.
          </p>
          <p className="text-base md:text-lg mb-6">
            Женщины беззащитны перед ними. Им некуда уйти, за них некому заступиться.
          </p>
          <p className="text-2xl md:text-3xl font-bold">Им нужна ваша помощь!</p>
        </div>
      </div>
      <TestimonialCard testimonial={testimonials[2]} />
    </div>
  )
}
