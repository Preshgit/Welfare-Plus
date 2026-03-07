"use client"
import { Mail, Phone, MapPin } from "lucide-react"
import { satoshi } from "@/app/utils/fonts"
import { Button } from "./ui/button"
import StarOne from "@/assets/svg/Star_1.svg"

const contacts = [
  {
    icon: <Mail className="w-5 h-5 text-neutral-500" />,
    label: "Email",
    detail: "Office : welfare-plus@welfareplus.fi",
  },
  {
    icon: <Phone className="w-5 h-5 text-neutral-500" />,
    label: "Phone",
    detail: "Office : +254 904 632 4224",
  },
  {
    icon: <MapPin className="w-5 h-5 text-neutral-500" />,
    label: "Location",
    detail: "Kuopio, Finland Office",
  },
]

export default function ContactUs() {
  return (
    <section className={`${satoshi.className} bg-background py-20 px-6`}>
      <div className="gap-y-10">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center gap-4 mb-3">
            <StarOne className="text-primary " />
            <h2 className=" text-4xl font-semibold">Contact Us</h2>
            <StarOne className="text-primary " />
          </div>
          <p className="text-foreground text-[22px]">Contact us to Become part of the Impact.</p>
          <div className="flex items-center gap-5 mt-5">
            <a href="#" aria-label="X" className="text-primary hover:text-primary transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="text-primary hover:text-primary transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube" className="text-primary hover:text-primary transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.4 5 12 5 12 5s-4.4 0-7 .1c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.3.9C6.8 19 12 19 12 19s4.4 0 7-.1c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM9.7 14.5V9.3l5.5 2.6-5.5 2.6z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-5">
          {contacts.map(({ icon, label, detail }) => (
            <div
              key={label}
              className="rounded-2xl w-90 border border-gray-300 py-10 flex flex-col px-10 gap-6"
            >
              <div className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300">
                {icon}
              </div>
              <div>
                <p className="text-foreground font-semibold text-base mb-1">{label}</p>
                <p className="text-foreground text-[18px]">{detail}</p>
              </div>
              <div className="flex items-center gap-3 mt-1">
                <Button
                  variant="plain"
                  className="rounded-full shadow-none border-primary  text-primary text-base px-6 gap-6 py-3 h-auto font-medium hover:border-primary hover:text-primary transition-colors"
                >
                  Contact us
                </Button>
                <span className="text-foreground/40 text-base">*available 24 hrs</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
