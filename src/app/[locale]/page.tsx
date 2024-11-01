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

  return (
		<>
		  <HeroComponent />
		  <div className="mx-auto">
			<div id="learn-more">
			  <CtaComponent />
			</div>
			<MedkitComponent />
			
			<div id="donate-form">
			  <DonationFormWithCta showCTA={true} variant="urgent" />
			</div>
	
			<StatisticsComponent />
			<HowWeHelpComponent />
			<AboutUsComponent />
			
			<div id="donate-form-2">
			  <DonationFormWithCta showCTA={true} variant="default" />
			</div>
		  </div>
		  
		  <FooterComponent />
		</>
	  );
	}
