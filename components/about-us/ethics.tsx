import { outfit, satoshi } from "@/app/utils/fonts"
import SectionContainer from "../sectionContainer"
import HeadingTwo from "../ui/typography/headingTwo"
import { useTranslations } from "next-intl"



const Ethics = () => {
  const t = useTranslations("AboutUs.ethics")
  return (
    <SectionContainer>
      <div className="space-y-5">
        <div className="w-full">
          <div className="w-4/5 mx-auto">
            <HeadingTwo text={t("heading")} className="mx-auto font-normal! text-foreground! text-2xl! sm:text-4xl! lg:text-[60px]!" />
          </div>
        </div>
        <div className={`${outfit.className} text-foreground text-sm sm:text-base lg:text-[25px] w-full text-justify font-extralight space-y-5`}>
          <p>{t.rich("p1", {
            b: (chunks) => <span className="font-medium">{chunks}</span>
          })}</p>
          <p>{t("p2")}</p>
          <p>{t("p3")}</p>
          <p className="text-primary font-semibold">{t("p4")}</p>
        </div>
      </div>
    </SectionContainer>
  )
}

export default Ethics
