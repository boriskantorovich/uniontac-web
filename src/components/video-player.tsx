import { useState } from 'react';

interface VideoPlayerProps {
  src: string;
  className?: string;
}

export function VideoPlayer({ src, className = "" }: VideoPlayerProps) {
  return (
    <div className={`video-container relative ${className}`}>
      <video
        controls
        preload="metadata"
        className="w-full rounded-lg shadow-lg"
        onLoadStart={() => console.log('Video load started')}
        onLoadedData={() => console.log('Video data loaded')}
        onError={(e) => console.error('Video error:', e)}
      >
        <source src={src} type="video/mp4" />
        Your browser doesn't support HTML5 video.
      </video>
    </div>
  );
} 
