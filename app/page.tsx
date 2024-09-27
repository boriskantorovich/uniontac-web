"use client"

import { useState } from 'react'
import { HeroComponent } from '../components/hero'
import { CtaComponent } from '../components/cta'
import { HelpCardComponent } from '../components/help-card'
import { TestimonialCard } from '../components/testimonial-card'
import { NonprofitNavComponent } from '../components/nonprofit-nav'
import { StatisticsComponent } from '../components/statistics'
import { Team } from '../components/team'
import { testimonials } from '../data/testimonials'
import { helpCardsData } from '../data/helpCardsData'
import { DonationFormWithCta } from '../components/donation-form-with-cta'
import { HowWeHelpComponent } from '../components/how-do-we-help'
import { VerticalVideoPlayerComponent } from '../components/vertical-video-player'

export default function Home() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)

  console.log('Testimonials:', testimonials);

  const urgentCtaText = `TO PROVIDE EMERGENCY ASSISTANCE<br />
    AND SAVE LIVES,<br />
    WE NEED YOUR SUPPORT
    <br /> <br /> EVEN $10 <br />CAN CHANGE SOMEONE'S LIFE`;

  const defaultCtaText = `DON'T PASS BY THOSE WHO<br />
    DESPERATELY NEED<br />
    HELP`;

  const handleVideoPlayPause = (index: number) => {
    setPlayingVideo(prevPlayingVideo => prevPlayingVideo === index ? null : index)
  }

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <NonprofitNavComponent />
      <HeroComponent />
      <div id="learn-more">
        <CtaComponent />
      </div>
      
      {/* Video Players Section */}
      <div className="w-full max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <VerticalVideoPlayerComponent 
            videoSrc="/videos/Uniontac1.mp4" 
            title="Delivering Aid"
            isPlaying={playingVideo === 0}
            onPlay={() => handleVideoPlayPause(0)}
          />
          <VerticalVideoPlayerComponent 
            videoSrc="/videos/Uniontac2.mp4" 
            title="Training Medics"
            isPlaying={playingVideo === 1}
            onPlay={() => handleVideoPlayPause(1)}
          />
          <VerticalVideoPlayerComponent 
            videoSrc="/videos/Uniontac3.mp4" 
            title="Saving Lives"
            isPlaying={playingVideo === 2}
            onPlay={() => handleVideoPlayPause(2)}
          />
        </div>
      </div>
      
      <HowWeHelpComponent />
      <div id="donate-now" className="max-w-4xl mx-auto">
        <DonationFormWithCta />
      </div>
      <div className="max-w-4xl mx-auto">
        <DonationFormWithCta showCTA={true} ctaText={urgentCtaText} />
      </div>
      <StatisticsComponent />
      <Team />
      <div className="max-w-4xl mx-auto">
        <DonationFormWithCta showCTA={true} ctaText={defaultCtaText} />
      </div>
    </div>
  );
}
