import { outfit, satoshi } from "@/app/utils/fonts"
import SectionContainer from "../sectionContainer"
import HeadingTwo from "../ui/typography/headingTwo"
import HeadingFour from "../ui/typography/headingFour"
import { useTranslations } from "next-intl"

import PuzzleIcon from "@/assets/svg/puzzle1.svg"
import LockIcon from "@/assets/svg/lock.svg"


const Ethics = () => {
  const t = useTranslations("AboutUs.ethics")
  return (
    <SectionContainer>
      <div className="space-y-5">
        <div className="w-full">
          <div className="w-4/5 mx-auto">
            <HeadingTwo text={t("heading")} className="mx-auto font-normal! text-foreground! text-[60px]!" />
          </div>
        </div>
        <div className={`${outfit.className} text-foreground text-[25px] w-full text-center font-extralight space-y-5`}>
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
          <p>{t("p3")}</p>
        </div>
      </div>
    </SectionContainer>
  )
}

export default Ethics
