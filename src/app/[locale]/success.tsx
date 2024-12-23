import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';

export default function SuccessPage() {
  const { locale } = useRouter();
  const t = useTranslations('successPage');

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold">{t('thankYou')}</h1>
      <p className="mt-4 text-lg">{t('message')}</p>
    </div>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
};

export const getStaticPaths = async () => {
  const locales = ['en', 'ru', 'ua'];
  const paths = locales.map((locale) => ({ params: { locale } }));
  return {
    paths,
    fallback: false,
  };
}; 
