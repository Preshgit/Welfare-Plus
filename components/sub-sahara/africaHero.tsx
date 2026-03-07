"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { satoshi } from "@/app/utils/fonts"
import HeadingOne from "../ui/typography/headingOne"
import ImageGalleryStrip from "./imageGallery"
import Hand from "@/assets/images/Frame 427321994.png"
import HandHeld from "@/assets/images/Frame 427321995.png"
import RoboticLegs from "@/assets/images/Frame 427321996.png"
import RoboticLeg from "@/assets/images/Frame 427321997_2.png"

const images = [
  {
    src: Hand,
    alt: "",
    tall: true
  },
  {
    src: HandHeld,
    alt: "",
    tall: false
  },
  {
    src: RoboticLegs,
    alt: "",
    tall: true
  },
  {
    src: RoboticLeg,
    alt: "",
    tall: false
  }]

const fadeInUp = {
  initial: { opacity: 0, y: 60, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1] as any
    }
  }
}

const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

const AfricaHero = () => {
  const t = useTranslations("AfricaHero")
  return (
    <motion.section
      className={`${satoshi.className} min-h-screen text-center bg-background text-foreground py-24 gap-12 flex flex-col items-center justify-center`}
      style={{ backgroundImage: "url('/Line.png')", backgroundSize: "cover" }}
      initial="initial"
      animate="animate"
    >
      <motion.div className="max-w-7xl w-full px-0 space-y-12" variants={staggerContainer}>
        <motion.div className="space-y-6" variants={fadeInUp}>
          <HeadingOne text={t("heading")} className="text-4xl md:text-6xl lg:text-[72px] leading-tight" />
          <motion.p className="text-lg md:text-xl lg:text-2xl font-normal text-muted-foreground max-w-full mx-auto leading-relaxed">
            {t("description")}
          </motion.p>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <ImageGalleryStrip images={images} />
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default AfricaHero
