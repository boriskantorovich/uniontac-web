import { VideoPlayer } from "./video-player";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from 'next-intl';

interface VideoTestimonialProps {
  className?: string;
}

export function VideoTestimonial({ className = "" }: VideoTestimonialProps) {
  const t = useTranslations('videoTestimonial');
  const videoSrc = "https://res.cloudinary.com/dtuxt5133/video/upload/v1/uniontac-testimonial.mp4";

  return (
    <div className="w-full">
      <Card className="bg-gray-900 text-white p-6 md:p-20 border-0 ring-0 ring-offset-0 shadow-none">
        <CardHeader>
          <CardTitle className="text-4xl md:text-5xl pt-6 mb:pt-0 leading-tight font-semibold text-left mb-2">
            {t('title')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Mobile: Video First */}
            <div className="md:hidden w-full">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <VideoPlayer src={videoSrc} />
              </div>
            </div>
            
            {/* Text Content */}
            <div className="md:w-1/2">
              <div className="space-y-4">
                <p className="text-white text-xl">{t('quote')}</p>
                <p className="text-white text-lg italic">— {t('author')}</p>
              </div>
            </div>
            
            {/* Desktop: Video Second */}
            <div className="hidden md:block md:w-1/2">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <VideoPlayer src={videoSrc} />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 
