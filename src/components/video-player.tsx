import { useState } from 'react';
import { Play } from 'lucide-react';
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  src: string;
  className?: string;
}

export function VideoPlayer({ src, className = "" }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoElement, setVideoElement] = useState<HTMLVideoElement | null>(null);

  const handleVideoClick = () => {
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
    }
  };

  return (
    <div className={cn("video-container relative w-full h-full", className)}>
      <video
        ref={setVideoElement}
        preload="metadata"
        playsInline
        className="absolute inset-0 w-full h-full object-cover cursor-pointer"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        onClick={handleVideoClick}
      >
        <source src={src} type="video/mp4" />
        Your browser doesn't support HTML5 video.
      </video>

      {!isPlaying && (
        <button
          onClick={handleVideoClick}
          className={cn(
            "absolute inset-0 flex items-center justify-center",
            "bg-black/30 transition-all duration-300",
            "hover:bg-black/40"
          )}
          aria-label="Play video"
        >
          <div className={cn(
            "w-16 h-16 md:w-20 md:h-20 rounded-full",
            "bg-white/10",
            "flex items-center justify-center",
            "transition-transform duration-300",
            "hover:scale-110"
          )}>
            <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white" />
          </div>
        </button>
      )}
    </div>
  );
}
