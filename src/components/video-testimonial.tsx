import React, { useEffect } from 'react';
import { VideoPlayer } from "./video-player";

interface VideoTestimonialProps {
  className?: string;
}

export function VideoTestimonial({ className = "" }: VideoTestimonialProps) {
  // Add version number and transformation parameters
  const videoSrc = "https://res.cloudinary.com/dtuxt5133/video/upload/v1/uniontac-testimonial.mp4";
  
  // Test the URL before using it
  const testVideoLoad = () => {
    fetch(videoSrc, { method: 'HEAD' })
      .then(response => {
        console.log('Video URL status:', response.status);
        console.log('Video URL headers:', response.headers);
      })
      .catch(error => {
        console.error('Error testing video URL:', error);
      });
  };

  // Test URL when component mounts
  useEffect(() => {
    testVideoLoad();
  }, []);

  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Impact Stories
        </h2>
        <div className="max-w-3xl mx-auto">
          <VideoPlayer
            src={videoSrc}
            className="w-full aspect-video"
          />
          
          {/* Debug info */}
          <div className="mt-4 p-4 bg-gray-100 rounded text-sm">
            <p>Video URL: {videoSrc}</p>
            <button 
              onClick={testVideoLoad}
              className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Test Video URL
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 
