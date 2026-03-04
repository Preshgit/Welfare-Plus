"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { satoshi } from "@/app/utils/fonts"
import { Button } from "../ui/button"
import AssistiveHand from "@/assets/images/assisted_simulation.png"
import ManWheelChair from "@/assets/images/man_on_wheelchair.png"
import StarOne from "@/assets/svg/star_one.svg"
import StarTwo from "@/assets/svg/star_two.svg"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }
}

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] as any }
}

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] as any }
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.85 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }
}

export default function Hero() {
  return (
    <section className="relative bg-background overflow-hidden min-h-[90vh] flex items-center">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-24 flex flex-col md:flex-row gap-16 items-center">
        <motion.div
          className="space-y-8 w-full md:w-1/2"
          initial="initial"
          animate="animate"
          variants={fadeInLeft}
        >
          <motion.h1
            className={`${satoshi.className} text-foreground text-4xl md:text-5xl lg:text-7xl font-medium leading-tight`}
            variants={fadeInUp}
          >
            We&apos;re Scaling International{" "}
            <span className="text-primary">Social Welfare</span>{" "}
            through Research & Social Work.
          </motion.h1>
          <motion.p
            className={`${satoshi.className} text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl`}
            variants={fadeInUp}
          >
            Welfare Plus is an internationally oriented social welfare
            organization delivering research, social programs, and assistive
            solutions across diverse social and regulatory environments.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button className="rounded-full px-8 py-6 text-base font-medium flex items-center gap-2 shadow-lg transition-all hover:scale-105 active:scale-95">
              <Link href="/contact-us">
                Get In Touch with Us
              </Link><ArrowUpRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="relative flex items-center justify-center gap-6 w-full md:w-1/2 h-[500px]"
          initial="initial"
          animate="animate"
          variants={fadeInRight}
        >
          <motion.div
            className="relative w-1/2 h-[450px] rounded-[100px] overflow-hidden shadow-2xl"
            variants={scaleIn}
            transition={{ delay: 0.2, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={ManWheelChair}
              alt="Man on wheelchair"
              fill
              className="object-cover"
            />
          </motion.div>
          
          <motion.div
            className="absolute left-[40%] top-[60%] z-10 text-primary drop-shadow-lg"
            variants={scaleIn}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <StarTwo className="w-12 h-12" />
          </motion.div>
          
          <motion.div
            className="relative w-[180px] h-[320px] rounded-[90px] overflow-hidden self-end mb-8 shadow-2xl"
            variants={scaleIn}
            transition={{ delay: 0.4, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={AssistiveHand}
              alt="Assistive therapy"
              fill
              className="object-cover"
            />
          </motion.div>
          
          <motion.div
            className="absolute top-10 right-10 text-primary drop-shadow-lg"
            variants={scaleIn}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <StarOne className="w-16 h-16" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
