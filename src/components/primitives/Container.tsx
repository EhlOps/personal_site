import { cn } from "@/lib/utils";

export interface ContainerProps {
  children: React.ReactNode;
  size?: "content" | "measure" | "full";
  className?: string;
}

const sizes = {
  content: "max-w-[var(--container-content)]",
  measure: "max-w-[var(--container-measure)]",
  full: "max-w-none",
};

export function Container({ children, size = "content", className }: ContainerProps) {
  return <div className={cn("mx-auto w-full px-5 sm:px-8 lg:px-12", sizes[size], className)}>{children}</div>;
}
