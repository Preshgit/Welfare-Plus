import { ArrowRightIcon } from "lucide-react"
import { Button } from "./ui/button"
import HeadingThree from "./ui/typography/headingThree"
import { outfit } from "@/app/utils/fonts"

const Impacts = ({ text, content, btnText, partnershipsText }: { text: string, content: string | Array<{ text: string }>, btnText: string, partnershipsText: string }) => {
  const isArray = Array.isArray(content);
  const isList = typeof content === 'string' && content.includes('|');

  return (
    <section className="w-screen bg-linear-to-b font-medium px-6 md:px-25 dark:bg-background flex items-center justify-center">
      <div className="space-y-10 text-center mx-auto">
        <div className="space-y-5">
          <HeadingThree text={text} className="text-primary!" />

          {isArray ? (
            <ul className="space-y-3 w-fit mx-auto text-left">
              {(content as Array<{ text: string }>).map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-[14px] md:mt-[22px] h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />
                  <p className={`md:text-[30px] text-foreground font-light ${outfit.className} text-justify`}>
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          ) : isList ? (
            <ul className="space-y-3 w-fit mx-auto text-left">
              {(content as string).split('|').map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-[14px] md:mt-[22px] h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />
                  <p className={`md:text-[30px] text-foreground font-light ${outfit.className} text-justify`}>
                    {item.trim()}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            (content as string).split("\n").map((word, index) => (
              <p key={index} className={`md:text-[30px] text-foreground font-light ${outfit.className}`}>
                {word}
              </p>
            ))
          )}
        </div>
        <HeadingThree text={"Partnerships"} className="text-primary!" />
        <p className="text-[30px] font-normal text-justify">
          {partnershipsText}
        </p>
        <Button variant="primary" className="gap-[10.95px] md:w-fit w-full py-[14.6px] pl-[19.47px] pr-[15.82px]">
          {btnText}
          <ArrowRightIcon />
        </Button>
      </div>
    </section>
  )
}

export default Impacts
