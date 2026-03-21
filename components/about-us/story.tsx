import HeadingTwo from "../ui/typography/headingTwo"
import { outfit } from "@/app/utils/fonts"
import SectionContainer from "../sectionContainer"
import { useTranslations } from "next-intl"


const Story = () => {
  const t = useTranslations("AboutUs.story")
  return (
    <SectionContainer>
      <div className=" mx-auto space-y-5">
        <div className="flex flex-wrap items-center gap-3 justify-center">
          <HeadingTwo text={t("heading")} className="font-normal! text-foreground text-2xl! sm:text-4xl! lg:text-[60px]!" />

        </div>
        <div className={`${outfit.className} text-base! sm:text-xl! lg:text-[30px]! text-foreground font-extralight text-justify space-y-10`}>
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
