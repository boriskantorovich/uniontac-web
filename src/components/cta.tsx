'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export function CtaComponent() {
  const t = useTranslations('cta')

  return (
    <div className="w-full">
      <Card className="bg-gray-900 text-white p-6 md:p-20 border-0 ring-0 ring-offset-0 shadow-none">
        <CardHeader>
          <CardTitle className="text-[48px] font-semibold text-left mb-2">
            {t('title')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:order-2 md:w-1/2 space-y-4">
              <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                <Image
                  src="/images/cta/cta.jpg"
                  alt={t('title')}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:order-1 md:w-1/2">
              <div className="space-y-4">
                <p className="text-white text-lg">{t('paragraph1')}</p>
                <p className="text-white text-lg">{t('paragraph2')}</p>
                <p className="text-white text-lg">{t('paragraph3')}</p>
                <p className="text-white text-lg">{t('paragraph4')}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
