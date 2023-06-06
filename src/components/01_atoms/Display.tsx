"use client";

import { PDisplay } from "@porsche-design-system/components-react/ssr";
import { ComponentProps } from "react";

export const Display: React.FC<
  React.PropsWithChildren<ComponentProps<typeof PDisplay>>
> = ({ children, ...props }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <PDisplay {...props}>{children}</PDisplay>;
};
