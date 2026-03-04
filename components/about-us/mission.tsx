import { satoshi } from "@/app/utils/fonts"
import SectionContainer from "../sectionContainer"
import Image from "next/image"
import AssistiveLens from "@/assets/images/man_on_assistive_lens.png"
import ManOnWheelChair from "@/assets/images/wheelchair.png"

const Mission = () => {
  return (
    <SectionContainer>
      <div className={`${satoshi.className}`}>
        <div className="flex items-center h-[350.48px] gap-x-7.5">
          <div className="border-l-2 text-left pl-10 border-l-primary px-4 w-full">
            <p className={`text-[30px] font-medium`}>Mission</p>
            <p className="text-[22px]">To advance inclusive social welfare systems, expand access to assistive technologies, and promote holistic wellbeing through research, partnerships, and innovative social programs.</p>
          </div>
          <div className="w-[515.89px] h-full rounded-tl-4xl flex items-end rounded-tr-4xl px-8 pt-5 relative bg-linear-to-r from-white/80 to-primary rounded-bl-md rounded-br-md gap-10">
            <Image src={ManOnWheelChair} alt="man on assistive lens" className="h-full w-full object-cover  rounded-tl-4xl rounded-tr-4xl" />
          </div>
        </div>
        <div className="flex flex-row-reverse items-center h-[350.48px] gap-x-7.5">
          <div className="border-r-2 border-primary text-left w-full">
            <p className={`text-[30px] font-normal`}>Vision</p>
            <p className="text-[22px]">A world where all people - regardless of age, ability, or location - have access to essential social welfare services and opportunities to live independently and with dignity.</p>
          </div>
          <div className="w-[515.89px] h-full rounded-tl-4xl flex items-end rounded-tr-4xl px-8 pt-5 relative bg-linear-to-r from-white/80 to-primary rounded-bl-md rounded-br-md gap-10">
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
