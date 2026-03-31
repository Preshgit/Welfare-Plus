"use client"
import { ArrowRightIcon } from "lucide-react"
import { motion, type Variants } from "framer-motion"
import type { ReactNode } from "react"
import { Button } from "./ui/button"
import HeadingThree from "./ui/typography/headingThree"
import { useRouter } from "@/i18n/routing"
import { outfit, satoshi } from "@/app/utils/fonts"

type ImpactTextItem = { text: string };
type ImpactServiceItem = { id?: string; title: string; description: string };
type ImpactContent = string | Array<ImpactTextItem | ImpactServiceItem>;

const isServiceItem = (item: ImpactTextItem | ImpactServiceItem): item is ImpactServiceItem =>
  "title" in item && "description" in item;

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const popInItem: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.38, ease: "easeOut" },
  },
};

const normalizePartnershipText = (text: string) => text.replace(/\\n/g, "\n");

const getSafeHref = (href: string): string | null => {
  const trimmedHref = href.trim();

  if (!trimmedHref) return null;
  if (trimmedHref.startsWith("/")) return trimmedHref;

  const hasScheme = /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(trimmedHref);
  const normalizedHref = hasScheme ? trimmedHref : `https://${trimmedHref}`;

  try {
    const protocol = new URL(normalizedHref).protocol.toLowerCase();
    if (protocol === "http:" || protocol === "https:" || protocol === "mailto:" || protocol === "tel:") {
      return normalizedHref;
    }
  } catch {
    return null;
  }

  return null;
};

const renderPartnershipText = (text: string): ReactNode[] => {
  const lines = normalizePartnershipText(text).split("\n");
  const renderedNodes: ReactNode[] = [];

  lines.forEach((line, lineIndex) => {
    let currentIndex = 0;

    for (const match of line.matchAll(/<a\s+([^>]*?)>(.*?)<\/a>/gi)) {
      const [fullTag, attributes = "", anchorText = ""] = match;
      const matchIndex = match.index ?? 0;

      if (matchIndex > currentIndex) {
        renderedNodes.push(line.slice(currentIndex, matchIndex));
      }

      const hrefMatch = attributes.match(/href\s*=\s*(['"])(.*?)\1/i);
      const safeHref = hrefMatch ? getSafeHref(hrefMatch[2]) : null;

      if (safeHref) {
        renderedNodes.push(
          <a
            key={`partnership-link-${lineIndex}-${matchIndex}`}
            href={safeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 font-medium"
          >
            {anchorText}
          </a>
        );
      } else {
        renderedNodes.push(anchorText);
      }

      currentIndex = matchIndex + fullTag.length;
    }

    if (currentIndex < line.length) {
      renderedNodes.push(line.slice(currentIndex));
    }

    if (lineIndex < lines.length - 1) {
      renderedNodes.push(<br key={`partnership-break-${lineIndex}`} />);
    }
  });

  return renderedNodes;
};

const Impacts = ({ text, content, btnText, partnershipsText }: { text: string, content: ImpactContent, btnText: string, partnershipsText: string }) => {
  const isArray = Array.isArray(content);
  const hasServiceShape = isArray && content.some(isServiceItem);
  const isList = typeof content === 'string' && content.includes('|');
  const router = useRouter()

  return (
    <section className="py-14 w-screen bg-linear-to-b font-medium px-6 md:px-25 dark:bg-background flex items-center justify-center">
      <div className="space-y-10 text-center mx-auto">

        <div className="space-y-5 pt-5">
          {content?.length > 0 && <HeadingThree text={text} className="text-primary!" />}
          {hasServiceShape ? (
            <motion.ul
              className="grid grid-cols-1 md:grid-cols-2 font-dm-sans py-5"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {(content as Array<ImpactTextItem | ImpactServiceItem>).filter(isServiceItem).map(({ title, id, description }, index, services) => (
                <motion.li
                  key={id ?? `${title}-${index}`}
                  variants={popInItem}
                  className={`p-2 border-sidebar-border space-y-3 border-dashed ${index % 2 === 0 ? "md:border-r md:border-r-gray-200/40" : ""} ${index < services.length - 2 ? "md:border-b border-gray-100" : ""}`}
                >
                  <h4 className="text-left text-[20px] sm:text-[28px] uppercase font-medium leading-[115.5%]">
                    {title}
                  </h4>
                  <p className="font-outfit text-justify text-[18px] sm:text-[22px] font-light text-gray-500 leading-relaxed">
                    {description}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          ) : isArray ? (
            <motion.ul
              className="space-y-3 w-fit mx-auto text-left"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {(content as Array<ImpactTextItem | ImpactServiceItem>).map((item, index) => (
                <motion.li key={index} variants={popInItem} className="flex items-start gap-3">
                  <span className="mt-[14px] md:mt-[22px] h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />
                  <p className={`text-[24px] md:text-[30px] text-foreground font-light ${outfit.className} text-justify`}>
                    {"text" in item ? item.text : `${item.title}: ${item.description}`}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          ) : isList ? (
            <motion.ul
              className="space-y-3 w-fit mx-auto text-left"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {(content as string).split('|').map((item, index) => (
                <motion.li key={index} variants={popInItem} className="flex items-start gap-3">
                  <span className="mt-[14px] md:md:mt-[22px] h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />
                  <p className={`text-[24px] md:text-[30px] text-foreground font-light ${outfit.className} text-justify`}>
                    {item.trim()}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {(content as string).split("\n").map((word, index) => (
                <motion.p key={index} variants={popInItem} className={`text-[24px] md:text-[30px] text-foreground font-light ${outfit.className}`}>
                  {word}
                </motion.p>
              ))}
            </motion.div>
          )}
        </div>
        <div className="space-y-5">
          <HeadingThree text={"Partnerships"} className="text-primary!" />
          <p
            className={`${satoshi.className} text-justify text-base sm:text-lg md:text-xl lg:text-[30px] text-foreground leading-relaxed mx-auto font-light`}
          >
            {renderPartnershipText(partnershipsText)}
          </p>
          <Button onClick={() => router.push("/contact-us/#contactForm")} variant="primary" className="gap-[10.95px] md:w-fit w-full py-[14.6px] pl-[19.47px] pr-[15.82px]">
            {btnText}
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Impacts
