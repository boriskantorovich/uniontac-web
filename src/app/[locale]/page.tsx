'use client'

import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { CtaComponent } from "@/components/cta";
import { HeroComponent } from "@/components/hero";
import { StatisticsComponent } from "@/components/statistics";
import { HowWeHelpComponent } from "@/components/how-do-we-help";
import { MedkitComponent } from "@/components/medkit";
import { DonationFormWithCta } from "@/components/donation-form-with-cta";
import { AboutUsComponent } from "@/components/about-us";
import { FooterComponent } from "@/components/footer";
import { VideoTestimonial } from '@/components/video-testimonial-player';

export default function LocalePage() {
	const urgentCtaText = `To provide emergency assistance and&nbsp;save&nbsp;lives,<br />
	  we&nbsp;need your&nbsp;support
	  <br /><br />Even&nbsp;$15 can save&nbsp;a&nbsp;life`;
  
	const defaultCtaText = `Don't pass by those who<br />
	  desperately need&nbsp;help`;

  return (
		<>
		  <HeroComponent />
		  <div className="mx-auto">
			<div id="learn-more">
			  <CtaComponent />
			</div>
			<MedkitComponent />
			
			<div id="donate-form">
			  <DonationFormWithCta showCTA={true} ctaText={urgentCtaText} />
			</div>
	
			<StatisticsComponent />
			<div className="container mx-auto py-8">
				<VideoTestimonial
				publicId="uniontac/IMG_6015_apnanb"  // Get this from Cloudinary
				fallbackImage="/images/thumbnail.jpg"    // Your thumbnail image
				title="Cheshire"             // Your video title
			/>
			</div>
			<HowWeHelpComponent />
			<AboutUsComponent />
			
			<div id="donate-form-2">
			  <DonationFormWithCta showCTA={true} ctaText={defaultCtaText} />
			</div>
		  </div>
		  
		  <FooterComponent />
		</>
	  );
	}
