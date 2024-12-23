'use client'

import { useTranslations } from 'next-intl';

export default function SuccessPage() {
  const t = useTranslations('successPage');

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold">{t('thankYou')}</h1>
      <p className="mt-4 text-lg">{t('message')}</p>
    </div>
  );
}
