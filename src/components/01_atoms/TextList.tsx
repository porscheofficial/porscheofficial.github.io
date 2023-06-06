"use client";

import { PTextList, PTextListItem } from "@porsche-design-system/components-react/ssr";
import { ComponentProps } from "react";

export const TextList: React.FC<
  React.PropsWithChildren<ComponentProps<typeof PTextList>>
> = ({ children, ...props }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <PTextList {...props}>{children}</PTextList>;
};

export const TextListItem: React.FC<
  React.PropsWithChildren<ComponentProps<typeof PTextListItem>>
> = ({ children, ...props }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <PTextListItem {...props}>{children}</PTextListItem>;
};
