import { setRequestLocale, getTranslations, getMessages } from 'next-intl/server';
import ContactUs from "@/components/contactUs"
import FeatureSection from "@/components/featureSection"
import Impacts from "@/components/impacts"
import Workstation from "@/assets/images/man_wheelchair_mask.png"
import WalkingAids from "@/assets/images/sub_saharan_hero.jpg"
import WalkingAidsDark from "@/assets/images/sub_saharan_hero_dark.png"
import HubCard from '@/components/countryHero';

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
  const messages = await getMessages({ locale });
  const africaPageMessages = (messages as Record<string, Record<string, string> | undefined>).AfricaPage;
  const partnershipsText =
    africaPageMessages?.impactsPartnerships ??
    africaPageMessages?.impactPartnerships ??
    africaPageMessages?.impactPartnertships ??
    "";

  return (
    <div>
      <HubCard address={t('hubAddress')} description={t('hubDescription')} darkImageUrl={WalkingAidsDark} imageUrl={WalkingAids} title={t('hubTitle')} imageAlt='man with virtual reality glasses' locationLabel="U.S." key={'united states'} />
      <FeatureSection content={t('featureContent')} title={t('featureTitle')} image={Workstation} alt="Man on wheel chair" />
      <Impacts partnershipsText={partnershipsText} text={t('impactsText')} content={t.raw('impactsContent')} btnText={t('impactsBtnText')} />
      <ContactUs />
    </div>
  )
}
