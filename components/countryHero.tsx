"use client";

import React from "react";
import HeadingTwo from "./ui/typography/headingTwo";
import { StaticImageData } from "next/image";
import Image from "next/image"

interface HubCardProps {
  title: string;
  description: string;
  imageUrl: StaticImageData;
  imageAlt?: string;
  locationLabel: string;
}

export default function HubCard({
  title,
  description,
  imageUrl,
  imageAlt = "Card image",
  locationLabel,
}: HubCardProps) {
  return (
    <section className="h-screen flex px-15 flex-col items-center justify-center p-8" style={{ backgroundImage: "url('/Line.png')" }}>
      <div className="relative w-full bg-transparent rounded-3xl shadow-xl p-6 border-2 h-150 bg-linear-to-r from-transparent to-primary/10">
        <div className="relative h-full w-full overflow-hidden" style={{ minHeight: "260px" }}>
          <div className="absolute top-14 h-fit left-0 w-[600px] bg-[#F58634] p-[60.2px] rounded-2xl z-10 flex flex-col justify-center rounded-tr-none rounded-br-[10%]">
            <HeadingTwo className="text-[50.1px]! text-white text-2xl font-bold leading-snug mb-3">
              {title}
            </HeadingTwo>
            <p className="text-white/80 text-base leading-relaxed">
              {description}
            </p>
          </div>
          <div className="absolute h-full inset-y-0 right-0 w-3/5 overflow-hidden">
            <Image
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
