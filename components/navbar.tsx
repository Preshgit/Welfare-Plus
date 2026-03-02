"use client"

import Image from "next/image"
import { useState } from "react"
import { useTranslations } from "next-intl"
import { Link, usePathname } from "@/i18n/routing"
import { useTheme } from "next-themes"
import { Menu, X, Sun, Moon, MailIcon, MapPinIcon, PhoneOutgoingIcon } from "lucide-react"
import { Button } from "./ui/button"
import LocaleSwitcher from "./localeSwitcher"
import { interTight } from "@/app/utils/fonts"

const Navbar = () => {
  const t = useTranslations("Navbar")
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  const navLinks = [
    { href: "/home", label: t("home") },
    { href: "/about-us", label: t("about") },
    { href: "/europe", label: t("europe") },
    { href: "/sub-sahara-africa", label: t("africa") },
    { href: "/united-states", label: t("us") },
  ]

  return (
    <div className="w-screen flex flex-col items-center bg-background text-foreground">
      {/* Top info bar — hidden on mobile */}
      <div className={`${interTight.className} font-medium border-b w-screen `}>
        <div className="hidden md:flex w-fit max-w-6xl mx-auto px-6 md:px-12 py-3 justify-center items-center">
          <ul className="flex justify-start text-sm text-gray-500 w-full mx-auto">
            <li className="pr-4 flex items-center gap-x-3"><span><MailIcon size={16} className="stroke-primary" /></span>{t("email")}</li>
            <li className="px-4 border-l border-gray-300 flex items-center gap-x-3"><span><MapPinIcon size={16} className="stroke-primary" /></span>{t("address")}</li>
            <li className="pl-4 border-l border-gray-300 flex items-center gap-x-3"><span><PhoneOutgoingIcon size={16} className="stroke-primary" /></span>{t("phone")}</li>
          </ul>
        </div>
      </div>

      {/* Main nav row */}
      <div className="border-b w-full px-6 md:px-12 lg:px-25">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4">
          <Link href="/">
            <Image src="/Logo.png" height={70} width={140} alt="logo" />
          </Link>

          {/* Desktop nav links */}
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
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              <Sun size={18} className="hidden dark:block" />
              <Moon size={18} className="block dark:hidden" />
            </button>
            <Button variant="plain" className="border shadow-none py-3 px-6 text-foreground">{t("getInTouch")}</Button>
          </div>

          {/* Hamburger button — mobile only */}
          <div className="md:hidden flex items-center gap-2">
            <LocaleSwitcher />
            <button
              className="p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden w-full border-b bg-background px-6 py-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-3 text-sm">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={isActive ? "font-bold text-primary" : "hover:text-primary transition-colors"}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              <Sun size={18} className="hidden dark:block" />
              <Moon size={18} className="block dark:hidden" />
            </button>
            <Button variant="plain" className="border shadow-none py-3 px-6 flex-1">{t("getInTouch")}</Button>
          </div>
          <ul className="flex flex-col gap-1 text-xs text-gray-500 border-t pt-3">
            <li>{t("email")}</li>
            <li>{t("address")}</li>
            <li>{t("phone")}</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
