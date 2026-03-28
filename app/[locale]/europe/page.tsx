import { setRequestLocale, getTranslations } from 'next-intl/server';
import ContactUs from "@/components/contactUs"
import FeatureSection from "@/components/featureSection"
import Impacts from "@/components/impacts"
import ManWheelChair from "@/assets/images/man_wheelchair.png"
import HubCard from "@/components/countryHero"
import HandGrips from "@/assets/images/sub_saharan.jpg"
import HandGripsDark from "@/assets/images/sub_saharan_dark.jpg"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.europe' });

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

  const t = await getTranslations({ locale, namespace: 'EuropePage' });

  return (
    <div style={{ backgroundImage: "url('/Line.svg')" }}>
      <HubCard address={t('hubAddress')} description={t('hubDescription')} imageUrl={HandGrips} darkImageUrl={HandGripsDark} title={t('hubTitle')} imageAlt='man with virtual reality glasses' locationLabel="U.S." key={'united states'} />
      <FeatureSection content={t('featureContent')} title={t('featureTitle')} image={ManWheelChair} alt="Man on wheel chair" />
      <Impacts text={t('impactsText')} content={t.raw('impactsContent')} btnText={t('impactsBtnText')} partnershipsText={t.raw('impactPartnerships')} />
      <ContactUs />
    </div>
  )
}
