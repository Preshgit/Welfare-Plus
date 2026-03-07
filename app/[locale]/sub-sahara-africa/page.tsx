import { setRequestLocale, getTranslations } from 'next-intl/server';
import ContactUs from "@/components/contactUs"
import FeatureSection from "@/components/featureSection"
import Impacts from "@/components/impacts"
import Workstation from "@/assets/images/man_wheelchair_mask.png"
import AfricaHero from '@/components/sub-sahara/africaHero';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.africa' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'AfricaPage' });

  return (
    <div>
      <AfricaHero />
      <FeatureSection content={t('featureContent')} title={t('featureTitle')} image={Workstation} alt="Man on wheel chair" />
      <Impacts text={t('impactsText')} content={t('impactsContent')} btnText={t('impactsBtnText')} />
      <ContactUs />
    </div>
  )
}
