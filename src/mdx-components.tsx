import type { MDXComponents } from "mdx/types";
import {
  PHeading,
  PLinkPure,
  PTextList,
  PTextListItem,
} from "@porsche-design-system/components-react/ssr";
import { Codeblock } from "./components/02_molecules/codeblock/Codeblock";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <PHeading
        align="center"
        size={{ base: "large", s: "x-large" }}
        theme="dark"
        tag="h1"
      >
        {children}
      </PHeading>
    ),
    h2: ({ children }) => (
      <PHeading
        size={{ base: "medium", s: "large" }}
        align="left"
        theme="dark"
        tag="h2"
      >
        {children}
      </PHeading>
    ),
    h3: ({ children }) => (
      <PHeading
        size={{ base: "small", s: "medium" }}
        align="left"
        theme="dark"
        tag="h3"
      >
        {children}
      </PHeading>
    ),
    h4: ({ children }) => (
      <PHeading
        size={{ base: "small", s: "small" }}
        align="left"
        theme="dark"
        tag="h4"
      >
        {children}
      </PHeading>
    ),
    h5: ({ children }) => (
      <PHeading
        size={{ base: "small", s: "small" }}
        align="left"
        theme="dark"
        tag="h5"
      >
        {children}
      </PHeading>
    ),
    ul: ({ children }) => <PTextList theme="dark">{children}</PTextList>,
    ol: ({ children }) => (
      <PTextList theme="dark" type="numbered">
        {children}
      </PTextList>
    ),
    li: ({ children }) => <PTextListItem>{children}</PTextListItem>,
    code: ({ children, ...props }) => (
      <Codeblock wrapperClassName={props.className}>{children}</Codeblock>
    ),
    a: ({ children, ...props }) => (
      <PLinkPure theme="dark" underline icon="none" href={props.href}>
        {children}
      </PLinkPure>
    ),
    ...components,
  };
};
