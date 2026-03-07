import { SparkleIcon, ArrowUpRightIcon, } from "lucide-react"
import { Button } from "../ui/button"
import HeadingTwo from "../ui/typography/headingTwo"
import Image from "next/image"
import Link from "next/link"
import { outfit } from "@/app/utils/fonts"
import kuopioFinland from "@/assets/images/kuopio-finland.png"
import subSaharanAfrica from "@/assets/images/sub-saharan-africa.png"
import northAmerica from "@/assets/images/north-america.png"
import { useTranslations } from "next-intl"

const Approach = () => {
  const t = useTranslations("Homepage.approach")

  const locations = [
    {
      src: kuopioFinland,
      alt: t("location0Title"),
      title: t("location0Title"),
      subtitle: t("location0Subtitle"),
      href: "#",
    },
    {
      src: subSaharanAfrica,
      alt: t("location1Title"),
      title: t("location1Title"),
      subtitle: t("location1Subtitle"),
      href: "#",
    },
    {
      src: northAmerica,
      alt: t("location2Title"),
      title: t("location2Title"),
      subtitle: t("location2Subtitle"),
      href: "#",
    },
  ];
  return (
    <section className="bg-primary flex items-center text-foreground py-10 pt-24">
      <div className="space-y-10 w-5/6 mx-auto pb-10">
        <div className="mx-auto flex flex-col justify-center items-center gap-y-10">
          <Button variant="plain" className={`${outfit.className} bg-white h-[55.73px] min-w-[137.69px] border-gray-200 pl-[5.96px] pr-[17.91px] py-[7.96px] shadow-none border rounded-full`}><SparkleIcon fill='black' className="w-[39.81px] h-[39.81px]" />{t("button")}</Button>
          <HeadingTwo text={t("heading")} color="black" className="text-white!" />
          <p className="text-[28px] font-normal text-center">{t("description")}</p>
        </div>
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
                <Link
                  href={loc.href}
                  className="flex items-center gap-1 text-white font-normal whitespace-nowrap mt-0.5 hover:underline text-sm"
                >
                  {t("learnMore")}
                  <ArrowUpRightIcon className="stroke-2 font-medium text-[20px]" />

                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Approach
