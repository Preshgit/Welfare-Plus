"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import HeadingOne from "../ui/typography/headingOne"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] as any }
  }
}

const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const Hero = () => {
  const t = useTranslations("EuropeHero")
  return (
    <motion.section
      className="relative w-full min-h-[60vh] flex flex-col items-center justify-center py-24 bg-background overflow-hidden"
      style={{ backgroundImage: "url('/Line.png')", backgroundSize: "cover" }}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="max-w-5xl px-6 text-center space-y-8 p-10 bg-red-500"
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <HeadingOne
            text={t("heading")}
            className="text-4xl md:text-6xl lg:text-[72px] leading-tight font-medium"
          />
        </motion.div>
        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-normal max-w-4xl mx-auto leading-relaxed"
        >
          {t("description")}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex justify-center pt-8"
        >
          {/* Potential CTA or decorative element can go here */}
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Hero
