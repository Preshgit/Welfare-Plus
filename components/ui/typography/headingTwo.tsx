import React from "react";
import { HeadingProps } from "./headingTypes";
import { satoshi } from "@/app/utils/fonts";
import { cn } from "@/lib/utils";

const HeadingTwo = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ text, color, weight, className, children, style, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        className={cn(
          satoshi.className,
          "text-[56px] text-foreground sm:text-[70px] lg:text-[88.57px] font-medium tracking-[-0.06em] leading-tight",
          className
        )}
        style={{ color, fontWeight: weight || "500", ...style }}
        {...props}
      >
        {text || children}
      </h2>
    );
  }
);

HeadingTwo.displayName = "HeadingTwo";

export default HeadingTwo;
