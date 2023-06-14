"use client";

import { PButtonGroup } from "@porsche-design-system/components-react/ssr";
import { ComponentProps } from "react";

export const ButtonGroup: React.FC<
  React.PropsWithChildren<ComponentProps<typeof PButtonGroup>>
> = ({ children, ...props }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <PButtonGroup {...props}>{children}</PButtonGroup>;
};
