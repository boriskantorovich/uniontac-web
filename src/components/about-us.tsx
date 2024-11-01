'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { scrollHandlers } from "@/utils/scroll-handlers"
import { useTranslations } from 'next-intl'
import { Highlight } from "@/components/ui/highlight"

export function AboutUsComponent() {
  const t = useTranslations('aboutUs')

  return (
    <div className="w-full">
      <Card className="bg-gray-900 text-white p-6 border-0 ring-0 ring-offset-0 shadow-none">
        <CardHeader>
          <CardTitle className="text-[48px] font-semibold text-left mb-2">
            {t.rich('title', {
              span: (chunks) => <Highlight>{chunks}</Highlight>
            })}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:order-2 md:w-1/2 space-y-4">
              <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
                <Image
                  src="/images/team/team.jpg"
                  alt={t('imageAlt')}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div className="md:order-1 md:w-1/2">
              <div className="space-y-4">
                <p className="text-white text-lg">{t('paragraph1')}</p>
                <p className="text-white text-lg">{t('paragraph2')}</p>
                <p className="text-white text-lg">{t('paragraph3')}</p>
                <Button 
                  onClick={() => scrollHandlers.handleDonateClick2()}
                  className="w-full bg-white text-blue-600 hover:bg-blue-100 font-semibold py-10 text-3xl"
                >
                  {t('ctaButton')}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
