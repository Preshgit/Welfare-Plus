import React from "react";
import { HeadingProps } from "./headingTypes";
import { satoshi } from "@/app/utils/fonts";
import { cn } from "@/lib/utils";

const HeadingThree = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ text, color, weight, className, children, style, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn(
          satoshi.className,
          "text-[32px] sm:text-[48px] lg:text-[64px] tracking-[-0.06em] leading-[108%]",
          className
        )}
        style={{ color, fontWeight: weight || "400", ...style }}
        {...props}
      >
        {text || children}
      </h3>
    );
  }
);

HeadingThree.displayName = "HeadingThree";

export default HeadingThree;
