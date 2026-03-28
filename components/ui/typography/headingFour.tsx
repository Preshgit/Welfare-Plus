import React from "react";
import { HeadingProps } from "./headingTypes";
import { satoshi } from "@/app/utils/fonts";
import { cn } from "@/lib/utils";

const HeadingFour = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ text, color, weight, className, children, style, ...props }, ref) => {
    return (
      <h4
        ref={ref}
        className={cn(
          satoshi.className,
          "text-[28px] sm:text-[40px] lg:text-[60px] tracking-[-0.06em] leading-[108%]",
          className
        )}
        style={{ color, fontWeight: weight || "400", ...style }}
        {...props}
      >
        {text || children}
      </h4>
    );
  }
);

HeadingFour.displayName = "HeadingFour";

export default HeadingFour;
