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
    const donateSection = document.getElementById('donate-now');
    if (donateSection) {
      donateSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-[600px] md:h-[800px] flex flex-col justify-center items-center p-6 text-white font-sans">
      <Image
        src="/images/hero/hero-background.jpg"
        alt="Background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 max-w-[800px] w-full text-center">
        <h1 className="text-8xl md:text-9xl lg:text-[10rem] font-bold mb-6 leading-tight">
          Save a life now
        </h1>
        <p className="text-2xl mb-8">
          Send a first aid kit<br /> to those fighting for freedom
        </p>
        <button 
          className="w-full md:w-[400px] bg-yellow-400 hover:bg-yellow-500 font-semibold py-10 rounded-lg text-3xl transition duration-300"
          onClick={handleDonateClick}
        >
          Help Now!
        </button>
        <div className="mt-4">
          <Link href="#learn-more" className="text-2xl underline" onClick={handleLearnMoreClick}>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}
