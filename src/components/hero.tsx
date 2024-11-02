'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { scrollHandlers } from "@/utils/scroll-handlers"

export function HeroComponent() {
  const t = useTranslations('hero')

  return (
    <div className="relative h-[750px] md:h-[800px] flex flex-col justify-center text-white font-sans border-0">
      <Image
        src="/images/hero/hero.jpg"
        alt="Background"
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" /> 
      
      <div className="w-full p-6 md:p-20 relative z-10 flex flex-col justify-between h-full py-12 md:py-24">
        <div className="text-left">
          <h1 
            className="text-8xl md:text-8xl lg:text-[10rem] font-bold mb-8 leading-[0.9]"
            dangerouslySetInnerHTML={{ __html: t('title') }}
          />
          <p 
            className="text-3xl mb-16 md:mb-24 font-semibold"
            dangerouslySetInnerHTML={{ __html: t('subtitle') }}
          />
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-2 md:items-center">
          <button 
            className="w-full md:w-[400px] bg-blue-600 hover:bg-blue-700 text-white font-semibold py-8 rounded-lg text-3xl transition duration-300"
            onClick={() => scrollHandlers.handleDonateClick()}
          >
            {t('helpButton')}
          </button>
          <Link 
            href="#learn-more" 
            className="text-2xl underline text-center w-full md:text-left md:w-auto md:ml-8" 
            onClick={scrollHandlers.handleLearnMoreClick}
          >
            {t('learnMore')}
          </Link>
        </div>
      </div>
    </div>
  )
}
