"use client"

import Image, { StaticImageData } from "next/image"
import { satoshi } from "@/app/utils/fonts"

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
    <section className={`${satoshi.className} bg-background text-foreground py-24`} style={{ backgroundImage: "url('/Line.png')" }}>
      <div className="px-15">
        <div className="flex flex-col justify-center items-center gap-6.5 px-6 text-center space-y-6">
          <div className="space-y-3 w-fit text-center">
            <h2
              className={`${satoshi.className} text-center! text-3xl md:text-4xl font-light text-foreground`}
            >
              {title}
            </h2>
            <div className="w-full h-[3px] bg-primary mx-auto rounded-full" />
          </div>
          <p
            className={`${satoshi.className} text-[30px] text-foreground text-lg leading-relaxed mx-auto`}
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
