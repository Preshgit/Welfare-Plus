"use client"

import { FormEvent, useState } from "react"
import emailjs from "@emailjs/browser"
import Image from "next/image"
import MapImage from "@/assets/images/Map.png"
import MapImageDark from "@/assets/images/map_dark.png"
import { MailOpenIcon, MessageSquareText, UserIcon } from "lucide-react"
import { Button } from "../ui/button"
import { useTranslations } from "next-intl"

const ContactForm = () => {
  const t = useTranslations("ContactForm")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatusMessage("")

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error")
      setStatusMessage(t("validationError"))
      return
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error")
      setStatusMessage(t("configError"))
      return
    }

    setStatus("sending")

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name.trim(),
          from_email: email.trim(),
          message: message.trim(),
        },
        {
          publicKey,
        }
      )
      setStatus("success")
      setStatusMessage(t("success"))
      setName("")
      setEmail("")
      setMessage("")
    } catch {
      setStatus("error")
      setStatusMessage(t("error"))
    }
  }

  return (
    <div className="flex flex-col lg:flex-row w-full bg-background items-center py-10 gap-8 lg:gap-x-5 px-5" id="contactForm">
      <div className="relative hidden lg:block w-150 px-24 flex-shrink-0">
        <Image src={MapImage} alt="map" height={900} width={600} className="dark:hidden" />
        <Image src={MapImageDark} alt="map" height={900} width={600} className="hidden dark:block" />
      </div>
      <div className="space-y-5 flex flex-1 flex-col">
        <h3 className="font-medium! max-w-md text-[32px] sm:text-[48px] lg:text-[60px] leading-tight">{t("heading")} <span className='underline decoration-primary'>{t("headingHighlight")}</span> {t("headingPost")}</h3>
        <p className="text-base sm:text-lg lg:text-[22px] font-light text-foreground/80">{t("description")}</p>
        <form className="space-y-5 w-full" onSubmit={handleSubmit}>
          <div className="flex items-center justify-between border-2 rounded-2xl  py-3 px-3 relative">
            <input
              type="text"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder={t("namePlaceholder")}
              className=" w-full outline-none ring-0 focus:ring-0 focus:outline-none placeholder:text-gray-400"
            />
            <UserIcon className="dark:stroke-primary stroke-gray-500 " />
          </div>
          <div className="flex border-2 rounded-2xl justify-between items-baseline py-3 px-3">
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={t("emailPlaceholder")}
              className=" w-full outline-none ring-0 focus:ring-0 focus:outline-none placeholder:text-gray-400"
            />
            <MailOpenIcon className="stroke-gray-500 dark:stroke-primary" />
          </div>
          <div className="flex justify-between py-2 px-2 items-baseline relative border-2 rounded-2xl ">
            <textarea
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="w-full outline-none focus:ring-0 focus:outline-none placeholder:text-gray-400 resize-none"
              rows={5}
              placeholder={t("messagePlaceholder")}
            />
            <MessageSquareText className="top-5 stroke-gray-500 dark:stroke-primary" />
          </div>
          <Button type="submit" className="py-3 px-5 w-fit" disabled={status === "sending"}>
            {status === "sending" ? t("sending") : t("button")}
          </Button>
          {status !== "idle" && (
            <p aria-live="polite" className={status === "success" ? "text-green-600" : "text-red-600"}>
              {statusMessage}
            </p>
          )}
        </form>

      </div>
    </div>
  )
}

export default ContactForm
