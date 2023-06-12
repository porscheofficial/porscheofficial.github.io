"use client";

import { PLinkTile } from "@porsche-design-system/components-react/ssr";
import { ComponentProps } from "react";

export const LinkTile: React.FC<
  React.PropsWithChildren<ComponentProps<typeof PLinkTile>>
> = ({ children, ...props }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <PLinkTile {...props}>{children}</PLinkTile>;
};
