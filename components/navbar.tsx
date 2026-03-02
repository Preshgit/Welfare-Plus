"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "./ui/button"

const navLinks = [
  { href: "/home", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/europe", label: "Europe" },
  { href: "/sub-sahara-africa", label: "Sub-Sahara Africa" },
  { href: "/united-states", label: "US" },
]

const Navbar = () => {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

  return (
    <div className="w-screen flex flex-col items-center bg-background text-foreground">
      {/* Top info bar — hidden on mobile */}
      <div className="border-b w-screen">
        <div className="hidden md:flex w-full max-w-6xl mx-auto px-6 md:px-12 py-3 ">
          <ul className="flex justify-center text-sm text-gray-500 w-full">
            <li className="pr-4">info@welfareplus.com</li>
            <li className="px-4 border-l border-gray-300">Ikeja, Lagos, Nigeria</li>
            <li className="pl-4 border-l border-gray-300">+234 9023-6129-26</li>
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
            <Button variant="plain" className="border shadow-none py-3 px-6 text-foreground">Get In Touch</Button>
          </div>

          {/* Hamburger button — mobile only */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
            <Button variant="plain" className="border shadow-none py-3 px-6 flex-1">Get In Touch</Button>
          </div>
          <ul className="flex flex-col gap-1 text-xs text-gray-500 border-t pt-3">
            <li>info@welfareplus.com</li>
            <li>Ikeja, Lagos, Nigeria</li>
            <li>+234 9023-6129-26</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
