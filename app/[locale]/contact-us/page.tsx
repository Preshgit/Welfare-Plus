import ContactForm from '@/components/contact-us/contact-form';
import ContactSection from '@/components/contact-us/contact-us';
import CTASection from '@/components/contact-us/hero';
import { setRequestLocale, getTranslations } from 'next-intl/server';

import ManHeadset from "@/assets/images/manHeadset.png"
import ManSmiling from "@/assets/images/man_smiling.png"
import ManPotrait from "@/assets/images/man_potrait.png"
import Potrait from "@/assets/images/Ellipse 71.png"

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

  return (
    <section style={{ backgroundImage: "url('/Line.png')" }}>
      <CTASection avatarBottomLeft={ManPotrait} avatarBottomRight={Potrait} avatarTopLeft={ManSmiling} avatarTopRight={ManHeadset} key="hero" />
      <ContactSection
        title="Europe"
        address="Juontotie 9D 18, 70150 Kuopio, North Savo, Finland."
        email="info@welfareplus.fi"
        telephone="+358 46 8857 552"
        whatsapp="+358 44 915 097"
      />
      <ContactForm />
    </section>
  )
}
