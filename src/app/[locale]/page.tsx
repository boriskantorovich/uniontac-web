import { HeroComponent } from "@/components/hero";
import { FirstAidKitStatsComponent } from "@/components/first-aid-kit-stats";
import { StatisticsComponent } from "@/components/statistics";
import { HowWeHelpComponent } from "@/components/how-do-we-help";
import { MedkitComponent } from "@/components/medkit";
import { DonationFormWithCta } from "@/components/donation-form-with-cta";
import { AboutUsComponent } from "@/components/about-us";
import { FooterComponent } from "@/components/footer";

export default function LocalePage() {
  return (
    <>
      <HeroComponent />
      <div id="learn-more">
        <FirstAidKitStatsComponent />
        <StatisticsComponent />
        <HowWeHelpComponent />
        <MedkitComponent />
      </div>
      <div id="donate-form">
        <DonationFormWithCta />
      </div>
      <AboutUsComponent />
      <FooterComponent />
    </>
  );
} 
