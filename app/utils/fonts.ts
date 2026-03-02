import { Outfit, Inter_Tight } from "next/font/google";
import LocalFont from "next/font/local";

export const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const satoshi = LocalFont({
  src: [
    {
      path: "../../assets/fonts/Satoshi-Variable.ttf",
      weight: "300",
    },
    {
      path: "../../assets/fonts/Satoshi-Variable.ttf",
      weight: "400",
    },
    {
      path: "../../assets/fonts/Satoshi-Variable.ttf",
      weight: "500",
    },
    {
      path: "../../assets/fonts/Satoshi-Variable.ttf",
      weight: "600",
    },
    {
      path: "../../assets/fonts/Satoshi-Variable.ttf",
      weight: "700",
    },
    {
      path: "../../assets/fonts/Satoshi-Variable.ttf",
      weight: "800",
    },
    {
      path: "../../assets/fonts/Satoshi-Variable.ttf",
      weight: "900",
    },
  ],
});

export const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});
