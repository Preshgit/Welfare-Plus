import Image from "next/image"
import MapImage from "@/assets/images/Map.png"
import { MailOpenIcon, MessageSquareText, UserIcon } from "lucide-react"
import { Button } from "../ui/button"
import { useTranslations } from "next-intl"

const ContactForm = () => {
  const t = useTranslations("ContactForm")
  return (
    <div className="flex flex-col lg:flex-row bg-background items-center py-10 gap-8 lg:gap-x-5 px-5">
      <div className="relative hidden lg:block w-150 flex-shrink-0">
        <Image src={MapImage} alt="map" height={600} width={600} />
      </div>
      <div className="space-y-5 flex flex-1 flex-col">
        <h3 className="font-medium! max-w-md text-2xl sm:text-3xl lg:text-[65px]">{t("heading")} <span className='underline decoration-primary'>{t("headingHighlight")}</span> {t("headingPost")}</h3>
        <form className="space-y-5 divide-y w-full justify-self-end">
          <div className="flex items-center justify-between py-3 px-3 relative">
            <input type="text" placeholder={t("namePlaceholder")} className="w-full pl-10 py-2 border-none outline-none ring-0 focus:ring-0 focus:outline-none placeholder:text-gray-400" />
            <UserIcon className="dark:stroke-primary stroke-gray-500 absolute" />
          </div>
          <div className="flex items-center justify-between py-3 px-3">
            <input type="email" placeholder={t("emailPlaceholder")} className="w-full pl-10 py-2 border-none outline-none ring-0 focus:ring-0 focus:outline-none placeholder:text-gray-400" />
            <MailOpenIcon className="stroke-gray-500 dark:stroke-primary absolute" />
          </div>
          <div className="flex  justify-between py-3 px-3 relative">
            <textarea className="w-full pl-10 py-2 border-none outline-none ring-0 focus:ring-0 focus:outline-none placeholder:text-gray-400 resize-none" rows={8} placeholder={t("messagePlaceholder")} />
            <MessageSquareText className="top-5 stroke-gray-500 dark:stroke-primary absolute" />
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
