import Image from "next/image"
import MapImage from "@/assets/images/Map.png"
import HeadingThree from "../ui/typography/headingThree"
import { MailOpenIcon, MessageSquare, MessageSquareText, UserIcon } from "lucide-react"
import { Button } from "../ui/button"

const ContactForm = () => {
  return (
    <div className="flex bg-background items-center min-h-125 py-10 gap-x-5">
      <div className="relative w-194.5">
        <Image src={MapImage} alt="map" height={413} width={778} />
      </div>
      <div className="space-y-5 w-fit">
        <HeadingThree text="We'd love to hear from you!" className="font-medium! max-w-sm text-[75px]" />
        <form className="space-y-5 divide-y max-w-sm justify-seld-end">
          <div className="flex items-center justify-between py-3 px-3">
            <input type="text" placeholder="Your name*" />
            <span><UserIcon className="dark:stroke-primary stroke-gray-500" /></span>
          </div>
          <div className="flex items-center justify-between py-3 px-3">
            <input type="email" placeholder="Your email address*" />
            <span><MailOpenIcon className="stroke-gray-500 dark:stroke-primary" /></span>
          </div>
          <div className="flex  justify-between py-3 px-3">
            <textarea className="resize-none w-full" rows={8} placeholder="Your message*" />
            <span><MessageSquareText className="stroke-gray-500 dark:stroke-primary" /></span>
          </div>
          <Button className="py-3 px-5 w-fit">
            Send a message
          </Button>
        </form>

      </div>
    </div>
  )
}

export default ContactForm
