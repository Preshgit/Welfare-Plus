import { satoshi } from "@/app/utils/fonts"
import SectionContainer from "../sectionContainer"
import HeadingTwo from "../ui/typography/headingTwo"
import HeadingFour from "../ui/typography/headingFour"
import Image from "next/image"
import CheckCircle from "@/assets/svg/check_circle.svg"

import { SparkleIcon } from "lucide-react"
import { Button } from "../ui/button"
import FingerGrip from "@/assets/images/finger_grip.png"
import HeadingThree from "../ui/typography/headingThree"


const ProductContainer = () => {
  return (
    <section className="py-15">
      <div className="space-y-5">
        <div className="w-full text-center">
          <div className="w-4/5 mx-auto">
            <Button variant="plain" className={`h-[55.73px] w-[137.69px] border-gray-200 pl-[5.96px] pr-[17.91px] py-[7.96px] shadow-none border rounded-full text-foreground`}><SparkleIcon className="w-[39.81px] h-[39.81px] fill-foreground stroke-background" />Our Products</Button>
            <HeadingTwo text="Products and Services" className="mx-auto font-normal! text-foreground! text-[60px]!" />
          </div>
        </div>
        <div className="flex gap-x-10 items-center w-full">
          <div className="w-175.25 h-157.5">
            <Image width={701} height={630} className="object-cover" src={FingerGrip} alt="our products" />
          </div>
          <div className="p-10 space-y-10 w-2/5 flex items-center justify-center flex-col">
            <HeadingThree className="font-normal text-[40px]!">Assistive Technology and Independent Living Solutions</HeadingThree>
            <ul className={`${satoshi.className} space-y-3 [&>li]:flex [&>li]:items-start [&>li]:gap-2`}>
              <li>
                <CheckCircle />
                <span>Independent living aids for older adults and veterans</span>
              </li>
              <li>
                <CheckCircle />
                <span>Assistive devices for children with special needs</span>
              </li>
              <li>
                <CheckCircle />
                <span>Mobility and rehabilitation tools</span>
              </li>
              <li>
                <CheckCircle />
                <span>Therapy tools and adaptive equipment for persons with disabilities</span>
              </li>
              <li>
                <CheckCircle />
                <span>Representation and distribution of international assistive technology manufacturers</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductContainer 
