import Image from "next/image"
import MapImage from "@/assets/images/Map.png"
import { MailOpenIcon, MessageSquareText, UserIcon } from "lucide-react"
import { Button } from "../ui/button"

const ContactForm = () => {
  return (
    <div className="flex bg-background items-center min-h-125 py-10 gap-x-5 px-5">
      <div className="relative w-150">
        <Image src={MapImage} alt="map" height={600} width={600} />
      </div>
      <div className="space-y-5 flex flex-1 flex-col">
        <h3 className="font-medium! max-w-md text-[65px]">We&apos;d love to <span className='underline decoration-primary'>hear</span> from you!</h3>
        <form className="space-y-5 divide-y w-full justify-self-end">
          <div className="flex items-center justify-between py-3 px-3 relative">
            <input type="text" placeholder="Your name*" className="w-full pl-10 py-2 border-none outline-none ring-0 focus:ring-0 focus:outline-none placeholder:text-gray-400" />
            <UserIcon className="dark:stroke-primary stroke-gray-500 absolute" />
          </div>
          <div className="flex items-center justify-between py-3 px-3">
            <input type="email" placeholder="Your email address*" className="w-full pl-10 py-2 border-none outline-none ring-0 focus:ring-0 focus:outline-none placeholder:text-gray-400" />
            <MailOpenIcon className="stroke-gray-500 dark:stroke-primary absolute" />
          </div>
          <div className="flex  justify-between py-3 px-3 relative">
            <textarea className="w-full pl-10 py-2 border-none outline-none ring-0 focus:ring-0 focus:outline-none placeholder:text-gray-400 resize-none" rows={8} placeholder="Your message*" />
            <MessageSquareText className="top-5 stroke-gray-500 dark:stroke-primary absolute" />
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
