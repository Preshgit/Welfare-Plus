import { ArrowRightIcon } from "lucide-react"
import { Button } from "./ui/button"
import HeadingThree from "./ui/typography/headingThree"
import { outfit } from "@/app/utils/fonts"

const Impacts = ({ text, content, btnText }: { text: string, content: string, btnText: string }) => {
  return (
    <section className="w-screen bg-linear-to-b font-medium px-25 dark:bg-background flex items-center justify-center">
      <div className="space-y-5 text-center mx-auto">
        <HeadingThree text={text} className="text-primary!" />
        {content.split("\n").map((word, index) => (
          <p key={index} className={`text-[30px] text-gray-500 font-light ${outfit.className}`}>
            {word}
          </p>
        ))}
        <Button variant="primary" className="gap-[10.95px] py-[14.6px] pl-[19.47px] pr-[15.82px]">
          {btnText}
          <ArrowRightIcon />
        </Button>
      </div>
    </section>
  )
}

export default Impacts
