"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslations } from "next-intl"
import { Button } from "../ui/button"
import { interTight, outfit, satoshi } from "@/app/utils/fonts"
import { ArrowUpRight } from "lucide-react"

const SlideOne = ({ title, subtitle, cta }: { title: string; subtitle: string; cta: string }) => (
  <div className={`relative w-full h-full  items-center justify-center overflow-hidden ${satoshi.className}`}>
    <Image
      src="/hero(2).png"
      alt="Slide One Background"
      fill
      priority
      className="object-cover brightness-50"
    />
    <div className="relative z-10 max-w-6xl py-28 px-16 gap-4.5 text-white px-6 text-left">
      <div>
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={` text-[60px] font-medium  mb-6`}
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-regular mb-10 "
          >
            {subtitle}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >

          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full">
            {cta}
            <ArrowUpRight className="stroke-2" size={24} />
          </Button>
        </motion.div>
      </div>
    </div>
    <div>
      <p className="left-0 text-white">“You may need social work at any time in the life cycle.” – Social Work England
        “The basis of social work lies in deficiencies in social systems.” – Paul Tillich</p>
    </div>

  </div>
)

const SlideTwo = ({ title, subtitle, cta }: { title: string; subtitle: string; cta: string }) => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
    <Image
      src="/hero-3(2).png"
      alt="Slide Two Background"
      fill
      className="object-cover brightness-50"
    />
    <div className="relative z-10 text-center text-white px-6 max-w-6xl">
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className={`${interTight.className} text-5xl md:text-6xl font-normal mb-6`}
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`${interTight.className} text-xl md:text-2xl font-light mb-10`}
      >
        {subtitle}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Button variant="primary" size="lg" className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-full">
          {cta}
          <ArrowUpRight />
        </Button>
      </motion.div>
    </div>
  </div>
)

const SlideThree = ({ title, subtitle, cta }: { title: string; subtitle: string; cta: string }) => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
    <Image
      src="/hero-2(1).png"
      alt="Slide Three Background"
      fill
      className="object-cover brightness-50"
    />
    <div className="relative z-10 text-center text-white px-6 max-w-6xl">
      <motion.h1
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className={` ${interTight.className} text-6xl md:text-7xl font-normal mb-6`}
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, opacity: 0 }}
        animate={{ opacity: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className={`text-xl md:text-2xl font-light mb-10 ${interTight.className}`}
      >
        {subtitle}
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Button size="lg" className="text-white   px-8 py-6 text-lg rounded-full">
          {cta}
          <ArrowUpRight />
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
    }, 6000)
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
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full h-full"
        >
          <CurrentSlide {...slideData[current]} />
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-10 right-10 z-20 flex gap-3">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${current === i ? "bg-primary w-8" : "bg-white/40"
              }`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
