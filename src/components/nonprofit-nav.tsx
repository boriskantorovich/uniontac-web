'use client'

import React from 'react';
import { useRouter, usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export function NonprofitNavComponent() {
  const t = useTranslations('nav');
  const router = useRouter();
  const pathname = usePathname();

  const handleDonateClick = () => {
    const donateSection = document.getElementById('donate-form');
    if (donateSection) {
      donateSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLanguageChange = (locale: string) => {
    router.replace(pathname, {locale});
  };

  return (
    <nav className="bg-transparent w-full absolute top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <a href="https://uniontacua.com" className="text-xl font-bold text-white uppercase">
              {t('brand')}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-2 mr-4">
              {['en', 'ua', 'ru'].map((locale) => (
                <button
                  key={locale}
                  onClick={() => handleLanguageChange(locale)}
                  className="text-white hover:text-yellow-500 transition-colors uppercase text-sm"
                >
                  {locale}
                </button>
              ))}
            </div>
            <button 
              onClick={handleDonateClick}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 text-base md:text-lg cursor-pointer"
            >
              {t('help')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
