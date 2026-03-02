"use client"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { satoshi } from "@/app/utils/fonts"
import { Button } from "../ui/button"
import AssistiveHand from "@/assets/images/assisted_simulation.png"
import ManWheelChair from "@/assets/images/man_on_wheelchair.png"
import StarOne from "@/assets/svg/star_one.svg"
import StarTwo from "@/assets/svg/star_two.svg"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-10 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6 w-full max-w-xl">
          <h1
            className={`${satoshi.className} text-foreground text-[52px] font-bold leading-tight`}
          >
            We&apos;re Scaling International{" "}
            <span className="text-primary">Social Welfare</span>{" "}
            through Research & Social Work.
          </h1>
          <p
            className={`${satoshi.className} text-foreground text-base leading-relaxed max-w-sm`}
          >
            Welfare Plus is an internationally oriented social welfare
            organization delivering research, social programs, and assistive
            solutions across diverse social and regulatory environments.
          </p>
          <Button className="rounded-full px-6 py-3 text-sm font-medium flex items-center gap-2">
            <Link href="/contact-us">
              Get In Touch with Us <ArrowUpRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
        <div className="relative flex items-end justify-center gap-4 h-[420px]">
          <div className="relative w-[190px] h-[380px] rounded-[120px] overflow-hidden flex-shrink-0 self-start mt-4">
            <Image
              src={ManWheelChair}
              alt="Man on wheelchair"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute left-[165px] bottom-[90px] z-10 text-primary">
            <StarTwo />
          </div>
          <div className="relative w-[190px] h-[300px] rounded-[120px] overflow-hidden flex-shrink-0 self-end mb-4">
            <Image
              src={AssistiveHand}
              alt="Assistive therapy"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute top-4 right-4 text-primary">
            <StarOne />
          </div>
        </div>
      </div>
    </section>
  )
}
