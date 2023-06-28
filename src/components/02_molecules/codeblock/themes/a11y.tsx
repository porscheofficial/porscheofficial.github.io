export type Language = string;

export interface PrismThemeEntry {
  color?: string;
  cursor?: string;
  background?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  textShadow?: string;
  fontStyle?: "normal" | "italic";
  fontWeight?:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
  textDecorationLine?:
    | "none"
    | "underline"
    | "line-through"
    | "underline line-through";
  opacity?: number;
}

export interface PrismTheme {
  plain: PrismThemeEntry;
  styles: {
    types: string[];
    style: PrismThemeEntry;
    languages?: Language[];
  }[];
}

// Colors adapted from https://github.com/porsche-design-system/porsche-design-system/blob/main/packages/storefront/src/components/CodeBlock.vue
export const a11y: PrismTheme = {
  plain: {
    color: "#FBFCFF",
    backgroundColor: "#212225",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: "rgb(212, 208, 171)",
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: "rgb(254, 254, 254)",
      },
    },
    {
      types: ["property", "tag", "constant", "symbol", "deleted"],
      style: {
        color: "rgb(255, 160, 122)",
      },
    },
    {
      types: ["boolean", "number"],
      style: {
        color: "rgb(0, 224, 224)",
      },
    },
    {
      types: ["selector", "attr-name", "string", "char", "builtin", "inserted"],
      style: {
        color: "rgb(171, 227, 56)",
      },
    },
    {
      types: ["operator", "entity", "url", "variable"],
      style: {
        color: "rgb(0, 224, 224)",
      },
    },
    {
      types: ["atrule", "attr-value", "function"],
      style: {
        color: "rgb(255, 215, 0)",
      },
    },
    {
      types: ["keyword"],
      style: {
        color: "rgb(0, 224, 224)",
      },
    },
    {
      types: ["regex", "important"],
      style: {
        color: "rgb(255, 215, 0)",
      },
    },
    {
      // Fix tag color for HTML
      types: ["string"],
      languages: ["css"],
      style: {
        color: "rgb(0, 224, 224)",
      },
    },
  ],
};
