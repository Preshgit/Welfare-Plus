"use client"
import { ArrowRightIcon } from "lucide-react"
import { Button } from "./ui/button"
import HeadingThree from "./ui/typography/headingThree"
import { useRouter } from "@/i18n/routing"

const Impacts = ({ text, content, btnText, partnershipsText }: { text: string, content: string | Array<{ text: string }>, btnText: string, partnershipsText: string }) => {
  const isArray = Array.isArray(content);
  const isList = typeof content === 'string' && content.includes('|');
  const router = useRouter()

  return (
    <section className="w-screen bg-linear-to-b font-medium px-6 md:px-25 dark:bg-background flex items-center justify-center">
      <div className="space-y-10 text-center mx-auto">
        <div className="space-y-5">
          <HeadingThree text={"Partnerships"} className="text-primary!" />
          <p className="text-[30px] font-normal text-justify">
            {partnershipsText}
          </p>
          <Button onClick={() => router.push("/contact-us/#contactForm")} variant="primary" className="gap-[10.95px] md:w-fit w-full py-[14.6px] pl-[19.47px] pr-[15.82px]">
            {btnText}
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Impacts
