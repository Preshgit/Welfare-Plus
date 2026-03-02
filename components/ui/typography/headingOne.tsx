import React from "react";
import { HeadingProps } from "./headingTypes";
import { satoshi } from "@/app/utils/fonts";
import { cn } from "@/lib/utils";

const HeadingOne = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ text, color, weight, className, children, style, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        className={cn(
          satoshi.className,
          "text-[64px] sm:text-[80px] lg:text-[100px] tracking-[-0.06em] leading-tight",
          className
        )}
        style={{ color, fontWeight: weight || "600", ...style }}
        {...props}
      >
        {text || children}
      </h1>
    );
  }
);

HeadingOne.displayName = "HeadingOne";

export default HeadingOne;
