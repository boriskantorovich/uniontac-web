'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslations } from 'next-intl'
import { Highlight } from "@/components/ui/highlight"

export function StatisticsComponent() {
  const t = useTranslations('statistics')

  return (
    <div className="w-full">
      <Card className="bg-gray-900 text-white p-6">
        <CardHeader>
          <CardTitle className="text-[48px] font-semibold text-left mb-2">
            {t('title')}
          </CardTitle>
          <p className="text-white text-left text-lg sm:text-xl">
            {t('subtitle')}
          </p>
        </CardHeader>
        <CardContent className="grid gap-8 md:grid-cols-3">
          <StatItem 
            value={t('medkits.value')}
            title={t('medkits.title')}
            namespace="medkits"
          />
          <StatItem 
            value={t('volunteers.value')}
            title={t('volunteers.title')}
            namespace="volunteers"
          />
          <StatItem 
            value={t('brigades.value')}
            title={t('brigades.title')}
            namespace="brigades"
          />
        </CardContent>
      </Card>
    </div>
  )
}

function StatItem({ value, title, namespace }: { 
  value: string, 
  title: string,
  namespace: 'medkits' | 'volunteers' | 'brigades' 
}) {
  const t = useTranslations(`statistics.${namespace}`)

  return (
    <div className="space-y-2">
      <h3 className="text-[48px] font-semibold bg-gradient-to-r from-yellow-400 via-yellow-300 to-blue-300 text-transparent bg-clip-text">
        {value}
      </h3>
      <h4 className="text-xl sm:text-2xl font-semibold">{title}</h4>
      <p className="text-white">
        {t.rich('description.text', {
          span: (chunks) => <Highlight>{chunks}</Highlight>
        })}
      </p>
    </div>
  )
}
