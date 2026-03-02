import { outfit, satoshi } from "@/app/utils/fonts"
import SectionContainer from "../sectionContainer"
import HeadingTwo from "../ui/typography/headingTwo"
import HeadingFour from "../ui/typography/headingFour"

import PuzzleIcon from "@/assets/svg/puzzle1.svg"
import LockIcon from "@/assets/svg/lock.svg"


const Ethics = () => {
  return (
    <SectionContainer>
      <div className="space-y-5">
        <div className="w-full">
          <div className="w-4/5 mx-auto">
            <HeadingTwo text="Professional Standards and Ethics" className="mx-auto font-normal! text-foreground! text-[60px]!" />
          </div>
        </div>
        <div className={`${outfit.className} text-foreground text-[25px] w-full text-center font-extralight space-y-5`}>
          <p>For International and collaborative social care services and strategic social programs needing professional standards and data protection, Welfare Plus program director is registered with Social Work England (and has been registered for over one-and-a-half decades from when it was named General Social Care Council) and duly authorized to use the professional title ‘Social Worker’.</p>
          <p>Therefore, Welfare Plus in-house international code of conduct for staff aligns overtly with the regulatory framework of Social Work England (established by the Children and Social Work 2017, and supported by the Social Workers Regulations 2018, as amended).</p>
          <p>In Finland, sub-Saharan Africa, and possibly in the United States and elsewhere, Welfare Plus adheres to relevant national legal and regulatory frameworks while promoting comparative, evidence-based, and ethically grounded social work practice.</p>
        </div>
      </div>
    </SectionContainer>
  )
}

export default Ethics 
