"use client"

import { useState } from 'react'
import { HeroComponent } from '../components/hero'
import { CtaComponent } from '../components/cta'
import { NonprofitNavComponent } from '../components/nonprofit-nav'
import { StatisticsComponent } from '../components/statistics'
import { Team } from '../components/team'
import { DonationFormWithCta } from '../components/donation-form-with-cta'
import { HowWeHelpComponent } from '../components/how-do-we-help'
import { VerticalVideoPlayerComponent } from '../components/vertical-video-player'

export default function Home() {
  const [playingVideo1, setPlayingVideo1] = useState<number | null>(null)
  const [playingVideo2, setPlayingVideo2] = useState<number | null>(null)

  const urgentCtaText = `TO PROVIDE EMERGENCY ASSISTANCE<br />
    AND SAVE LIVES,<br />
    WE NEED YOUR SUPPORT
    <br /> <br /> EVEN $10 <br />CAN CHANGE SOMEONE'S LIFE`;

  const defaultCtaText = `DON'T PASS BY THOSE WHO<br />
    DESPERATELY NEED<br />
    HELP`;

  const handleVideoPlayPause1 = (index: number) => {
    setPlayingVideo1(prevPlayingVideo => prevPlayingVideo === index ? null : index)
    setPlayingVideo2(null) // Pause any playing video in the second set
  }

  const handleVideoPlayPause2 = (index: number) => {
    setPlayingVideo2(prevPlayingVideo => prevPlayingVideo === index ? null : index)
    setPlayingVideo1(null) // Pause any playing video in the first set
  }

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <NonprofitNavComponent />
      <HeroComponent />
      <div id="learn-more">
        <CtaComponent />
      </div>
      
      {/* First Video Players Section */}
      <div className="w-full max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <VerticalVideoPlayerComponent 
            videoSrc="/videos/Uniontac1.mp4" 
            isPlaying={playingVideo1 === 0}
            onPlayPause={() => handleVideoPlayPause1(0)}
          />
          <VerticalVideoPlayerComponent 
            videoSrc="/videos/Uniontac2.mp4" 
            isPlaying={playingVideo1 === 1}
            onPlayPause={() => handleVideoPlayPause1(1)}
          />
          <VerticalVideoPlayerComponent 
            videoSrc="/videos/Uniontac3.mp4" 
            isPlaying={playingVideo1 === 2}
            onPlayPause={() => handleVideoPlayPause1(2)}
          />
        </div>
      </div>
      
      <HowWeHelpComponent />

      {/* Second Video Players Section */}
      <div className="w-full max-w-6xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <VerticalVideoPlayerComponent 
            videoSrc="/videos/Uniontac4.mp4" 
            isPlaying={playingVideo2 === 0}
            onPlayPause={() => handleVideoPlayPause2(0)}
          />
          <VerticalVideoPlayerComponent 
            videoSrc="/videos/Uniontac5.mp4" 
            isPlaying={playingVideo2 === 1}
            onPlayPause={() => handleVideoPlayPause2(1)}
          />
          <VerticalVideoPlayerComponent 
            videoSrc="/videos/Uniontac6.mp4" 
            isPlaying={playingVideo2 === 2}
            onPlayPause={() => handleVideoPlayPause2(2)}
          />
        </div>
      </div>
      
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
