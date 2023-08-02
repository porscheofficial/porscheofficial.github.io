import {
  defineDocumentType,
  makeSource,
  LocalDocument,
  // eslint-disable-next-line import/no-unresolved
} from "contentlayer/source-files";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    // eslint-disable-next-line no-underscore-dangle
    resolve: (doc: LocalDocument) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",

    resolve: (doc: LocalDocument) =>
      // eslint-disable-next-line no-underscore-dangle
      doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the blog",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the blog",
      required: true,
    },
  },
  // @ts-expect-error TODO
  computedFields,
}));

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the document",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the document",
      required: true,
    },
  },
  // @ts-expect-error TODO
  computedFields,
}));

// eslint-disable-next-line import/no-default-export
export default makeSource({
  contentDirPath: "content",
  documentTypes: [Blog, Doc],
});