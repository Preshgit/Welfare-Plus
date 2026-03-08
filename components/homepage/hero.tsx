"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslations } from "next-intl"
import { Button } from "../ui/button"
import { interTight, outfit, satoshi } from "@/app/utils/fonts"
import { ArrowUpRight } from "lucide-react"

const slideTransition = {
  duration: 1.2,
  ease: [0.22, 1, 0.36, 1] as any
}

const SlideOne = ({ title, subtitle, cta }: { title: string; subtitle: string; cta: string }) => {
  const t = useTranslations("Homepage.hero")
  return (
    <div className={`relative w-full h-full flex items-center justify-center overflow-hidden ${satoshi.className}`}>
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/hero(2).png"
          alt="Slide One Background"
          fill
          priority
          className="object-cover brightness-50"
        />
      </motion.div>
      <div className="relative z-10 sm:space-y-5 max-w-6xl w-full gap-4.5 text-white text-left">
        <div className="space-y-8 px-3">
          <div className="px-3">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...slideTransition, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-[60px] font-medium leading-tight mb-6"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...slideTransition, delay: 0.2 }}
              className="text-lg md:text-xl lg:text-xl font-light max-w-3xl mb-10 text-white/90"
            >
              {subtitle}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...slideTransition, delay: 0.3 }}
            className="px-5"
          >
            <Button size="lg" className="w-full md:w-fit bg-primary hover:bg-primary/90 text-white px-8 py-7 text-lg rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95">
              {cta}
              <ArrowUpRight className="stroke-2 ml-2" size={24} />
            </Button>
          </motion.div>
        </div>
        <div className="flex sm:mt-8 flex-col ml-auto px-3 md:px-0 w-fit space-y-3">
          <p><i>{t("quote1")}</i></p>
          <p><i>{t("quote2")}</i></p>
        </div>
      </div>
    </div>
  )
}

const SlideTwo = ({ title, subtitle, cta }: { title: string; subtitle: string; cta: string }) => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
    <motion.div
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0"
    >
      <Image
        src="/hero-3(2).png"
        alt="Slide Two Background"
        fill
        className="object-cover brightness-50"
      />
    </motion.div>
    <div className="relative z-10 text-center text-white px-8 max-w-6xl">
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={slideTransition}
        className={`${interTight.className} text-4xl md:text-6xl lg:text-[60px] font-normal leading-tight mb-6`}
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ...slideTransition, delay: 0.2 }}
        className={`${interTight.className} text-lg md:text-xl lg:text-2xl font-light mb-10 text-white/90`}
      >
        {subtitle}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...slideTransition, delay: 0.3 }}
      >
        <Button size="lg" className="border-white text-white hover:bg-white hover:text-black px-8 py-7 text-lg rounded-full shadow-lg transition-all hover:scale-105">
          {cta}
          <ArrowUpRight className="ml-2" />
        </Button>
      </motion.div>
    </div>
  </div>
)

const SlideThree = ({ title, subtitle, cta }: { title: string; subtitle: string; cta: string }) => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
    <motion.div
      initial={{ scale: 1.2 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0"
    >
      <Image
        src="/hero-2(1).png"
        alt="Slide Three Background"
        fill
        className="object-cover brightness-50"
      />
    </motion.div>
    <div className="relative z-10 text-center text-white px-8 max-w-6xl">
      <motion.h1
        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={slideTransition}
        className={` ${interTight.className} text-2xl md:text-7xl lg:text-[60px] font-normal leading-tight mb-6`}
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...slideTransition, delay: 0.3 }}
        className={`text-lg md:text-xl lg:text-2xl font-light mb-10 text-white/90 ${interTight.className}`}
      >
        {subtitle}
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ...slideTransition, delay: 0.4 }}
      >
        <Button size="lg" className=" px-8 py-7 text-lg rounded-full shadow-lg transition-all hover:scale-105">
          {cta}
          <ArrowUpRight className="ml-2" />
        </Button>
      </motion.div>
    </div>
  </div>
)

const Hero = () => {
  const t = useTranslations("Homepage.hero")
  const [current, setCurrent] = useState(0)
  const slidesCount = 3

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slidesCount)
    }, 6000000)
    return () => clearInterval(timer)
  }, [])

  const slideComponents = [SlideOne, SlideTwo, SlideThree]
  const CurrentSlide = slideComponents[current]

  const slideData = [
    { title: t("slides.0.title"), subtitle: t("slides.0.subtitle"), cta: t("slides.0.cta") },
    { title: t("slides.1.title"), subtitle: t("slides.1.subtitle"), cta: t("slides.1.cta") },
    { title: t("slides.2.title"), subtitle: t("slides.2.subtitle"), cta: t("slides.2.cta") },
  ]

  return (
    <section className="relative h-screen w-full overflow-hidden space-y-5 bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full"
        >
          <CurrentSlide {...slideData[current]} />
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-16 z-20 flex gap-4">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ease-out ${current === i ? "bg-primary w-12" : "bg-white/30 w-6 hover:bg-white/50"
              }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
