"use client";
import { PorscheDesignSystemProvider } from "@porsche-design-system/components-react/ssr";

export const AppProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <PorscheDesignSystemProvider>{children}</PorscheDesignSystemProvider>;
};
