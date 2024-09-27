"use client"

import { useState, useRef } from 'react'
import { Play, Pause } from 'lucide-react'

interface VerticalVideoPlayerProps {
  videoSrc?: string
  posterSrc?: string
}

export function VerticalVideoPlayerComponent({ videoSrc, posterSrc }: VerticalVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="px-4 py-2 w-full max-w-[450px] mx-auto">
      <div className="relative w-full aspect-[9/16] bg-blue-600 overflow-hidden rounded-lg shadow-lg">
        {videoSrc ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src={videoSrc}
            poster={posterSrc}
            playsInline
            preload="metadata"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white text-lg font-semibold">
            Video Placeholder
          </div>
        )}
        
        <button
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300 hover:bg-opacity-50"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <Pause className="w-16 h-16 text-white opacity-80" />
          ) : (
            <Play className="w-16 h-16 text-white opacity-80" />
          )}
        </button>
      </div>
    </div>
  )
}