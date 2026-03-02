import { outfit } from "@/app/utils/fonts"
import { Button } from "../ui/button"
import { SparkleIcon } from "lucide-react"
import HeadingTwo from "../ui/typography/headingTwo"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Faq = () => {
  return (
    <section className="py-10 min-h-203.5 flex items-center bg-background dark:border-b-primary/40 dark:border-b">
      <div className="w-4/5 mx-auto space-y-10">
        <Button variant="plain" className={`${outfit.className} bg-white dark:bg-black dark:text-white h-14 w-24 border-gray-200 pl-[5.96px] pr-[17.91px] py-[7.96px] shadow-none border rounded-full`}><SparkleIcon className="fill-foreground w-[39.81px] h-[39.81px]" />FAQ</Button>
        <div className="flex  justify-between gap-x-5">
          <div className="w-4/5 space-y-3">
            <HeadingTwo text="Frequently Asked 
Questions" className="text-[64px]!" />
            <div className="space-y-2">
              <p>Still got something in mind?</p>
              <Button className="text-white py-3 px-6">Get in touch with us</Button>
            </div>
          </div>
          <div className="w-full">
            <Accordion type="single" collapsible defaultValue="item-1" className="space-y-5 w-full pb-5">
              <AccordionItem value="welfare-plus" className="w-full! px-10 py-2 border rounded-md">
                <AccordionTrigger className="font-semibold flex justify-between w-full!">What is Welfare Plus</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="welfare-benefit" className="w-full! px-10 py-2 border rounded-md">
                <AccordionTrigger className="font-semibold flex justify-between w-full!">How can I benefit from Welfare Plus services?</AccordionTrigger>
                <AccordionContent>
                  Our AI models can enhance your business operations by automating tasks, improving accuracy, and providing data-driven insights.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="welfare-membership" className="w-full! px-10 py-2 border rounded-md">
                <AccordionTrigger className="font-semibold flex justify-between w-full!">How do I become part of Welfare Plus?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="welfare-membership" className="w-full! px-10 py-2 border rounded-md">
                <AccordionTrigger className="font-semibold flex justify-between w-full!">Are your AI models customizable?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="welfare-membership" className="w-full! px-10 py-2 border rounded-md">
                <AccordionTrigger className="font-semibold flex justify-between w-full!">How is data privacy handled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
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
