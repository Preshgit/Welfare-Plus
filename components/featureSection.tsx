"use client"

import Image, { StaticImageData } from "next/image"
import { satoshi } from "@/app/utils/fonts"
import HeadingThree from "./ui/typography/headingThree"

interface FeatureSectionProps {
  title: string
  content: string
  image: StaticImageData | string
  alt?: string
}

export default function FeatureSection({
  title,
  content,
  image,
  alt = "feature image",
}: FeatureSectionProps) {
  return (
    <section className={`${satoshi.className} bg-background text-foreground py-8`} style={{ backgroundImage: "url('/Line.png')" }}>
      <div className="md:px-5">
        <div className="flex flex-col justify-center items-center gap-6.5 px-6 text-justify space-y-6">
          <div className="space-y-3 w-fit text-justify">
            <HeadingThree text={title} className={`${satoshi.className} text-justify! text-[32px] sm:text-[48px] lg:text-[64px]! font-light text-foreground`} />

            <div className="w-full h-[3px] bg-primary mx-auto rounded-full" />
          </div>
          <p
            className={`${satoshi.className} text-base sm:text-lg lg:text-[30px] text-foreground leading-relaxed mx-auto font-light`}
          >
            {content}
          </p>
        </div>

      </div>
      <div className="mt-16">
        <div className="relative w-full h-[450px] md:h-[550px]">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
