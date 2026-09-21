import { cn } from "@/lib/utils";
import type { Brand } from "@/data";

export interface LogoMarkProps {
  brand: Brand;
  /** Rendered pixel height. Width follows the asset's intrinsic aspect ratio. */
  height?: number;
  /** Defaults to `brand.defaultTreatment`, then "mono". */
  treatment?: "mono" | "color";
  className?: string;
}

const wordmarkSizeByHeight = (height: number) => {
  if (height <= 18) return "text-micro-lg";
  if (height <= 24) return "text-sm";
  return "text-h3";
};

export function LogoMark({ brand, height = 24, treatment, className }: LogoMarkProps) {
  const finalTreatment = treatment ?? brand.defaultTreatment ?? "mono";

  if (!brand.asset) {
    return (
      <span
        className={cn("font-mono font-medium uppercase tracking-[0.08em] text-ink-2", wordmarkSizeByHeight(height), className)}
      >
        {brand.wordmark}
      </span>
    );
  }

  const width = brand.width && brand.height ? Math.round((brand.width / brand.height) * height) : undefined;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={brand.asset}
      alt={brand.name}
      height={height}
      width={width}
      style={{ height, width }}
      loading="lazy"
      decoding="async"
      className={cn(
        "inline-block object-contain object-left",
        finalTreatment === "mono" && brand.invertOnDark && "brightness-0 invert",
        className,
      )}
    />
  );
}
