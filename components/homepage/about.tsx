import { ArrowUpRightIcon, SparkleIcon } from "lucide-react"
import { Button } from "../ui/button"
import HeadingTwo from "../ui/typography/headingTwo"
import { outfit, satoshi } from "@/app/utils/fonts"
import HeadingFour from "../ui/typography/headingFour"
import Link from "next/link"
import BusIcon from "@/assets/svg/bus.svg"
import People from "@/assets/svg/people.svg"
import UserIcon from "@/assets/svg/userr.svg"

const About = () => {
  return (
    <section className={`${outfit.className} bg-background text-foreground flex justify-center items-center pt-40 pb-10 min-h-157.5`}>
      <div className="w-5/6 mx-auto flex flex-col justify-center items-center gap-y-10">
        <div className="text-center space-y-5">
          <Button variant="plain" className={`text-foreground h-[55.73px] w-[137.69px] border-gray-200 pl-[5.96px] pr-[17.91px] py-[7.96px] shadow-none border rounded-full`}><SparkleIcon className="fill-foreground w-[39.81px] h-[39.81px]" />About Us</Button>
          <HeadingTwo text="Discover What We Do" />
          <p className="text-[28px] font-light text-foreground">Welfare Plus is a Finland-based business organization affiliated to organizations abroad, and we are dedicated to improving wellbeing across countries and communities.</p>
        </div>
        <div className="grid grid-cols-3 gap-x-10 divide-x">
          <div className="space-y-5">
            <People />
            <div className="space-y-5">
              <HeadingFour className='w-4/5! text-[25px]! font-bold!' text="We Provide Social Work research" />
              <p className={`${satoshi.className} text-foreground font-normal text-[18px]`}>Evidence-based research and advocacy to strengthen social welfare systems.</p>
            </div>
          </div>
          <div className="space-y-5">
            <BusIcon />
            <div className="space-y-5">
              <HeadingFour className='text-[25px]! font-bold!' text="We sell Assistive Products & Technologies," />
              <p className={`${satoshi.className} text-foreground font-normal text-[18px]`}>Facilitating access to global assistive solutions for diverse population groups.</p>
            </div>
          </div>
          <div className="space-y-5">
            <UserIcon />
            <div className="space-y-5">
              <HeadingFour className="text-[25px]! font-bold!" text="We Facilitate Social program development." />
              <p className={`${satoshi.className} text-foreground font-normal text-[18px]`}>Holistic social care supporting access to basic human needs.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <Link href="/about-us">
            <Button variant="colored" size="md" className={`${outfit.className} h-12 bg-primary w-fit`}>
              See More About Us
              <ArrowUpRightIcon className="stroke-3 font-medium text-[20px]" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default About
