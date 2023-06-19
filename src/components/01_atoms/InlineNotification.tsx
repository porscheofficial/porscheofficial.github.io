"use client";

import { PInlineNotification } from "@porsche-design-system/components-react/ssr";
import { ComponentProps } from "react";

export const InlineNotification: React.FC<
  React.PropsWithChildren<ComponentProps<typeof PInlineNotification>>
> = ({ children, ...props }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <PInlineNotification {...props}>{children}</PInlineNotification>;
};
