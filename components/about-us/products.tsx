import { satoshi } from "@/app/utils/fonts"
import SectionContainer from "../sectionContainer"
import HeadingTwo from "../ui/typography/headingTwo"
import HeadingFour from "../ui/typography/headingFour"
import Image from "next/image"
import CheckCircle from "@/assets/svg/check_circle.svg"
import { useTranslations } from "next-intl"

import { SparkleIcon } from "lucide-react"
import { Button } from "../ui/button"
import FingerGrip from "@/assets/images/finger_grip.png"
import HeadingThree from "../ui/typography/headingThree"


const ProductContainer = () => {
  const t = useTranslations("AboutUs.products")
  return (
    <section className="py-15">
      <div className="space-y-5">
        <div className="w-full text-center">
          <div className="w-4/5 mx-auto">
            <Button variant="plain" className={`h-[55.73px] w-[137.69px] border-gray-200 pl-[5.96px] pr-[17.91px] py-[7.96px] shadow-none border rounded-full text-foreground`}><SparkleIcon className="w-[39.81px] h-[39.81px] fill-foreground stroke-background" />{t("button")}</Button>
            <HeadingTwo text={t("heading")} className="mx-auto font-normal! text-foreground! text-[60px]!" />
          </div>
        </div>
        <div className="flex gap-x-10 items-center w-full">
          <div className="w-175.25 h-157.5">
            <Image width={701} height={630} className="object-cover" src={FingerGrip} alt="our products" />
          </div>
          <div className="p-10 space-y-10 w-2/5 flex items-center justify-center flex-col">
            <HeadingThree className="font-normal text-[40px]!">{t("subheading")}</HeadingThree>
            <ul className={`${satoshi.className} space-y-3 [&>li]:flex [&>li]:items-start [&>li]:gap-2`}>
              <li><CheckCircle /><span>{t("item0")}</span></li>
              <li><CheckCircle /><span>{t("item1")}</span></li>
              <li><CheckCircle /><span>{t("item2")}</span></li>
              <li><CheckCircle /><span>{t("item3")}</span></li>
              <li><CheckCircle /><span>{t("item4")}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductContainer 
