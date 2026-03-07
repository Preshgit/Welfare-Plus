import { SparkleIcon } from "lucide-react"
import { Button } from "../ui/button"
import HeadingTwo from "../ui/typography/headingTwo"
import { outfit } from "@/app/utils/fonts"
import Image from "next/image"
import SectionContainer from "../sectionContainer"
import { useTranslations } from "next-intl"


const Story = () => {
  const t = useTranslations("AboutUs.story")
  return (
    <SectionContainer>
      <div className=" mx-auto space-y-5">
        <Button variant="plain" className={`h-[55.73px] w-[137.69px] text-foreground border-gray-200 pl-[5.96px] pr-[17.91px] py-[7.96px] shadow-none border rounded-full`}><SparkleIcon className="w-[39.81px] h-[39.81px] fill-foreground" />{t("button")}</Button>
        <div className="flex flex-wrap items-center gap-3 justify-center">
          <HeadingTwo text={t("heading")} className="font-light! text-foreground text-2xl! sm:text-4xl! lg:text-[60px]!" />
          <Image src="/wpLOGOpng 3.png" width={312.74} height={120.73} alt="welfare plus logo" className="object-cover hidden md:block" />
        </div>
        <div className={`${outfit.className} text-base! sm:text-xl! lg:text-[30px]! text-foreground font-light text-left space-y-10`}>
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
          <p>{t("p3")}</p>
          <p>{t("p4")}</p>
          <p>{t("p5")}</p>
        </div>
      </div>
    </SectionContainer>

  )
}

export default Story
