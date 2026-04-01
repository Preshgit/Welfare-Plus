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
          <HeadingTwo text={t("heading")} className="font-normal! text-foreground text-[32px] sm:text-[48px] lg:text-[60px]!" />

        </div>
        <div className={`${outfit.className} text-base sm:text-lg lg:text-[24px] text-foreground font-extralight text-justify space-y-10`}>
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
          <p>{t("p3")}</p>
          <p>{t("p4")}</p>
          <p>{t.rich("p5", {
            b: (chunks) => <span className="font-medium">{chunks}</span>
          })}</p>
        </div>
      </div>
    </SectionContainer>

  )
}

export default Story
