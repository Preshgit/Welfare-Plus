"use client"

import WhiteLogo from "@/assets/svg/wpLOGOpng 1.svg"
import DarkLogo from "@/assets/svg/LOGOoption1 1.svg"
import WhatsAppIcon from "@/assets/svg/whatsapp-color-svgrepo-com.svg"
import Image from "next/image"
import { useState } from "react"
import { useTranslations } from "next-intl"
import { Link, usePathname, useRouter } from "@/i18n/routing"
import { ModeToggle } from "./modeToggle"
import { Menu, X, MailIcon, MapPinIcon } from "lucide-react"
import { Button } from "./ui/button"
import LocaleSwitcher from "./localeSwitcher"
import { interTight } from "@/app/utils/fonts"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const router = useRouter()
  const t = useTranslations("Navbar")
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const isContactActive = pathname === "/contact-us"

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/about-us", label: t("about") },
    { href: "/europe", label: t("europe") },
    { href: "/sub-sahara-africa", label: t("africa") },
    { href: "/united-states", label: t("us") },
  ]

  return (
    <div className="w-screen flex sticky top-0 z-50 flex-col items-center bg-background text-foreground md:space-y-0 space-y-3">
      <div className={`${interTight.className} font-medium border-b w-screen flex items-center px-5 space-y-3 md:px-10`}>
        <div className="hidden md:flex w-full max-w-6xl mx-auto px-6 md:px-12 py-3 justify-between items-center">
          <ul className="flex justify-start text-sm text-foreground mx-auto">
            <li className="pr-4 flex items-center gap-x-3"><span><MailIcon size={16} className="stroke-primary" /></span>{t("email")}</li>
            <li className="px-4 border-l border-gray-300/40 flex items-center gap-x-3"><span><MapPinIcon size={16} className="stroke-primary" /></span>{t("address")}</li>
            <li className="pl-4 border-l border-gray-300/40 flex items-center gap-x-3"><span><WhatsAppIcon className="size-4" /></span>{t("phone")}</li>
          </ul>
          <LocaleSwitcher />
        </div>
        <div className="block md:hidden w-full">
          <ul className="mx-auto w-full space-y-3">
            <div className="grid grid-cols-2 border-b border-gray-300/10 py-2">
              <li className="pr-4 flex items-center gap-x-3 text-[14px]"><span><MailIcon size={16} className="stroke-primary " /></span>{t("email")}</li>
              <li className="px-4 border-l border-gray-300/10 flex items-center text-[13px] gap-x-3"><span><MapPinIcon size={16} className="stroke-primary" /></span>{t("address")}</li>
            </div>
            <div className="flex items-center justify-center pb-3">
              <li className="pl-4 text-[15px]  flex items-center gap-x-3"><span><WhatsAppIcon className="size-4" /></span>{t("phone")}</li>
            </div>
          </ul>
        </div>
      </div>
      <div className="border-b dark:bg-[#373435] w-full px-6 md:px-12 lg:px-25">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-1">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <WhiteLogo className="dark:hidden" />
            <DarkLogo className="hidden dark:block" />
          </Link>
          <ul className="hidden md:flex gap-x-5 items-center">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={isActive ? "font-bold text-primary" : "hover:text-primary transition-colors"}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="hidden md:flex items-center gap-3">
            <ModeToggle />
            <Button
              onClick={() => router.push("/contact-us")}
              variant="plain"
              className={`py-3 px-6 flex-1 shadow-none ${isContactActive
                ? "border-primary bg-primary text-white font-semibold hover:bg-primary"
                : "border text-foreground hover:bg-primary hover:text-white"
                }`}
            >
              {t("getInTouch")}
            </Button>
          </div>
          <div className="md:hidden flex items-center gap-2">
            <div className="md:hidden flex items-center gap-x-5">
              <LocaleSwitcher />
              <ModeToggle />
            </div>
            <button
              className="p-2 bg-primary text-white rounded-full transition-all active:scale-95 shadow-md"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden w-full border-b bg-background px-6 py-4 flex flex-col gap-4 overflow-hidden"
          >
            <ul className="flex flex-col gap-2 text-sm">
              {navLinks.map(({ href, label }) => {
                const isActive = pathname === href
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className={`block w-full px-4 py-2.5 rounded-none transition-all ${isActive ? "bg-primary text-white font-semibold" : "hover:bg-accent hover:text-primary"
                        }`}
                    >
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <div className="flex items-center gap-3">
              <Button
                onClick={() => {
                  router.push("/contact-us");
                  setMenuOpen(false);
                }}
                variant="plain"
                className={`py-3 px-6 flex-1 shadow-none ${isContactActive
                  ? "border-primary bg-primary text-white font-semibold hover:bg-primary"
                  : "border text-foreground hover:bg-primary hover:text-white"
                  }`}
              >
                {t("getInTouch")}
              </Button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar
