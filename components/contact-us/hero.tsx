"use client"

import Image, { StaticImageData } from "next/image"
import { motion } from "framer-motion"
import { satoshi } from "@/app/utils/fonts"
import { useTranslations } from "next-intl"
import { ArrowUpRight } from "lucide-react"
import { Button } from "../ui/button"
import StarOne from "@/assets/svg/star_one.svg"
import StarTwo from "@/assets/svg/star_two.svg"
import { useRouter } from "@/i18n/routing"

interface CTASectionProps {
  avatarTopLeft: StaticImageData
  avatarBottomLeft: StaticImageData
  avatarTopRight: StaticImageData
  avatarBottomRight: StaticImageData
}

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] as any }
  }
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.5 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }
  }
}



export default function CTASection({
  avatarTopLeft,
  avatarBottomLeft,
  avatarTopRight,
  avatarBottomRight,
}: CTASectionProps) {
  const router = useRouter()
  const t = useTranslations("ContactHero")
  return (
    <section className="relative bg-background text-foreground overflow-hidden min-h-[80vh] flex items-center" style={{
      backgroundImage: "url(/Line.png)",
      backgroundSize: "cover"
    }}>
      <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-25 py-24 md:py-32 w-full">
        <motion.div
          className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto space-y-10"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <motion.h2
            className={`${satoshi.className} font-medium text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-tight`}
            variants={fadeInUp}
          >
            {t("headingPre")} <br className="hidden sm:block" />{" "}
            <span className="text-primary">{t("headingHighlight")}</span>{" "}
            {t("headingPost")}
          </motion.h2>
          <motion.div variants={fadeInUp}>
            <Button onClick={() => router.push('/about-us')} className="rounded-full px-10 py-4 text-lg md:text-xl shadow-xl transition-all hover:scale-105 active:scale-95">
              {t("button")} <ArrowUpRight className="ml-2" size={30} />
            </Button>
          </motion.div>
        </motion.div>
        <div
          className="hidden lg:block absolute top-20 left-10 w-24 h-24 rounded-full overflow-hidden shadow-2xl border-4 border-background"
        >
          <Image src={avatarTopLeft} alt="avatar" fill className="object-cover" />
        </div>

        <div
          className="hidden lg:block absolute bottom-20 left-20 w-32 h-32 rounded-full overflow-hidden shadow-2xl border-4 border-background"
        >
          <Image src={avatarBottomLeft} alt="avatar" fill className="object-cover" />
        </div>

        <div
          className="absolute bottom-1/3 left-10 hidden lg:block text-primary drop-shadow-lg"
        >
          <StarOne className="w-12 h-12" />
        </div>

        <div
          className="hidden lg:block absolute top-24 right-10 w-28 h-28 rounded-full overflow-hidden shadow-2xl border-4 border-background"
        >
          <Image src={avatarTopRight} alt="avatar" fill className="object-cover" />
        </div>

        <div
          className="hidden lg:block absolute bottom-32 right-20 w-20 h-20 rounded-full overflow-hidden shadow-2xl border-4 border-background"
        >
          <Image src={avatarBottomRight} alt="avatar" fill className="object-cover" />
        </div>
        <motion.div
          className="hidden lg:block absolute right-0 top-56 text-primary drop-shadow-lg"
          variants={scaleIn}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.7 }}
        >
          <StarTwo className="w-16 h-16" />
        </motion.div>
      </div>
    </section>
  )
}
