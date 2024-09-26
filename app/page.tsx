import { HeroComponent } from '../components/hero'
import { CtaComponent } from '../components/cta'
import { HelpCardComponent } from '../components/help-card'
import { TestimonialCard } from '../components/testimonial-card'
import { NonprofitNavComponent } from '../components/nonprofit-nav'
import { StatisticsComponent } from '../components/statistics'
import { Team } from '../components/team'
import { testimonials } from '../data/testimonials'
import { helpCardsData } from '../data/helpCardsData'
import { DonationFormWithCta } from '../components/donation-form-with-cta'

export default function Home() {
  console.log('Testimonials:', testimonials);

  const urgentCtaText = `ЧТОБЫ ОКАЗЫВАТЬ ЭКСТРЕННУЮ ПОМОЩЬ<br />
    И СПАСАТЬ ЛЮДЕЙ,<br />
    НАМ НУЖНА ВАША ПОДДЕРЖКА
    <br /> <br /> ДАЖЕ $10 <br />ИЗМЕНЯТ ЧЬЮ-ТО ЖИЗНЬ`;

  const defaultCtaText = `НЕ ПРОХОДИТЕ МИМО ТЕХ,<br />
    КТО ОТЧАЯННО НУЖДАЕТСЯ<br />
    В ПОМОЩИ`;

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <NonprofitNavComponent />
      <HeroComponent />
      <div id="learn-more">
        <CtaComponent />
      </div>
      <div id="donate-now" className="max-w-4xl mx-auto">
        <DonationFormWithCta />
      </div>
      <div className="bg-black py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-left mb-8 uppercase">
            Как помогает Насилию.Нет
          </h2>
          <div className="flex flex-col gap-8 items-center">
            <HelpCardComponent {...helpCardsData[0]} />
            <TestimonialCard testimonial={testimonials[0]} />
            <HelpCardComponent {...helpCardsData[1]} />
            <HelpCardComponent {...helpCardsData[2]} />
            <TestimonialCard testimonial={testimonials[1]} />
            <HelpCardComponent {...helpCardsData[3]} />
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto">
        <DonationFormWithCta showCTA={true} ctaText={urgentCtaText} />
      </div>
      <StatisticsComponent />
      <Team />
      <div className="max-w-4xl mx-auto">
        <DonationFormWithCta showCTA={true} ctaText={defaultCtaText} />
      </div>
    </div>
  );
}
