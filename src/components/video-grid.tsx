import { VideoPlayer } from "./video-player";
import { Card, CardContent } from "@/components/ui/card";
import { videos } from "@/config/videos";
import { useRef } from 'react';

export function VideoGrid() {
  const activeVideoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoPlay = (videoElement: HTMLVideoElement) => {
    if (activeVideoRef.current && activeVideoRef.current !== videoElement) {
      activeVideoRef.current.pause();
    }
    activeVideoRef.current = videoElement;
  };

  return (
    <div className="w-full">
      <Card className="bg-gray-900 text-white p-6 md:p-20 border-0 ring-0 ring-offset-0 shadow-none">
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.moreTestimonials.map((video, index) => (
              <div key={index} className="relative aspect-[9/16] rounded-lg overflow-hidden">
                <VideoPlayer 
                  src={video.src}
                  onPlay={handleVideoPlay}
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 
