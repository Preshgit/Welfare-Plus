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
    <section className={`${outfit.className} bg-background text-foreground flex justify-center items-center pt-40 pb-10 min-h-157.5`}>
      <div className="w-5/6 mx-auto flex flex-col justify-center items-center gap-y-10">
        <div className="text-center space-y-5">
          <Button variant="plain" className={`text-foreground h-[55.73px] w-[137.69px] border-gray-200 pl-[5.96px] pr-[17.91px] py-[7.96px] shadow-none border rounded-full`}><SparkleIcon className="fill-foreground w-[39.81px] h-[39.81px]" />{t("button")}</Button>
          <HeadingTwo text={t("title")} />
          <p className="text-[28px] font-light text-foreground">{t("description")}</p>
        </div>
        <div className="grid grid-cols-3 gap-x-10 divide-x">
          <div className="space-y-5">
            <People />
            <div className="space-y-5">
              <HeadingFour className='w-4/5! text-[25px]! font-bold!' text={t("research.title")} />
              <p className={`${satoshi.className} text-foreground font-normal text-[18px]`}>{t("research.description")}</p>
            </div>
          </div>
          <div className="space-y-5">
            <BusIcon />
            <div className="space-y-5">
              <HeadingFour className='text-[25px]! font-bold!' text={t("products.title")} />
              <p className={`${satoshi.className} text-foreground font-normal text-[18px]`}>{t("products.description")}</p>
            </div>
          </div>
          <div className="space-y-5">
            <UserIcon />
            <div className="space-y-5">
              <HeadingFour className="text-[25px]! font-bold!" text={t("programs.title")} />
              <p className={`${satoshi.className} text-foreground font-normal text-[18px]`}>{t("programs.description")}</p>
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
