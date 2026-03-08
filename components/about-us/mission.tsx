import { satoshi } from "@/app/utils/fonts"
import SectionContainer from "../sectionContainer"
import Image from "next/image"
import AssistiveLens from "@/assets/images/man_on_assistive_lens.png"
import ManOnWheelChair from "@/assets/images/wheelchair.png"
import { useTranslations } from "next-intl"

const Mission = () => {
  const t = useTranslations("AboutUs.mission")
  return (
    <SectionContainer>
      <div className={`${satoshi.className} flex flex-col gap-y-10 md:gap-y-0`}>
        <div className="flex flex-col md:flex-row items-center md:h-[350.48px] gap-y-5 md:gap-y-0 md:gap-x-7.5">
          <div className="border-l-2 text-left pl-10 border-l-primary px-4 w-full py-4 md:py-0">
            <p className={`text-lg md:text-[30px] font-medium`}>{t("missionHeading")}</p>
            <p className="text-sm md:text-[22px]">{t("missionText")}</p>
          </div>
          <div className="w-full md:w-[515.89px] h-[220px] md:h-full rounded-tl-4xl flex items-end rounded-tr-4xl px-8 pt-5 relative bg-linear-to-r from-white/80 to-primary rounded-bl-md rounded-br-md gap-10">
            <Image src={ManOnWheelChair} alt="man on assistive lens" className="h-full w-full object-cover  rounded-tl-4xl rounded-tr-4xl" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center md:h-[350.48px] gap-y-5 md:gap-y-0 md:gap-x-7.5">
          <div className="border-r-2 border-primary text-left w-full py-4 md:py-0 px-4 md:px-0">
            <p className={`text-lg md:text-[30px] font-normal`}>{t("visionHeading")}</p>
            <p className="text-sm md:text-[22px]">{t("visionText")}</p>
          </div>
          <div className="w-full md:w-[515.89px] h-[220px] md:h-full rounded-tl-4xl flex items-end rounded-tr-4xl px-8 pt-5 relative bg-linear-to-r from-white/80 to-primary rounded-bl-md rounded-br-md gap-10">
            <Image src={AssistiveLens} alt="man on assistive lens" className="h-full object-cover  rounded-tl-4xl rounded-tr-4xl" />
          </div>
        </div>
        <div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default Mission
