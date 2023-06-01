"use client";

import { PCrest } from "@porsche-design-system/components-react/ssr";
import { ComponentProps } from "react";

export const Crest: React.FC<
  React.PropsWithChildren<ComponentProps<typeof PCrest>>
> = ({ children, ...props }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <PCrest {...props}>{children}</PCrest>;
};
