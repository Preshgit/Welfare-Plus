import { satoshi } from "@/app/utils/fonts"
import SectionContainer from "../sectionContainer"
import { useTranslations } from "next-intl"

const Mission = () => {
  const t = useTranslations("AboutUs.mission")
  return (
    <SectionContainer>
      <div className={`${satoshi.className} flex text-justify! flex-col gap-y-10 space-y-10 md:gap-y-0`}>
        <div className="flex flex-col md:flex-row items-center text-justify! gap-y-5 md:gap-y-0 md:gap-x-7.5">
          <div className="border-l-2 text-justify pl-10 border-l-primary px-4 w-full py-4 md:py-0">
            <p className={`text-lg md:text-[30px] font-medium`}>{t("missionHeading")}</p>
            <p className="text-sm md:text-[22px]">{t("missionText")}</p>
          </div>
        </div>
        <div className="md:flex-row text-justify gap-y-5 md:gap-y-0 md:gap-x-7.5">
          <div className="border-l-2 pl-10 border-l-primary px-4 w-full py-4 md:py-0">
            <p className={`text-lg md:text-[30px] font-medium`}>{t("visionHeading")}</p>
            <p className="text-sm md:text-[22px]">{t("visionText")}</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default Mission
