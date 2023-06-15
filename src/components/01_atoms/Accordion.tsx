"use client";

import { PAccordion } from "@porsche-design-system/components-react/ssr";
import { ComponentProps } from "react";

export const Accordion: React.FC<
  React.PropsWithChildren<ComponentProps<typeof PAccordion>>
> = ({ children, ...props }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <PAccordion {...props}>{children}</PAccordion>;
};
