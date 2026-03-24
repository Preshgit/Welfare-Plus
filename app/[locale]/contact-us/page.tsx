import ContactForm from '@/components/contact-us/contact-form';
import ContactSection from '@/components/contact-us/contact-us';
import CTASection from '@/components/contact-us/hero';
import { setRequestLocale, getTranslations } from 'next-intl/server';

import ManHeadset from "@/assets/images/manHeadset.png"
import ManSmiling from "@/assets/images/Ellipse_70.png"
import ManPotrait from "@/assets/images/old_wheelchair.png"
import Potrait from "@/assets/images/Ellipse_71.png"
import ContactServices from '@/components/contactServices';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.contact' });

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

  const t = await getTranslations({ locale, namespace: 'ContactPage' });

  return (
    <section style={{ backgroundImage: "url('/Line.png')" }}>
      <CTASection avatarBottomLeft={ManPotrait} avatarBottomRight={Potrait} avatarTopLeft={ManSmiling} avatarTopRight={ManHeadset} key="hero" />
      <ContactSection
        title={t('sectionTitle')}
        address={t('address')}
        email={t('email')}
        telephone={t('telephone')}
        whatsapp={t('whatsapp')}
      />
      <ContactForm />
      <ContactServices />
    </section>
  )
}
