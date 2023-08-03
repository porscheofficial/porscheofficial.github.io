/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { InlineNotification } from "./InlineNotification";
import { LinkPure } from "./LinkPure";
import { Tag } from "./Tag";
import { Heading } from "./Heading";
import { TextList, TextListItem } from "./TextList";
import { Codeblock } from "../02_molecules/codeblock/Codeblock";

const components = {
  InlineNotification: ({ ...props }) => <InlineNotification {...props} />,
  LinkPure: ({ ...props }) => <LinkPure {...props} />,
  Tag: ({ ...props }) => <Tag {...props} />,
  h1: ({ children }: { children: React.ReactNode }) => (
    <Heading
      align="center"
      size={{ base: "large", s: "x-large" }}
      theme="dark"
      tag="h1"
    >
      {children}
    </Heading>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <Heading
      size={{ base: "medium", s: "large" }}
      align="left"
      theme="dark"
      tag="h2"
    >
      {children}
    </Heading>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <Heading
      size={{ base: "small", s: "medium" }}
      align="left"
      theme="dark"
      tag="h3"
    >
      {children}
    </Heading>
  ),
  h4: ({ children }: { children: React.ReactNode }) => (
    <Heading
      size={{ base: "small", s: "small" }}
      align="left"
      theme="dark"
      tag="h4"
    >
      {children}
    </Heading>
  ),
  h5: ({ children }: { children: React.ReactNode }) => (
    <Heading
      size={{ base: "small", s: "small" }}
      align="left"
      theme="dark"
      tag="h5"
    >
      {children}
    </Heading>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <TextList theme="dark">{children}</TextList>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <TextList theme="dark" type="numbered">
      {children}
    </TextList>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <TextListItem>{children}</TextListItem>
  ),
  code: ({ children, ...props }: { children: React.ReactNode }) => (
    // @ts-expect-error expected?
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <Codeblock wrapperClassName={props.className}>{children}</Codeblock>
  ),
  a: ({ children, ...props }: { children: React.ReactNode }) => (
    // @ts-expect-error expected?
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <LinkPure theme="dark" underline icon="none" href={props.href}>
      {children}
    </LinkPure>
  ),
};

interface MdxProps {
  code: string;
}
export const MdxComponents: React.FC<MdxProps> = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx-content">
      {/* @ts-expect-error expected? */}
      <Component components={components} />
    </div>
  );
};
