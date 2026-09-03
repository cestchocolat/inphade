import Image from "next/image";
import { brandLogoAlt, brandLogoPath } from "@/lib/brand";

type BrandLogoProps = {
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ width, height, className, priority }: BrandLogoProps) {
  return (
    <Image
      src={brandLogoPath}
      alt={brandLogoAlt}
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  );
}
