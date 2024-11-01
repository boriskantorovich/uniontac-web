'use client'

import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { VerticalVideoPlayerComponent } from "@/components/vertical-video-player";
import { CtaComponent } from "@/components/cta";
import { HeroComponent } from "@/components/hero";
import { StatisticsComponent } from "@/components/statistics";
import { HowWeHelpComponent } from "@/components/how-do-we-help";
import { MedkitComponent } from "@/components/medkit";
import { DonationFormWithCta } from "@/components/donation-form-with-cta";
import { AboutUsComponent } from "@/components/about-us";
import { FooterComponent } from "@/components/footer";

export default function LocalePage() {
	const [playingVideo1, setPlayingVideo1] = useState<number | null>(null)
	const [playingVideo2, setPlayingVideo2] = useState<number | null>(null)
	const [currentVideoIndex1, setCurrentVideoIndex1] = useState(1) // Start with middle video
	const [currentVideoIndex2, setCurrentVideoIndex2] = useState(1) // Start with middle video
	const videoContainer1Ref = useRef<HTMLDivElement>(null)
	const videoContainer2Ref = useRef<HTMLDivElement>(null)
  
	const urgentCtaText = `TO PROVIDE EMERGENCY ASSISTANCE<br />
	  AND SAVE LIVES,<br />
	  WE NEED YOUR SUPPORT
	  <br /> <br /> EVEN $15 <br />CAN CHANGE SOMEONE'S LIFE`;
  
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
  
	const handleScroll = (containerRef: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
	  if (containerRef.current) {
		const scrollAmount = containerRef.current.clientWidth
		containerRef.current.scrollBy({
		  left: direction === 'left' ? -scrollAmount : scrollAmount,
		  behavior: 'smooth'
		})
	  }
	}
  
	const updateCurrentIndex = (setIndex: React.Dispatch<React.SetStateAction<number>>, direction: 'left' | 'right') => {
	  setIndex(prevIndex => {
		if (direction === 'left') return Math.max(0, prevIndex - 1)
		return Math.min(2, prevIndex + 1)
	  })
	}
  return (
		<>
		  <HeroComponent />
		  <div className="max-w-5xl mx-auto">
			<div id="learn-more">
			  <CtaComponent />
			</div>
	
			<MedkitComponent />
			
			<div id="donate-form">
			  <DonationFormWithCta showCTA={true} ctaText={urgentCtaText} />
			</div>
	
			<StatisticsComponent />
			
			{/* First Video Players Section */}
			<div className="p-6 relative">
			  <div 
				ref={videoContainer1Ref}
				className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-x-visible scroll-smooth"
			  >
				<VerticalVideoPlayerComponent 
				  videoSrc="/videos/Uniontac1.mp4" 
				  isPlaying={playingVideo1 === 0}
				  onPlayPause={() => handleVideoPlayPause1(0)}
				  isVisible={currentVideoIndex1 === 0}
				/>
				<VerticalVideoPlayerComponent 
				  videoSrc="/videos/Uniontac2.mp4" 
				  isPlaying={playingVideo1 === 1}
				  onPlayPause={() => handleVideoPlayPause1(1)}
				  isVisible={currentVideoIndex1 === 1}
				/>
				<VerticalVideoPlayerComponent 
				  videoSrc="/videos/Uniontac3.mp4" 
				  isPlaying={playingVideo1 === 2}
				  onPlayPause={() => handleVideoPlayPause1(2)}
				  isVisible={currentVideoIndex1 === 2}
				/>
			  </div>
			  <div className="md:hidden absolute inset-y-0 left-0 flex items-center">
				<button 
				  onClick={() => {
					handleScroll(videoContainer1Ref, 'left')
					updateCurrentIndex(setCurrentVideoIndex1, 'left')
				  }}
				  className="bg-white bg-opacity-50 p-2 rounded-full"
				  aria-label="Previous video"
				>
				  <ChevronLeft className="w-6 h-6" />
				</button>
			  </div>
			  <div className="md:hidden absolute inset-y-0 right-0 flex items-center">
				<button 
				  onClick={() => {
					handleScroll(videoContainer1Ref, 'right')
					updateCurrentIndex(setCurrentVideoIndex1, 'right')
				  }}
				  className="bg-white bg-opacity-50 p-2 rounded-full"
				  aria-label="Next video"
				>
				  <ChevronRight className="w-6 h-6" />
				</button>
			  </div>
			</div>
	
			<HowWeHelpComponent />
			<AboutUsComponent />
			
			{/* Second Video Players Section */}
			<div className="p-6 relative">
			  <div 
				ref={videoContainer2Ref}
				className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-x-visible scroll-smooth"
			  >
				<VerticalVideoPlayerComponent 
				  videoSrc="/videos/Uniontac4.mp4" 
				  isPlaying={playingVideo2 === 0}
				  onPlayPause={() => handleVideoPlayPause2(0)}
				  isVisible={currentVideoIndex2 === 0}
				/>
				<VerticalVideoPlayerComponent 
				  videoSrc="/videos/Uniontac5.mp4" 
				  isPlaying={playingVideo2 === 1}
				  onPlayPause={() => handleVideoPlayPause2(1)}
				  isVisible={currentVideoIndex2 === 1}
				/>
				<VerticalVideoPlayerComponent 
				  videoSrc="/videos/Uniontac6.mp4" 
				  isPlaying={playingVideo2 === 2}
				  onPlayPause={() => handleVideoPlayPause2(2)}
				  isVisible={currentVideoIndex2 === 2}
				/>
			  </div>
			  <div className="md:hidden absolute inset-y-0 left-0 flex items-center">
				<button 
				  onClick={() => {
					handleScroll(videoContainer2Ref, 'left')
					updateCurrentIndex(setCurrentVideoIndex2, 'left')
				  }}
				  className="bg-white bg-opacity-50 p-2 rounded-full"
				  aria-label="Previous video"
				>
				  <ChevronLeft className="w-6 h-6" />
				</button>
			  </div>
			  <div className="md:hidden absolute inset-y-0 right-0 flex items-center">
				<button 
				  onClick={() => {
					handleScroll(videoContainer2Ref, 'right')
					updateCurrentIndex(setCurrentVideoIndex2, 'right')
				  }}
				  className="bg-white bg-opacity-50 p-2 rounded-full"
				  aria-label="Next video"
				>
				  <ChevronRight className="w-6 h-6" />
				</button>
			  </div>
			</div>
			
			<div>
			  <DonationFormWithCta showCTA={true} ctaText={defaultCtaText} />
			</div>
		  </div>
		  
		  <FooterComponent />
		</>
	  );
	}
