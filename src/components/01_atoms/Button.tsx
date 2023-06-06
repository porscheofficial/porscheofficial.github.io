"use client";

import { PButton } from "@porsche-design-system/components-react/ssr";
import { ComponentProps } from "react";

export const Button: React.FC<
  React.PropsWithChildren<ComponentProps<typeof PButton>>
> = ({ children, ...props }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <PButton {...props}>{children}</PButton>;
};
