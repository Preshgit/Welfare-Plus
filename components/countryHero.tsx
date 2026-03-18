"use client";

import React from "react";
import { motion } from "framer-motion";
import HeadingTwo from "./ui/typography/headingTwo";
import { StaticImageData } from "next/image";
import Image from "next/image"

interface HubCardProps {
  title: string;
  description: string;
  address: string;
  imageUrl: StaticImageData;
  imageAlt?: string;
  locationLabel: string;
}

const slideInLeft = {
  initial: { opacity: 0, x: -100, filter: "blur(10px)" },
  animate: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] as any }
  }
}

const slideInRight = {
  initial: { opacity: 0, x: 100, filter: "blur(10px)" },
  animate: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] as any }
  }
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] as any }
  }
}

export default function HubCard({
  title,
  address,
  description,
  imageUrl,
  imageAlt = "Card image",
  locationLabel,
}: HubCardProps) {
  return (
    <motion.section
      className="h-screen flex px-6 md:px-15 flex-col items-center justify-center p-8"
      style={{ backgroundImage: "url('/Line.png')", backgroundSize: "cover" }}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="relative flex w-full bg-transparent rounded-3xl shadow-xl p-6 border-2 h-150 bg-linear-to-r from-transparent to-primary/10"
        variants={scaleIn}
      >
        <div className="relative flex flex-col h-full w-full overflow-hidden" style={{ minHeight: "260px" }}>
          <motion.div
            className="space-y-3 md:absolute top-14 h-fit left-0 w-full md:w-[600px] bg-[#F58634] p-8 md:p-[60.2px] rounded-2xl z-10 flex flex-col justify-center rounded-tr-none rounded-br-[10%]"
            variants={slideInLeft}
            transition={{ delay: 0.2 }}
          >
            <HeadingTwo className="text-[8px] md:text-[50.1px]! text-white text-2xl font-bold leading-snug mb-3">
              {title}
            </HeadingTwo>
            <p className="font-medium">{address}</p>
            <motion.p
              className="text-white lg:text-base leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              {description}
            </motion.p>
          </motion.div>
          <motion.div
            className="block md:absolute rounded-sm h-full md:inset-y-0 md:right-0 md:w-3/5 overflow-hidden"
            variants={slideInRight}
            transition={{ delay: 0.4 }}
          >
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
