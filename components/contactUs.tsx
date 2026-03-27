"use client"
import { Mail, Phone, MapPin } from "lucide-react"
import { satoshi } from "@/app/utils/fonts"
import StarOne from "@/assets/svg/Star_1.svg"
import { useTranslations } from "next-intl"
import { usePathname } from "@/i18n/routing"

export default function ContactUs() {
  const t = useTranslations("ContactUsSection")
  const pathname = usePathname()
  const sectionPrefix = pathname === "/sub-sahara-africa" ? "africa" : pathname === "/united-states" ? "us" : null
  const normalizeLineBreaks = (value: string) => value.replaceAll("\\n", "\n")
  const resolveDetail = (
    defaultKey: "emailDetail" | "phoneDetail" | "locationDetail",
    sectionKey: "africaEmail" | "africaPhone" | "africaAddress" | "usEmail" | "usPhone" | "usAddress",
  ) => {
    if (sectionPrefix && sectionKey.startsWith(sectionPrefix) && t.has(sectionKey)) {
      const sectionValue = normalizeLineBreaks(t(sectionKey)).trim()
      if (sectionValue.length > 0) {
        return sectionValue
      }
    }
    return normalizeLineBreaks(t(defaultKey))
  }

  const contacts = [
    {
      icon: <Mail className="w-5 h-5 text-neutral-500" />,
      label: t("emailLabel"),
      detail: resolveDetail("emailDetail", sectionPrefix === "us" ? "usEmail" : "africaEmail"),
      key: sectionPrefix === "us" ? "usEmail" : "africaEmail",
    },
    {
      icon: <Phone className="w-5 h-5 text-neutral-500" />,
      label: t("phoneLabel"),
      detail: resolveDetail("phoneDetail", sectionPrefix === "us" ? "usPhone" : "africaPhone"),
      key: sectionPrefix === "us" ? "usPhone" : "africaPhone",
    },
    {
      icon: <MapPin className="w-5 h-5 text-neutral-500" />,
      label: t("locationLabel"),
      detail: resolveDetail("locationDetail", sectionPrefix === "us" ? "usAddress" : "africaAddress"),
      key: sectionPrefix === "us" ? "usAddress" : "africaAddress",
    },
  ]

  return (
    <section className={`${satoshi.className} bg-background py-20 px-6`}>
      <div className="gap-y-10">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center gap-4 mb-3">
            <StarOne className="text-primary " />
            <h2 className=" text-4xl font-semibold">{t("heading")}</h2>
            <StarOne className="text-primary " />
          </div>
          <p className="text-foreground text-[20px] md:text-[22px]">{t("subtitle")}</p>
        </div>
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-5 px-2">
          {contacts.map(({ icon, label, detail, key }) => (
            <div
              key={label}
              className="rounded-2xl md:w-90 border border-gray-300 py-10 flex flex-col px-10 gap-6"
            >
              <div className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300">
                {icon}
              </div>
              <div>
                <p className="text-foreground font-semibold text-base mb-1">{label}</p>
                {detail.includes("<span") ? (
                  <p
                    className="whitespace-pre-line text-foreground text-sm md:text-[16px]"
                    dangerouslySetInnerHTML={{ __html: detail }}
                  />
                ) : (
                  <p className="whitespace-pre-line text-foreground text-sm md:text-[16px]">{detail}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
