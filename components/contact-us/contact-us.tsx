"use client"

import { satoshi, outfit } from "@/app/utils/fonts"

interface ContactSectionProps {
  title: string
  address: string
  email: string
  telephone: string
  whatsapp: string
}

export default function ContactSection({
  title,
  address,
  email,
  telephone,
  whatsapp,
}: ContactSectionProps) {
  return (
    <section className="w-full bg-background text-foreground">
      <div className="mx-auto max-w-[908.5px] px-6 md:px-12 lg:px-25 py-16 md:py-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-12 md:gap-4">
        <div className="border-l-2 border-primary pl-5 flex flex-col gap-4 md:basis-1/2 max-w-xl">
          <h2
            className={`${satoshi.className} font-light text-3xl md:text-4xl lg:text-[48px] leading-tight`}
          >
            {title}
          </h2>

          <p
            className={`${satoshi.className} text-lg md:text-xl lg:text-[24px] font-light leading-relaxed max-w-full md:w-101.75`}
          >
            <span className="font-medium">Address:</span> {address}
          </p>
        </div>
        <div
          className={`${satoshi.className} w-fit flex flex-col gap-3 text-left md:text-right md:basis-1/2`}
        >
          <p className="font-light">
            <span className="font-light text-base">Email:</span>{" "}
            <a
              href={`mailto:${email}`}
              className="hover:text-primary transition-colors"
            >
              {email}
            </a>
          </p>
          <p className="font-light">
            <span className="font-light text-base">Telephone:</span> {telephone}
          </p>
          <p className="font-light">
            <span className="font-light text-base">WhatsApp:</span> {whatsapp}
          </p>
        </div>
      </div>
    </section>
  )
}
