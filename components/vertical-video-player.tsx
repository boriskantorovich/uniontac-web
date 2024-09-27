"use client"

import { useRef, useEffect } from 'react'
import { Play } from 'lucide-react'

interface VerticalVideoPlayerProps {
  videoSrc: string
  isPlaying: boolean
  onPlayPause: () => void
}

export function VerticalVideoPlayerComponent({ videoSrc, isPlaying, onPlayPause }: VerticalVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }, [isPlaying])

  const handlePlayPause = () => {
    onPlayPause()
  }

  return (
    <div className="w-full">
      <div className="relative w-full aspect-[9/16] overflow-hidden rounded-lg shadow-lg">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={videoSrc}
          playsInline
          preload="metadata"
          onClick={handlePlayPause}
        />
        {!isPlaying && (
          <button
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300 hover:bg-opacity-50"
            onClick={handlePlayPause}
            aria-label="Play video"
          >
            <Play className="w-16 h-16 text-white opacity-80" />
          </button>
        )}
      </div>
    </div>
  )
}
