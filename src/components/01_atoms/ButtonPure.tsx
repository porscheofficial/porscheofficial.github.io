"use client";

import { PButtonPure } from "@porsche-design-system/components-react/ssr";
import { ComponentProps } from "react";

export const ButtonPure: React.FC<
  React.PropsWithChildren<ComponentProps<typeof PButtonPure>>
> = ({ children, ...props }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <PButtonPure {...props}>{children}</PButtonPure>;
};
