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
    <div className="relative h-[750px] md:h-[800px] flex flex-col justify-center items-center p-6 text-white font-sans">
      <Image
        src="/images/hero/hero-background.jpg"
        alt="Background"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-10 max-w-[800px] w-full text-center flex flex-col justify-between h-full py-12">
        <div>
          <h1 className="text-8xl md:text-9xl lg:text-[10rem] font-bold mb-6 leading-[0.9]">
            Save a&nbsp;life now
          </h1>
          <p className="text-2xl mb-16 font-semibold">
            Send a&nbsp;first aid kit<br /> to&nbsp;those fighting for&nbsp;freedom
          </p>
        </div>
        <div className="flex flex-col items-center">
          <button 
            className="w-full md:w-[400px] bg-yellow-400 hover:bg-yellow-500 font-semibold py-8 rounded-lg text-3xl transition duration-300 mb-4"
            onClick={handleDonateClick}
          >
            Help Now!
          </button>
          <Link href="#learn-more" className="text-2xl underline" onClick={handleLearnMoreClick}>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}
