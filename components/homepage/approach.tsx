"use client"
import { ArrowUpRightIcon } from "lucide-react"
import { Button } from "../ui/button"
import HeadingTwo from "../ui/typography/headingTwo"
import Image from "next/image"
import Link from "next/link"
import { outfit } from "@/app/utils/fonts"
import kuopioFinland from "@/assets/images/kuopio.png"
import subSaharanAfrica from "@/assets/images/lagos.png"
import northAmerica from "@/assets/images/rest_of_the_world.png"
import { useTranslations } from "next-intl"
import { useRouter } from "@/i18n/routing"

const Approach = () => {
  const router = useRouter()
  const t = useTranslations("Homepage.approach")
  const about = useTranslations("About")

  const locations = [
    {
      src: kuopioFinland,
      alt: t("location0Title"),
      title: t("location0Title"),
      subtitle: t("location0Subtitle"),
      href: "/europe",
    },
    {
      src: subSaharanAfrica,
      alt: t("location1Title"),
      title: t("location1Title"),
      subtitle: t("location1Subtitle"),
      href: "/sub-sahara-africa",
    },
    {
      src: northAmerica,
      alt: t("location2Title"),
      title: t("location2Title"),
      subtitle: t("location2Subtitle"),
      href: "/united-states",
    },
  ];
  return (
    <section className="bg-primary flex items-center text-foreground py-5 pt-12">
      <div className="space-y-5 md:w-5/6 px-5 mx-auto pb-10">
        <div className="mx-auto flex flex-col justify-center items-center gap-y-3">
          <HeadingTwo text={t("heading")} color="black" className="text-white! text-center text-[40px] md:text-[60px]!" />
          <p className="text-[20px] md:text-[28px] font-normal text-center">{t("description")}</p> </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {locations.map((loc) => (
            <div key={loc.title} className="rounded-2xl overflow-hidden flex flex-col">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden">
                <Image
                  src={loc.src}
                  alt={loc.alt}
                  height={280}
                  width={360}
                  className="object-cover"
                />
              </div>
              <div className="flex items-start justify-between gap-2 px-1 pt-3 pb-1">
                <div className='space-y-2'>
                  <p className="text-white font-bold text-base leading-snug">{loc.title}</p>
                  <p className="text-white/60 text-base font-medium">{loc.subtitle}</p>
                </div>
                <Button
                  onClick={() => router.push(loc.href)}
                  className="flex p-0 shadow-none text-white items-center gap-1 text-white font-normal whitespace-nowrap mt-0.5 hover:underline text-sm"
                >
                  {t("learnMore")}
                  <ArrowUpRightIcon className="stroke-2 font-medium text-[20px]" />

                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Approach
