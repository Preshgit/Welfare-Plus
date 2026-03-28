import Image from "next/image"
import MapImage from "@/assets/images/Map.png"
import MapImageDark from "@/assets/images/map_dark.png"
import { MailOpenIcon, MessageSquareText, UserIcon } from "lucide-react"
import { Button } from "../ui/button"
import { useTranslations } from "next-intl"

const ContactForm = () => {
  const t = useTranslations("ContactForm")
  return (
    <div className="flex flex-col lg:flex-row w-full bg-background items-center py-10 gap-8 lg:gap-x-5 px-5" id="contactForm">
      <div className="relative hidden lg:block w-150 px-24 flex-shrink-0">
        <Image src={MapImage} alt="map" height={900} width={600} className="dark:hidden" />
        <Image src={MapImageDark} alt="map" height={900} width={600} className="hidden dark:block" />
      </div>
      <div className="space-y-5 flex flex-1 flex-col">
        <h3 className="font-medium! max-w-md text-[32px] sm:text-[48px] lg:text-[60px] leading-tight">{t("heading")} <span className='underline decoration-primary'>{t("headingHighlight")}</span> {t("headingPost")}</h3>
        <p className="text-base sm:text-lg lg:text-[22px] font-light text-foreground/80">{t("description")}</p>
        <form className="space-y-5 w-full">
          <div className="flex items-center justify-between border-2 rounded-2xl  py-3 px-3 relative">
            <input type="text" placeholder={t("namePlaceholder")} className=" w-full outline-none ring-0 focus:ring-0 focus:outline-none placeholder:text-gray-400" />
            <UserIcon className="dark:stroke-primary stroke-gray-500 " />
          </div>
          <div className="flex border-2 rounded-2xl justify-between items-baseline py-3 px-3">
            <input type="email" placeholder={t("emailPlaceholder")} className=" w-full outline-none ring-0 focus:ring-0 focus:outline-none placeholder:text-gray-400" />
            <MailOpenIcon className="stroke-gray-500 dark:stroke-primary" />
          </div>
          <div className="flex justify-between py-2 px-2 items-baseline relative border-2 rounded-2xl ">
            <textarea className="w-full outline-none focus:ring-0 focus:outline-none placeholder:text-gray-400 resize-none" rows={5} placeholder={t("messagePlaceholder")} />
            <MessageSquareText className="top-5 stroke-gray-500 dark:stroke-primary" />
          </div>
          <Button className="py-3 px-5 w-fit">
            {t("button")}
          </Button>
        </form>

      </div>
    </div>
  )
}

export default ContactForm
