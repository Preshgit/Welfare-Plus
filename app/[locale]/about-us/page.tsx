import { setRequestLocale, getTranslations } from 'next-intl/server';
import Ethics from "@/components/about-us/ethics"
import Hero from "@/components/about-us/hero"
import Mission from "@/components/about-us/mission"
import ProductContainer from "@/components/about-us/products"
import Serve from "@/components/about-us/serve"
import Story from "@/components/about-us/story"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata.about' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function AboutUsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <div><Story /><Mission /><Ethics /></div>
  )
}
