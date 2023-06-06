"use client";

import { PIcon } from "@porsche-design-system/components-react/ssr";
import { ComponentProps } from "react";

export const Icon: React.FC<
  React.PropsWithChildren<ComponentProps<typeof PIcon>>
> = ({ children, ...props }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <PIcon {...props}>{children}</PIcon>;
};
