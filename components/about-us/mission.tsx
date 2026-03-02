import { satoshi } from "@/app/utils/fonts"
import SectionContainer from "../sectionContainer"
import Image from "next/image"

const Mission = () => {
  return (
    <SectionContainer>
      <div className={`${satoshi.className}`}>
        <div className="flex items-center">
          <div className="border-l-2 text-left pl-10 border-l-primary px-4">
            <p className={`text-[30px] font-medium`}>Mission</p>
            <p className="text-[22px]">To advance inclusive social welfare systems, expand access to assistive technologies, and promote holistic wellbeing through research, partnerships, and innovative social programs.</p>
          </div>
          <div>
            <Image src="" alt="man on wheel chair" width={100} height={100} />
          </div>
        </div>
        <div>
          <div className="border-r-2 border-primary text-left">
            <p className={`text-[30px] font-normal`}>Vision</p>
            <p className="text-[22px]">A world where all people - regardless of age, ability, or location - have access to essential social welfare services and opportunities to live independently and with dignity.</p>
          </div>
          <Image src="" alt="man on wheel chair" width={100} height={100} />
        </div>
        <div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default Mission
