import { cn } from "@/lib/utils";

type MandarinLogoProps = {
  size?: "sm" | "md";
  className?: string;
};

export function MandarinLogo({ size = "md", className }: MandarinLogoProps) {
  const markSize = size === "sm" ? "size-7 rounded-lg text-sm" : "size-9 rounded-[10px] text-lg";
  const textSize = size === "sm" ? "text-base" : "text-xl";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "flex shrink-0 items-center justify-center bg-[linear-gradient(145deg,#FF8C42,#FF5A1F)] font-brand font-extrabold text-[#131110]",
          markSize
        )}
      >
        M
      </span>
      <span className={cn("font-brand font-bold tracking-[-0.01em] text-[#F3EEE7]", textSize)}>Mandarin</span>
    </span>
  );
}
