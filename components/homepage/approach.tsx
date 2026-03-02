import { SparkleIcon, ArrowUpRightIcon, } from "lucide-react"
import { Button } from "../ui/button"
import HeadingTwo from "../ui/typography/headingTwo"
import Image from "next/image"
import Link from "next/link"
import { outfit } from "@/app/utils/fonts"
import kuopioFinland from "@/assets/images/kuopio-finland.png"
import subSaharanAfrica from "@/assets/images/sub-saharan-africa.png"
import northAmerica from "@/assets/images/north-america.png"

const locations = [
  {
    src: kuopioFinland,
    alt: "Kuopio, Finland",
    title: "Kuopio, Finland.",
    subtitle: "Europe.",
    href: "#",
  },
  {
    src: subSaharanAfrica,
    alt: "Sub-Saharan Africa",
    title: "Sub-Saharan Africa",
    subtitle: "Ikeja, Lagos in Nigeria.",
    href: "#",
  },
  {
    src: northAmerica,
    alt: "North America",
    title: "North America",
    subtitle: "The United States.",
    href: "#",
  },
];

const Approach = () => {
  return (
    <section className="bg-primary flex items-center text-foreground py-10">
      <div className="space-y-10 w-5/6 mx-auto pb-10">
        <div className="mx-auto flex flex-col justify-center items-center gap-y-10">
          <Button variant="plain" className={`${outfit.className} bg-white h-[55.73px] w-[137.69px] border-gray-200 pl-[5.96px] pr-[17.91px] py-[7.96px] shadow-none border rounded-full`}><SparkleIcon fill='black' className="w-[39.81px] h-[39.81px]" />Global Reach</Button>
          <HeadingTwo text="Our Global Approach" color="black" className="text-white!" />
          <p className="text-[28px] font-normal text-center">Using the Penta-Helix collaboration model, Welfare Plus promotes sustainable social development through partnerships that combine innovation, policy, and community engagement.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {locations.map((loc) => (
            <div key={loc.title} className="rounded-2xl overflow-hidden flex flex-col">
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden">
                <Image
                  src={loc.src}
                  alt={loc.alt}
                  height={280}
                  width={360}
                  className="object-cover"
                />
              </div>
              <div className="flex items-start justify-between gap-2 px-1 pt-3 pb-1">
                <div className='space-y-2'>
                  <p className="text-white font-bold text-base leading-snug">{loc.title}</p>
                  <p className="text-white/60 text-base font-medium">{loc.subtitle}</p>
                </div>
                <Link
                  href={loc.href}
                  className="flex items-center gap-1 text-white font-normal whitespace-nowrap mt-0.5 hover:underline text-sm"
                >
                  Learn More
                  <ArrowUpRightIcon className="stroke-2 font-medium text-[20px]" />

                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Approach
