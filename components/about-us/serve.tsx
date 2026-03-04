import { satoshi } from "@/app/utils/fonts"
import SectionContainer from "../sectionContainer"
import HeadingTwo from "../ui/typography/headingTwo"
import HeadingFour from "../ui/typography/headingFour"

import PuzzleIcon from "@/assets/svg/puzzle1.svg"
import LockIcon from "@/assets/svg/lock.svg"


const Serve = () => {
  return (
    <SectionContainer>
      <div className="space-y-5 flex-col py-2.5 flex text-foreground bg-background items-center">
        <div className="w-full">
          <div className="w-4/5 mx-auto">
            <HeadingTwo text="Who We Serve" className="mx-auto font-normal! text-[60px]!" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-10 divide-x py-10">
          <div className="space-y-5">
            <PuzzleIcon className="dark:fill-primary" />

            <div className="space-y-5 text-left">
              <HeadingFour className='w-4/5! text-[25px]! font-bold!' text="Social work research." />
              <p className={`${satoshi.className} text-foreground font-normal text-[18px]`}>Evidence-based research and advocacy to strengthen social welfare systems.</p>
            </div>
          </div>
          <div className="space-y-5">
            <LockIcon className="dark:fill-primary" />
            <div className="space-y-5 text-left">
              <HeadingFour className='text-[25px]! font-bold!' text="Social program development." />
              <p className={`${satoshi.className} text-foreground font-normal text-[18px]`}>Holistic social care supporting access to basic human needs.</p>
            </div>
          </div>
          <div className="space-y-5 text-left">
            <LockIcon className="dark:fill-primary" />
            <div className="space-y-5">
              <HeadingFour className="text-[25px]! font-bold!" text="Assistive Products & Technologies" />
              <p className={`${satoshi.className} text-foreground font-normal text-[18px]`}>Facilitating access to global assistive solutions for diverse population groups.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default Serve
