import { getImageProps } from "next/image";
import type { ArtDirectionImageProps } from "../../components/01_atoms/artDirectionImage/ArtDirectionImage";
import {
  mediaQueriesResponsiveness,
  MediaQueryDescriptor,
  mediaQueryDescriptors,
} from "../../config/layout";
import { getBaseMediaQuery } from "./getBaseMediaQuery";
import type { ArtDirectionImageData } from "./isArtDirectionAsset";
import type { Entries } from "../typeHelpers/Entries";

interface SourceProps {
  media: `(min-width: ${number}px)` | `(max-width: ${number}px)`;
  srcSet: string | undefined;
  sizes: string | undefined;
  breakpointDescriptor: MediaQueryDescriptor;
}

export const getArtDirectionSourceProps = ({
  src: srcDict,
  ...props
}: ArtDirectionImageProps): SourceProps[] => {
  const srcDictEntriesSorted = (
    Object.entries(srcDict) as Entries<Required<ArtDirectionImageData>>
  ).sort(([descriptorA], [descriptorB]) => {
    // sort by breakpoint size using the ordered mediaQueryDescriptors array.
    // If descriptor is "base", it should be first
    if (descriptorA === "base") return -1;
    if (descriptorB === "base") return 1;
    return (
      mediaQueryDescriptors.indexOf(descriptorB) -
      mediaQueryDescriptors.indexOf(descriptorA)
    );
  });

  const sources = srcDictEntriesSorted.map(
    ([breakpointDescriptor, src], index) => {
      const allImageProps = getImageProps({
        src,
        ...props,
        // TODO: support next-export-image's loader and placeholder props
        loader: (params) => params.src,
        placeholder: "empty",
      }).props;

      let mediaQuery;
      if (
        breakpointDescriptor === "base" &&
        index !== srcDictEntriesSorted.length - 1
      ) {
        const nextBreakpointDescriptor = srcDictEntriesSorted[
          srcDictEntriesSorted.length - 1
        ][0] as MediaQueryDescriptor;
        const nextMediaQuery =
          mediaQueriesResponsiveness[nextBreakpointDescriptor];
        mediaQuery = getBaseMediaQuery(nextMediaQuery);
      } else {
        mediaQuery =
          mediaQueriesResponsiveness[
            breakpointDescriptor as MediaQueryDescriptor
          ];
      }

      return {
        media: mediaQuery,
        srcSet: allImageProps.srcSet,
        sizes: allImageProps.sizes,
        breakpointDescriptor: breakpointDescriptor as MediaQueryDescriptor,
      };
    },
  );

  return sources;
};
