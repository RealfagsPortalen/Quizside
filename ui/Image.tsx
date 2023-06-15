import { FC } from "react";
import NextImage from "next/image";
import { Interpolation, Theme } from "@emotion/react";

export const Image: FC<{
  src: string;
  alt: string;
  css?: Interpolation<Theme>;
  aspectRatio: number;
}> = ({ src, alt, css = {}, aspectRatio }) => (
  <div
    css={{
      position: "relative",
      width: "100%",
      aspectRatio: aspectRatio + "",
    }}
  >
    {/* @ts-ignore */}
    <NextImage src={src} alt={alt} fill css={{ objectFit: "cover", ...css }} />
  </div>
);
