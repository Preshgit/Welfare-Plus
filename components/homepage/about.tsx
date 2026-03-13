"use client"

import { ArrowUpRightIcon, SparkleIcon } from "lucide-react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { Button } from "../ui/button"
import HeadingTwo from "../ui/typography/headingTwo"
import { outfit, satoshi } from "@/app/utils/fonts"
import HeadingFour from "../ui/typography/headingFour"
import BusIcon from "@/assets/svg/bus.svg"
import People from "@/assets/svg/people.svg"
import UserIcon from "@/assets/svg/userr.svg"

const About = () => {
  const t = useTranslations("About")

  return (
    <section className={`${outfit.className} bg-background text-foreground flex justify-center  py-8 min-h-130 sm:px-5`}>
      <div className="md:w-5/6 md:px-0 px-5 mx-auto flex flex-col justify-center items-center gap-y-10 h-fit">
        <div className="space-y-5 flex flex-col items-center">
          <HeadingTwo className="text-[40px] text-center md:text-left md:text-[40px] lg:text-[60px]!" text={t("title")} />
          <p className="text-base sm:text-xl lg:text-[28px] text-center  font-light text-foreground">{t("description")}</p>
        </div>
        <div className="grid sm:justify-items-center grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-10 md:divide-x">
          <div className="space-y-5 flex md:items-start items-center flex-col">
            <BusIcon />
            <div className="space-y-5 flex flex-col">
              <HeadingFour className='text-center md:text-left text-[25px]! font-bold!' text={t("research.title")} />
              <ul className={`${satoshi.className} list-disc list-inside space-y-2 text-foreground font-normal text-[18px]`}>
                {t.raw("research.description").map((item: string, index: number) => (
                  <li key={index} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-5 flex md:items-start items-center flex-col">
            <People />
            <div className="space-y-5 flex flex-col items-center">
              <HeadingFour className='text-[25px]! text-center md:text-left font-bold!' text={t("products.title")} />
              <ul className={`${satoshi.className} list-disc list-inside space-y-2 text-foreground font-normal text-[18px]`}>
                {t.raw("products.description").map((item: string, index: number) => (
                  <li key={index} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-5 flex md:items-start items-center flex-col">
            <UserIcon />
            <div className="space-y-5 flex flex-col items-center">
              <HeadingFour className="text-[25px]! text-center md:text-left font-bold!" text={t("programs.title")} />
              <ul className={`${satoshi.className} list-disc list-inside space-y-2 text-foreground font-normal text-[18px]`}>
                {t.raw("programs.description").map((item: string, index: number) => (
                  <li key={index} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
