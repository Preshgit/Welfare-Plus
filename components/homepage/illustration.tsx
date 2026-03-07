"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRightIcon } from "lucide-react"

import HeadingTwo from "../ui/typography/headingTwo"
import { Button } from "../ui/button"
import { outfit } from "@/app/utils/fonts"
import { useTranslations } from "next-intl"

import WheelChair from "@/assets/images/wheelchair.png"
import AssistiveSpoon from "@/assets/images/assistiveSpoon.png"
import HearingAid from "@/assets/images/hearingAid.png"
import NeckBrace from "@/assets/images/neckbrace.png"
import Walker from "@/assets/images/walker.png"
import AssistiveBrush from "@/assets/images/assistiveBrush.png"
import ManHeadset from "@/assets/images/manHeadset.png"
import HandGrip from "@/assets/images/handGrip.png"
import Comb from "@/assets/images/comb.png"
import FingerLaptop from "@/assets/images/fingerLaptop.png"
import HandAssistant from "@/assets/images/handAssistant.png"
import Meal from "@/assets/images/meal.png"

const row1 = [
  { src: WheelChair, alt: "Person using a wheelchair indoors" },
  { src: AssistiveSpoon, alt: "Adaptive spoon for assisted eating" },
  { src: HearingAid, alt: "Bluetooth hearing aid device" },
  { src: NeckBrace, alt: "Person wearing neck support brace while working" },
]

const row2 = [
  { src: Walker, alt: "Elderly person walking with mobility aid" },
  { src: AssistiveBrush, alt: "Assistive grooming tool with ergonomic grip" },
  { src: ManHeadset, alt: "Man speaking with headset communication device" },
  { src: HandGrip, alt: "Hand rehabilitation grip device" },
]

const row3 = [
  { src: Comb, alt: "Assistive wrist comb device" },
  { src: HandAssistant, alt: "Wearable glove assistive technology" },
  { src: FingerLaptop, alt: "Assistive typing tool on laptop keyboard" },
  { src: Meal, alt: "Adaptive support while preparing food" },
]

type MarqueeRowProps = {
  items: { src: any; alt: string }[]
  direction: "left" | "right"
  speed?: number
}

const MarqueeRow = ({ items, direction, speed = 30 }: MarqueeRowProps) => {
  const doubled = [...items, ...items, ...items]
  const animStyle =
    direction === "left"
      ? { animation: `marquee-left ${speed}s linear infinite` }
      : { animation: `marquee-right ${speed}s linear infinite` }

  return (
    <div className="w-full overflow-hidden">
      <div className="flex gap-1" style={animStyle}>
        {doubled.map((image, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 w-[383px] h-[291px] overflow-hidden group"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="383px"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

const Illustration = () => {
  const t = useTranslations("Homepage.illustration")
  return (
    <section className="bg-background py-16 space-y-12 dark:border-b dark:border-b-primary/40">
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="w-4/5 mx-auto text-center space-y-4">
        <HeadingTwo
          text={t("heading")}
          className="text-[60px] text-foreground"
        />
        <p className="text-[22px] text-foreground">
          {t("description")}
        </p>
      </div>

      <div className="w-full space-y-1 overflow-hidden">
        <MarqueeRow items={row1} direction="left" speed={25} />
        <MarqueeRow items={row2} direction="right" speed={30} />
        <MarqueeRow items={row3} direction="left" speed={28} />
      </div>

      <div className="w-full flex items-center justify-center pt-6">
        <Link href="/about-us">
          <Button
            variant="colored"
            size="md"
            className={`${outfit.className} h-12 bg-primary w-fit flex items-center gap-2`}
          >
            {t("button")}
            <ArrowUpRightIcon className="w-5 h-5 stroke-2" />
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default Illustration
