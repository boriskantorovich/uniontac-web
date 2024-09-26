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
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          HELP WOMEN SUFFERING FROM DOMESTIC VIOLENCE
        </h1>
        <p className="text-lg mb-8">
          Get emergency shelter, psychological help, comprehensive support, and break free from the vicious cycle
        </p>
        <button 
          className="w-full md:w-[400px] bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 md:py-4 rounded-full transition duration-300 text-lg md:text-xl"
          onClick={handleDonateClick}
        >
          <span className="block">Help Now!</span>
        </button>
        <div className="mt-4">
          <Link href="#learn-more" className="text-lg underline" onClick={handleLearnMoreClick}>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}
