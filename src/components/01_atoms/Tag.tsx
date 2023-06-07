"use client";

import { PTag } from "@porsche-design-system/components-react/ssr";
import { ComponentProps } from "react";

export const Tag: React.FC<
  React.PropsWithChildren<ComponentProps<typeof PTag>>
> = ({ children, ...props }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <PTag {...props}>{children}</PTag>;
};
