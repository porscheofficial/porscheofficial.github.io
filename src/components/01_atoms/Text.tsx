"use client";

import { PText } from "@porsche-design-system/components-react/ssr";
import { ComponentProps } from "react";

export const Text: React.FC<
  React.PropsWithChildren<ComponentProps<typeof PText>>
> = ({ children, ...props }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <PText {...props}>{children}</PText>;
};
