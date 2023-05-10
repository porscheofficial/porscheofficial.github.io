"use client";

import { PHeading } from "@porsche-design-system/components-react/ssr";
import { ComponentProps } from "react";

export const Heading: React.FC<
  React.PropsWithChildren<ComponentProps<typeof PHeading>>
> = ({ children, ...props }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <PHeading {...props}>{children}</PHeading>;
};
