'use client'

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function CancelPage() {
  const t = useTranslations('cancelPage');

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold">{t('cancelled')}</h1>
      <p className="mt-4 text-lg">
        {t('message')}{' '}
        <Link href="/" className="text-blue-500 hover:underline">
          {t('linkText')}
        </Link>
        .
      </p>
    </div>
  );
}
