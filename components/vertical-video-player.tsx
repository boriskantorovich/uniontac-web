"use client"

import { useRef, useEffect } from 'react'
import { Play } from 'lucide-react'

interface VerticalVideoPlayerProps {
  videoSrc: string
  posterSrc?: string
  title: string
  isPlaying: boolean
  onPlay: () => void
}

export function VerticalVideoPlayerComponent({ videoSrc, title, isPlaying, onPlay }: VerticalVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
        // Reset video to first frame when paused
        videoRef.current.currentTime = 0
      }
    }
  }, [isPlaying])

  const handlePlay = () => {
    onPlay()
  }

  return (
    <div className="w-full">
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <div className="relative w-full aspect-[9/16] overflow-hidden rounded-lg shadow-lg">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={videoSrc}
          playsInline
          preload="metadata"
        />
        {!isPlaying && (
          <button
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300 hover:bg-opacity-50"
            onClick={handlePlay}
            aria-label="Play video"
          >
            <Play className="w-16 h-16 text-white opacity-80" />
          </button>
        )}
      </div>
    </div>
  )
}
