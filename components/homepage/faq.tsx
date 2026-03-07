import { outfit } from "@/app/utils/fonts"
import { Button } from "../ui/button"
import { SparkleIcon } from "lucide-react"
import HeadingTwo from "../ui/typography/headingTwo"
import { useTranslations } from "next-intl"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Faq = () => {
  const t = useTranslations("Homepage.faq")
  return (
    <section className="py-10 min-h-203.5 flex items-center bg-background dark:border-b-primary/40 dark:border-b">
      <div className="w-11/12 md:w-4/5 mx-auto space-y-10">
        <Button variant="plain" className={`${outfit.className} bg-white dark:bg-black dark:text-white h-14 w-24 border-gray-200 pl-[5.96px] pr-[17.91px] py-[7.96px] shadow-none border rounded-full`}><SparkleIcon className="fill-foreground w-[39.81px] h-[39.81px]" />FAQ</Button>
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-x-5">
          <div className="w-full lg:w-4/5 space-y-3">
            <HeadingTwo text={t("heading")} className="text-2xl sm:text-3xl lg:text-[64px]!" />
            <div className="space-y-2">
              <p>{t("stillGotQuestion")}</p>
              <Button className="text-white py-3 px-6">{t("getInTouch")}</Button>
            </div>
          </div>
          <div className="w-full">
            <Accordion type="single" collapsible defaultValue="item-1" className="space-y-5 w-full pb-5">
              <AccordionItem value="welfare-plus" className="w-full! px-10 py-2 border rounded-md">
                <AccordionTrigger className="font-semibold flex justify-between w-full!">{t("item0Question")}</AccordionTrigger>
                <AccordionContent>
                  {t("item0Answer")}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="welfare-benefit" className="w-full! px-10 py-2 border rounded-md">
                <AccordionTrigger className="font-semibold flex justify-between w-full!">{t("item1Question")}</AccordionTrigger>
                <AccordionContent>
                  {t("item1Answer")}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="welfare-membership" className="w-full! px-10 py-2 border rounded-md">
                <AccordionTrigger className="font-semibold flex justify-between w-full!">{t("item2Question")}</AccordionTrigger>
                <AccordionContent>
                  {t("item2Answer")}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="welfare-customizable" className="w-full! px-10 py-2 border rounded-md">
                <AccordionTrigger className="font-semibold flex justify-between w-full!">{t("item3Question")}</AccordionTrigger>
                <AccordionContent>
                  {t("item3Answer")}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="welfare-privacy" className="w-full! px-10 py-2 border rounded-md">
                <AccordionTrigger className="font-semibold flex justify-between w-full!">{t("item4Question")}</AccordionTrigger>
                <AccordionContent>
                  {t("item4Answer")}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Faq
