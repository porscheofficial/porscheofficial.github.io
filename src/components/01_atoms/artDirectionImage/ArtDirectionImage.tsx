/* eslint-disable react/jsx-props-no-spreading */
import type { ImageProps as NextImageProps } from "next/image";
import { forwardRef } from "react";
import { getArtDirectionSourceProps } from "../../../utils/imageHelpers/getArtDirectionSourceProps";
import { ArtDirectionImageData } from "../../../utils/imageHelpers/isArtDirectionAsset";

const fillStyles: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  objectFit: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "100%",
};

export interface ArtDirectionImageProps extends Omit<NextImageProps, "src"> {
  // eslint-disable-next-line react/no-unused-prop-types
  src: ArtDirectionImageData;
}

export const ArtDirectionImage = forwardRef<
  HTMLPictureElement,
  ArtDirectionImageProps
>((props, ref) => {
  const sources = getArtDirectionSourceProps(props);
  const { className, style, alt } = props;

  return (
    <picture
      ref={ref}
      className={className}
      style={{ ...fillStyles, ...style }}>
      {sources.map(({ media, srcSet, sizes, breakpointDescriptor }) => (
        <source
          key={breakpointDescriptor}
          media={media}
          srcSet={srcSet}
          sizes={sizes}
        />
      ))}
      <img
        style={props.fill ? fillStyles : undefined}
        srcSet={sources[sources.length - 1].srcSet}
        alt={alt}
      />
    </picture>
  );
});
