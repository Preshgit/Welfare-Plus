import { SparkleIcon } from "lucide-react"
import { Button } from "../ui/button"
import HeadingTwo from "../ui/typography/headingTwo"
import { outfit } from "@/app/utils/fonts"
import Image from "next/image"
import SectionContainer from "../sectionContainer"


const Story = () => {
  return (
    <SectionContainer>
      <div className=" mx-auto space-y-5">
        <Button variant="plain" className={`h-[55.73px] w-[137.69px] text-foreground border-gray-200 pl-[5.96px] pr-[17.91px] py-[7.96px] shadow-none border rounded-full`}><SparkleIcon className="w-[39.81px] h-[39.81px] fill-foreground" />Our Story</Button>
        <div className="flex items-center gap-x-3 justify-center">
          <HeadingTwo text="Welcome To" className="font-light! text-foreground text-[60px]!" />
          <Image src="/wpLOGOpng 3.png" width={312.74} height={120.73} alt="welfare plus logo" className="object-cover" />
        </div>
        <div className={`${outfit.className} text-[30px]! text-foreground font-light text-left space-y-10`}>
          <p>Welfare Plus is a Finland-based business organization affiliated to organizations abroad, and we are dedicated to improving wellbeing across countries and communities.
          </p>
          <p>We sell assistive technologies and independent living solutions that enable individuals - especially vulnerable populations - to live safely, independently, and with dignity. Welfare Plus also focuses on improving access to essential services such as housing, healthcare, education, employment, and social care.
          </p>

          <p>Our approach integrates generalist social work practice with international specialization and we support private sector actors, government organizations, civil society organizations, and communities to improve wellbeing in contemporary market-driven economies, where social welfare is jointly delivered by public institutions, businesses, civil society, and families.</p>
          <p>Through partnerships with academia, governments, businesses, civil society organizations, and financial institutions, Welfare Plus pioneers access to general and customized assistive technologies and serves as an international representative for manufacturers. We also engage in advocacy for inclusive social security systems and safeguarding frameworks.</p>

          <p>NB: Welfare Plus is non-segregating in dealing with government and political parties. As consultant, we are open to partnering with all levels of government, and political parties to help develop different welfare programs and initiatives for the people.</p>
        </div>
      </div>
    </SectionContainer>

  )
}

export default Story
