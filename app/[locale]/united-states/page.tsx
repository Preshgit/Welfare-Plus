import { setRequestLocale, getTranslations } from 'next-intl/server';
import ContactUs from "@/components/contactUs"
import HubCard from "@/components/countryHero"
import Impacts from "@/components/impacts"
import AssistiveChair from "@/assets/images/assistive_chair.png"
import VirtualRealityDark from "@/assets/images/usahero.jpeg"
import VirtualReality from "@/assets/images/usahero_light.jpg"
import FeatureSection from "@/components/featureSection"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.us' });

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

  const t = await getTranslations({ locale, namespace: 'USPage' });

  return (
    <div>
      <HubCard address={t('hubAddress')} description={t('hubDescription')} darkImageUrl={VirtualRealityDark} imageUrl={VirtualReality} title={t('hubTitle')} imageAlt='man with virtual reality glasses' locationLabel="U.S." key={'united states'} />
      <FeatureSection content={t('featureContent')} title={t('featureTitle')} image={AssistiveChair} alt="Man on wheel chair" />
      <Impacts text={t('impactsText')} content={t.raw('impactsContent')} btnText={t('impactsBtnText')} partnershipsText={t.raw('impactPartnerships')} />
      <ContactUs />
    </div>
  )
}
