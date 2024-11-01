'use client'

import { CldVideoPlayer } from "next-cloudinary";

interface VideoTestimonialProps {
  publicId: string;
  fallbackImage: string;
  title: string;
}

export function VideoTestimonial({ publicId, fallbackImage, title }: VideoTestimonialProps) {
  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden">
      <CldVideoPlayer
        width="100%"
        height="100%"
        src={publicId}
        colors={{
          base: "#000000",
        }}
        transformation={{
          quality: "auto",
          format: "auto",
        }}
        poster={fallbackImage}
        className="rounded-lg"
      />
    </div>
  );
}
