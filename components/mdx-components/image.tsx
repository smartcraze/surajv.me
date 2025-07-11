import { ComponentProps } from "react";
import NextImage, { StaticImageData } from "next/image";

type Height = ComponentProps<typeof NextImage>["height"];
type Width = ComponentProps<typeof NextImage>["width"];

export default function Image({
  src,
  alt = "alt",
  width = 800,
  height = 350,
  ...props
}: Omit<ComponentProps<"img">, "src"> & { src: string | StaticImageData }) {
  if (!src) return null;
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width as Width}
      height={height as Height}
      quality={40}
      {...props}
    />
  );
}
