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
    <section className={`${outfit.className} bg-background text-foreground flex justify-center items-center py-24 pb-10 min-h-157.5 sm:px-5`}>
      <div className="md:w-5/6 md:px-0 px-5 mx-auto flex flex-col justify-center items-center gap-y-10">
        <div className="space-y-5 flex flex-col items-center">
          <Button variant="plain" className={`text-foreground h-[55.73px] w-[137.69px] border-gray-200 pl-[5.96px] pr-[17.91px] py-[7.96px] shadow-none border rounded-full`}><SparkleIcon className="fill-foreground w-[39.81px] h-[39.81px]" />{t("button")}</Button>
          <HeadingTwo className="text-[40px] text-center md:text-left md:text-[60px]" text={t("title")} />
          <p className="text-base sm:text-xl lg:text-[28px] text-center md:text-left font-light text-foreground">{t("description")}</p>
        </div>
        <div className="grid sm:justify-items-center grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-10 md:divide-x">
          <div className="space-y-5 flex md:items-start items-center flex-col">
            <People />
            <div className="space-y-5 flex flex-col">
              <HeadingFour className='text-center md:text-left text-[25px]! font-bold!' text={t("research.title")} />
              <p className={`${satoshi.className} text-center md:text-left text-foreground font-normal text-[18px]`}>{t("research.description")}</p>
            </div>
          </div>
          <div className="space-y-5 flex md:items-start items-center flex-col">
            <BusIcon />
            <div className="space-y-5 flex flex-col items-center">
              <HeadingFour className='text-[25px]! text-center md:text-left font-bold!' text={t("products.title")} />
              <p className={`${satoshi.className} text-center md:text-left text-foreground font-normal text-[18px]`}>{t("products.description")}</p>
            </div>
          </div>
          <div className="space-y-5 flex md:items-start items-center flex-col">
            <UserIcon />
            <div className="space-y-5 flex flex-col items-center">
              <HeadingFour className="text-[25px]! text-center md:text-left font-bold!" text={t("programs.title")} />
              <p className={`${satoshi.className} text-center md:text-left text-foreground font-normal text-[18px]`}>{t("programs.description")}</p>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <Link href="/about-us">
            <Button variant="colored" size="md" className={`${outfit.className} h-12 bg-primary w-fit`}>
              {t("seeMore")}
              <ArrowUpRightIcon className="stroke-3 font-medium text-[20px]" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default About
