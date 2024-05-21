import { ResponsiveImage } from "contentlayer/generated";
import type { ArtDirectionImageData } from "./isArtDirectionAsset";

const commonContentlayerDocProps = ["_id", "_raw", "type"];
export const removeContentlayerDocProps = (objKey: string): boolean =>
  !commonContentlayerDocProps.includes(objKey);

export const transformContentlayerImage = (
  image: ResponsiveImage,
): ArtDirectionImageData =>
  Object.fromEntries(
    Object.entries(image).filter(([key]) => removeContentlayerDocProps(key)),
  );
