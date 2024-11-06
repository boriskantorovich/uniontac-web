'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { HeroComponent } from "@/components/hero"

// Dynamic imports
const CtaComponent = dynamic(() => import("@/components/cta").then(mod => mod.CtaComponent), {
  loading: () => <div className="h-[600px]" />
})

const MedkitComponent = dynamic(() => import("@/components/medkit").then(mod => mod.MedkitComponent), {
  loading: () => <div className="h-[600px]" />
})

const DonationFormWithCta = dynamic(() => 
  import("@/components/donation-form-with-cta").then(mod => mod.DonationFormWithCta), {
  loading: () => <div className="h-[800px]" />
})

const StatisticsComponent = dynamic(() => 
  import("@/components/statistics").then(mod => mod.StatisticsComponent))

const VideoTestimonial = dynamic(() => 
  import('@/components/video-testimonial').then(mod => mod.VideoTestimonial))

const HowWeHelpComponent = dynamic(() => 
  import("@/components/how-do-we-help").then(mod => mod.HowWeHelpComponent))

const AboutUsComponent = dynamic(() => 
  import("@/components/about-us").then(mod => mod.AboutUsComponent))

const VideoGrid = dynamic(() => 
  import('@/components/video-grid').then(mod => mod.VideoGrid))

const FooterComponent = dynamic(() => 
  import("@/components/footer").then(mod => mod.FooterComponent))

export default function LocalePage() {
  return (
    <>
      <HeroComponent />
      <div className="mx-auto">
        <Suspense fallback={<div className="h-[600px]" />}>
          <div id="learn-more">
            <CtaComponent />
          </div>
        </Suspense>

        <Suspense fallback={<div className="h-[600px]" />}>
          <MedkitComponent />
        </Suspense>
        
        <Suspense fallback={<div className="h-[800px]" />}>
          <div id="donate-form">
            <DonationFormWithCta showCTA={true} variant="urgent" />
          </div>
        </Suspense>

        <Suspense fallback={<div className="h-[400px]" />}>
          <StatisticsComponent />
        </Suspense>

        <Suspense fallback={<div className="h-[400px]" />}>
          <VideoTestimonial />
        </Suspense>

        <Suspense fallback={<div className="h-[600px]" />}>
          <HowWeHelpComponent />
        </Suspense>

        <Suspense fallback={<div className="h-[600px]" />}>
          <AboutUsComponent />
        </Suspense>

        <Suspense fallback={<div className="h-[400px]" />}>
          <VideoGrid />
        </Suspense>
        
        <Suspense fallback={<div className="h-[800px]" />}>
          <div id="donate-form-2">
            <DonationFormWithCta showCTA={true} variant="default" />
          </div>
        </Suspense>
      </div>
      
      <Suspense fallback={<div className="h-[200px]" />}>
        <FooterComponent />
      </Suspense>
    </>
  )
}
