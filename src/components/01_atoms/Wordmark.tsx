"use client";

import { PWordmark } from "@porsche-design-system/components-react/ssr";
import { ComponentProps } from "react";

export const Wordmark: React.FC<
  React.PropsWithChildren<ComponentProps<typeof PWordmark>>
> = ({ children, ...props }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <PWordmark {...props}>{children}</PWordmark>;
};
