import { StaticImageData } from "next/image";
import {
  MediaQueryDescriptor,
  mediaQueryDescriptors,
} from "../../config/layout";

export type BreakpointDescriptor = MediaQueryDescriptor | "base";

export type ArtDirectionImageData = Partial<
  Record<BreakpointDescriptor, string | StaticImageData>
>;

export const isArtDirectionAsset = (
  src: string | StaticImageData | ArtDirectionImageData,
): src is ArtDirectionImageData =>
  typeof src === "object" &&
  Object.keys(src as object).every((key) =>
    [...mediaQueryDescriptors, "base"].includes(key as BreakpointDescriptor),
  );
