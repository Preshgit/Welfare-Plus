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

  return (
    <div>
      <AfricaHero />
      <FeatureSection content="Expanding Access to Inclusive Social Welfare and Assistive Technologies Across Africa. Welfare Plus supports inclusive development initiatives through regional partnerships that improve access to assistive technologies and social welfare programs." title={'Sub-Sahara Africa'} image={Workstation} alt="Man on wheel chair" />
      <Impacts text={'Our Impacts Across Sub-Sahara Africa'} content={'Focused on improving access, affordability, and awareness of assistive technologies while supporting sustainable social development. \nCollaboration with academic institutions, government agencies, and international manufacturers to develop scalable social care solutions.'} btnText={'Partner with us'} />
      <ContactUs />
    </div>
  )
}
