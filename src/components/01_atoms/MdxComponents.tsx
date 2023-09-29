/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import {
  PDisplay,
  PHeading,
  PInlineNotification,
  PLinkPure,
  PTag,
  PTextList,
  PTextListItem,
} from "@porsche-design-system/components-react/ssr";
import ExportedImage from "next-image-export-optimizer";
import { StaticImageData } from "next/image";
import { Codeblock } from "../02_molecules/codeblock/Codeblock";
import { ImageText } from "../03_organisms/imageText/ImageText";
import { Section } from "../02_molecules/section/section";
import { KeyValue } from "../02_molecules/foss_movement/KeyValue";
import { Principle } from "../02_molecules/foss_movement/Principle";

const components = {
  PInlineNotification: ({ ...props }) => <PInlineNotification {...props} />,
  PLinkPure: ({ ...props }) => <PLinkPure {...props} />,
  PTag: ({ ...props }) => <PTag {...props} />,
  ImageText: ({
    imageSrc,
    imageAlt,
    ...props
  }: {
    imageSrc: string | StaticImageData;
    imageAlt: string;
  }) => <ImageText imageSrc={imageSrc} imageAlt={imageAlt} {...props} />,
  // @ts-expect-error TODO
  ExportedImage: ({ ...props }) => <ExportedImage {...props} />,
  // @ts-expect-error TODO
  Section: ({ ...props }) => <Section {...props} />,
  // @ts-expect-error TODO
  KeyValue: ({ ...props }) => <KeyValue {...props} />,
  // @ts-expect-error TODO
  Principle: ({ ...props }) => <Principle {...props} />,
  PDisplay: ({ ...props }) => <PDisplay {...props} />,
  h1: ({ children }: { children: React.ReactNode }) => (
    <PHeading
      align="center"
      size={{ base: "large", s: "x-large" }}
      theme="dark"
      tag="h1"
    >
      {children}
    </PHeading>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <PHeading
      size={{ base: "medium", s: "large" }}
      align="left"
      theme="dark"
      tag="h2"
    >
      {children}
    </PHeading>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <PHeading
      size={{ base: "small", s: "medium" }}
      align="left"
      theme="dark"
      tag="h3"
    >
      {children}
    </PHeading>
  ),
  h4: ({ children }: { children: React.ReactNode }) => (
    <PHeading
      size={{ base: "small", s: "small" }}
      align="left"
      theme="dark"
      tag="h4"
    >
      {children}
    </PHeading>
  ),
  h5: ({ children }: { children: React.ReactNode }) => (
    <PHeading
      size={{ base: "small", s: "small" }}
      align="left"
      theme="dark"
      tag="h5"
    >
      {children}
    </PHeading>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <PTextList theme="dark">{children}</PTextList>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <PTextList theme="dark" type="numbered">
      {children}
    </PTextList>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <PTextListItem>{children}</PTextListItem>
  ),
  code: ({ children, ...props }: { children: React.ReactNode }) => (
    // @ts-expect-error expected?
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <Codeblock wrapperClassName={props.className}>{children}</Codeblock>
  ),
  a: ({ children, ...props }: { children: React.ReactNode }) => (
    // @ts-expect-error expected?
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <PLinkPure theme="dark" underline icon="none" href={props.href}>
      {children}
    </PLinkPure>
  ),
};

interface MdxProps {
  code: string;
}
export const MdxComponents: React.FC<MdxProps> = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code);

  // @ts-expect-error expected?
  return <Component components={components} />;
};
