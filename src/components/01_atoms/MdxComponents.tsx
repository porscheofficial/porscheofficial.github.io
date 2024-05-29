/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import { useMDXComponent } from "next-contentlayer2/hooks";
import type { MDXComponents } from "mdx/types";
import {
  PDisplay,
  PHeading,
  PInlineNotification,
  PLinkPure,
  PTag,
  PText,
  PTextList,
  PTextListItem,
} from "@porsche-design-system/components-react/ssr";
import ExportedImage from "next-image-export-optimizer";
import { StaticImageData } from "next/image";
import { Codeblock } from "../02_molecules/codeblock/Codeblock";
import { Textblock } from "../02_molecules/textblock/Textblock";
import { ImageText } from "../03_organisms/imageText/ImageText";
import { Section } from "../02_molecules/section/section";
import { KeyValue } from "../02_molecules/foss_movement/KeyValue";
import { Principle } from "../02_molecules/foss_movement/Principle";

const CustomComponents = (
  theme: "dark" | "light" | undefined,
): MDXComponents => {
  return {
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
    }) => (
      <ImageText
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        theme={theme}
        {...props}
      />
    ),
    ExportedImage: ({ ...props }) => <ExportedImage {...props} />,
    Section: ({ ...props }) => <Section {...props} />,
    KeyValue: ({ ...props }) => <KeyValue {...props} />,
    Principle: ({ ...props }) => <Principle {...props} />,
    PDisplay: ({ ...props }) => <PDisplay {...props} />,
    h1: ({ children }) => (
      <PHeading
        align="center"
        size={{ base: "large", s: "x-large" }}
        theme={theme}
        tag="h1"
      >
        {children}
      </PHeading>
    ),
    h2: ({ children }) => (
      <PHeading
        size={{ base: "medium", s: "large" }}
        align="start"
        theme={theme}
        tag="h2"
      >
        {children}
      </PHeading>
    ),
    h3: ({ children }) => (
      <PHeading
        size={{ base: "small", s: "medium" }}
        align="start"
        theme={theme}
        tag="h3"
      >
        {children}
      </PHeading>
    ),
    h4: ({ children }) => (
      <PHeading
        size={{ base: "small", s: "small" }}
        align="start"
        theme={theme}
        tag="h4"
      >
        {children}
      </PHeading>
    ),
    h5: ({ children }) => (
      <PHeading
        size={{ base: "small", s: "small" }}
        align="start"
        theme={theme}
        tag="h5"
      >
        {children}
      </PHeading>
    ),
    ul: ({ children }) => <PTextList theme={theme}>{children}</PTextList>,
    ol: ({ children }) => (
      <PTextList theme={theme} type="numbered">
        {children}
      </PTextList>
    ),
    li: ({ children }) => <PTextListItem>{children}</PTextListItem>,
    code: ({ children, ...props }) => (
      <Codeblock wrapperClassName={props.className}>{children}</Codeblock>
    ),
    Textblock: ({ children }) => <Textblock>{children}</Textblock>,
    a: ({ children, ...props }) => <a href={props.href}>{children}</a>,
    p: ({ children }) => <PText theme={theme}>{children}</PText>,
  };
};

interface MdxProps {
  code: string;
  theme: "dark" | "light" | undefined;
}

export const MdxComponents: React.FC<MdxProps> = ({
  code,
  theme,
}: MdxProps) => {
  const Component = useMDXComponent(code);

  return <Component components={CustomComponents(theme)} />;
};
