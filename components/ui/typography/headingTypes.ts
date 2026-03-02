import React from "react";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text?: string;
  color?: string;
  weight?: string | number;
}
