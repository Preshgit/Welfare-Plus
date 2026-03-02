import { setRequestLocale } from 'next-intl/server';
import About from "@/components/homepage/about";
import Approach from "@/components/homepage/approach";
import Faq from "@/components/homepage/faq";
import Illustration from "@/components/homepage/illustration";
import Hero from '@/components/homepage/hero';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <About />
      <Approach />
      <Faq />
      <Illustration />
    </div>
  );
}
