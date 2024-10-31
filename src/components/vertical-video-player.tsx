"use client"

import { useRef, useEffect, useState } from 'react'
import { Play, Pause } from 'lucide-react'

interface VerticalVideoPlayerProps {
  videoSrc: string
  isPlaying: boolean
  onPlayPause: () => void
  isVisible: boolean
}

export function VerticalVideoPlayerComponent({ videoSrc, isPlaying, onPlayPause, isVisible }: VerticalVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying && isVisible) {
        videoRef.current.play()
        setIsVideoPlaying(true)
      } else {
        videoRef.current.pause()
        setIsVideoPlaying(false)
      }
    }
  }, [isPlaying, isVisible])

  const handlePlayPause = () => {
    if (isVisible) {
      onPlayPause()
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  return (
    <div className={`w-full ${isVisible ? 'block' : 'hidden md:block'}`}>
      <div className="relative w-full aspect-[9/16] overflow-hidden rounded-[2rem] shadow-lg">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={videoSrc}
          playsInline
          preload="metadata"
          onClick={handlePlayPause}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
        <button
          className="absolute inset-0 flex items-center justify-center"
          onClick={handlePlayPause}
          aria-label={isVideoPlaying ? "Pause video" : "Play video"}
        >
          <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center">
            {isVideoPlaying ? (
              <Pause className="w-8 h-8 text-white" fill="white" />
            ) : (
              <Play className="w-8 h-8 text-white" fill="white" />
            )}
          </div>
        </button>
      </div>
    </div>
  )
}
