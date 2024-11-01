'use client'

import Link from 'next/link'
import Image from 'next/image'

export function HeroComponent() {
  const handleLearnMoreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const learnMoreSection = document.getElementById('learn-more');
    if (learnMoreSection) {
      learnMoreSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDonateClick = () => {
    const donateSection = document.getElementById('donate-form');
    if (donateSection) {
      donateSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      
      <div className="container relative z-10 flex flex-col justify-between h-full py-12 md:py-24">
        <div className="text-left">
          <h1 className="text-8xl md:text-8xl lg:text-[10rem] font-bold mb-8 leading-[0.9]">
            Save a&nbsp;life<br />now
          </h1>
          <p className="text-3xl mb-16 md:mb-24 font-semibold">
            Send a first aid kit<br /> to those fighting for freedom
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-start gap-4 mb-8 md:items-center">
          <button 
            className="w-full md:w-[400px] bg-blue-600 hover:bg-blue-700 text-white font-semibold py-8 rounded-lg text-3xl transition duration-300"
            onClick={handleDonateClick}
          >
            Help Now!
          </button>
          <Link 
            href="#learn-more" 
            className="text-2xl underline md:ml-8" 
            onClick={handleLearnMoreClick}
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}
