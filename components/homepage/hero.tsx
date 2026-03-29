"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslations } from "next-intl"
import { Button } from "../ui/button"
import { satoshi } from "@/app/utils/fonts"
import { ArrowUpRight } from "lucide-react"
import { useRouter } from "@/i18n/routing"
import HeadingOne from "../ui/typography/headingOne"

const slideTransition = {
  duration: 1.2,
  ease: [0.22, 1, 0.36, 1] as any
}

const slides = [
  { src: "/hero.png", alt: "Slide One Background" },
  { src: "/hero-3(2).jpg", alt: "Slide Two Background" },
  { src: "/hero2.png", alt: "Slide Three Background" },
]

const Hero = () => {
  const router = useRouter()
  const t = useTranslations("Homepage.hero")
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative space-y-5 min-h-screen w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].src}
              alt={slides[current].alt}
              fill
              priority={current === 0}
              className="object-cover brightness-50"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <div className={`relative z-10 w-full h-full flex items-center justify-center overflow-hidden ${satoshi.className}`}>
        <div className="sm:space-y-0 max-w-6xl w-full gap-4.5 text-white text-left pb-24 md:pb-0 md:mt-20">
          <div className="space-y-3 px-3">
            <div className="px-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...slideTransition, delay: 0.1 }}
                className="mb-6"
              >
                <HeadingOne text={t("slides.0.title")} className="text-white! text-4xl! sm:text-6xl! lg:text-[70px]!" />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...slideTransition, delay: 0.2 }}
                className="text-base sm:text-lg lg:text-xl font-light max-w-3xl mb-10 text-white/90"
              >
                {t("slides.0.subtitle")}
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...slideTransition, delay: 0.3 }}
              className="px-5"
            >
              <Button size="lg" onClick={() => router.push("/about-us")} className="w-full md:w-fit bg-primary hover:bg-primary/90 text-white px-8 py-7 text-lg rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95">
                {t("slides.0.cta")}
                <ArrowUpRight className="stroke-2 ml-2" size={24} />
              </Button>
            </motion.div>
          </div>
          <div className="text-right! flex sm:mt-8 flex-col ml-auto px-3 md:px-0 w-fit space-y-0 text-sm sm:text-base lg:text-lg font-light opacity-90">
            <p><i>{t("quote1")}</i></p>
            <p><i>{t("quote2")}</i></p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-16 z-20 flex gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ease-out ${current === i ? "bg-primary w-12" : "bg-white/30 w-6 hover:bg-white/50"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
