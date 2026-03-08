import { satoshi } from "@/app/utils/fonts"
import SectionContainer from "../sectionContainer"
import HeadingTwo from "../ui/typography/headingTwo"
import HeadingFour from "../ui/typography/headingFour"
import { useTranslations } from "next-intl"

import PuzzleIcon from "@/assets/svg/puzzle1.svg"
import LockIcon from "@/assets/svg/lock.svg"


const Serve = () => {
  const t = useTranslations("AboutUs.serve")
  return (
    <SectionContainer>
      <div className="space-y-5 flex-col py-2.5 flex text-foreground bg-background items-center">
        <div className="w-full">
          <div className="w-4/5 mx-auto">
            <HeadingTwo text={t("heading")} className="mx-auto font-normal! text-2xl! sm:text-4xl! lg:text-[60px]!" />
          </div>
        </div>
        <div className="grid  divide-primary grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-10 md:divide-x py-10">
          <div className="space-y-5 flex md:items-start items-center flex-col">
            <PuzzleIcon className="dark:fill-primary" />
            <div className="space-y-5 flex flex-col">
              <HeadingFour className='text-center md:text-left text-[25px]! font-bold!' text={t("researchHeading")} />
              <p className={`${satoshi.className} text-center md:text-left text-foreground font-normal text-[18px]`}>{t("researchDescription")}</p>
            </div>
          </div>
          <div className="space-y-5 flex md:items-start pr-4 items-center flex-col">
            <LockIcon className="dark:fill-primary" />
            <div className="space-y-5 flex flex-col">
              <HeadingFour className='text-center md:text-left text-[25px]! font-bold!' text={t("programsHeading")} />
              <p className={`${satoshi.className} text-center md:text-left text-foreground font-normal text-[18px]`}>{t("programsDescription")}</p>
            </div>
          </div>
          <div className="space-y-5 flex md:items-start items-center flex-col">
            <LockIcon className="dark:fill-primary" />
            <div className="space-y-5 flex flex-col">
              <HeadingFour className="text-center md:text-left text-[25px]! font-bold!" text={t("productsHeading")} />
              <p className={`${satoshi.className} text-center md:text-left text-foreground font-normal text-[18px]`}>{t("productsDescription")}</p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default Serve
