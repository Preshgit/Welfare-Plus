"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRightIcon } from "lucide-react"

import HeadingTwo from "../ui/typography/headingTwo"
import { Button } from "../ui/button"
import { outfit } from "@/app/utils/fonts"

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

const images = [
  { src: WheelChair, alt: "Person using a wheelchair indoors" },
  { src: AssistiveSpoon, alt: "Adaptive spoon for assisted eating" },
  { src: HearingAid, alt: "Bluetooth hearing aid device" },
  { src: NeckBrace, alt: "Person wearing neck support brace while working" },
  { src: Walker, alt: "Elderly person walking with mobility aid" },
  { src: AssistiveBrush, alt: "Assistive grooming tool with ergonomic grip" },
  { src: ManHeadset, alt: "Man speaking with headset communication device" },
  { src: HandGrip, alt: "Hand rehabilitation grip device" },
  { src: Comb, alt: "Assistive wrist comb device" },
  { src: HandAssistant, alt: "Wearable glove assistive technology" },
  { src: FingerLaptop, alt: "Assistive typing tool on laptop keyboard" },
  { src: Meal, alt: "Adaptive support while preparing food" },
]

const Illustration = () => {
  return (
    <section className="bg-background py-16 space-y-12 dark:border-b dark:border-b-primary/40">
      <div className="w-4/5 mx-auto text-center space-y-4">
        <HeadingTwo
          text="Products & Services Illustration"
          className="text-[60px] text-foreground"
        />
        <p className="text-[22px] text-foreground">
          Assistive Chairs | Hearing Aids | Assistive Solutions | Mobility Aids | Support Systems
        </p>
      </div>

      <div className="w-full overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[383.33/291.67] overflow-hidden group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
                priority={index < 4}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex items-center justify-center pt-6">
        <Link href="/about-us">
          <Button
            variant="colored"
            size="md"
            className={`${outfit.className} h-12 bg-primary w-fit flex items-center gap-2`}
          >
            See More About Us
            <ArrowUpRightIcon className="w-5 h-5 stroke-2" />
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default Illustration
