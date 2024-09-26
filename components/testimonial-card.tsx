'use client'

import Image from 'next/image'

interface TestimonialCardProps {
  testimonial: {
    imageSrc: string;
    quote: string;
    author: string;
  }
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { imageSrc, quote, author } = testimonial;

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-[800px] w-full mx-auto">
      <div className="relative aspect-[4/3]">
        <Image
          src={imageSrc}
          alt={author}
          fill
          sizes="(max-width: 800px) 100vw, 800px"
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 text-white p-6 md:p-10">
          <blockquote className="text-xl md:text-2xl mb-4">&ldquo;{quote}&rdquo;</blockquote>
          <p className="text-lg md:text-xl font-semibold">{author}</p>
        </div>
      </div>
    </div>
  )
}
