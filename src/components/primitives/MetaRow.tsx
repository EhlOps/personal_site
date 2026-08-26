import { cn } from "@/lib/utils";
import { MicroLabel } from "./MicroLabel";

export interface MetaItem {
  label: string;
  value: React.ReactNode;
  href?: string;
  numeric?: boolean;
}

export interface MetaRowProps {
  items: MetaItem[];
  layout?: "grid" | "stack" | "inline";
  columns?: 2 | 3 | 4;
  size?: "sm" | "md";
}

const gridCols = { 2: "grid-cols-2", 3: "grid-cols-2 sm:grid-cols-3", 4: "grid-cols-2 sm:grid-cols-4" };

export function MetaRow({ items, layout = "grid", columns = 4, size = "md" }: MetaRowProps) {
  const valueSize = size === "sm" ? "text-micro-lg" : "text-sm";

  return (
    <dl
      className={cn(
        layout === "grid" && cn("grid gap-x-6 gap-y-4", gridCols[columns]),
        layout === "stack" && "flex flex-col gap-3",
        layout === "inline" && "flex flex-wrap gap-x-6 gap-y-2",
      )}
    >
      {items.map((item, i) => (
        <div key={i}>
          <dt>
            <MicroLabel size="sm" tone="faint">
              {item.label}
            </MicroLabel>
          </dt>
          <dd className={cn("mt-1 font-mono text-ink-2", valueSize, item.numeric && "tabular-nums")}>
            {item.href ? (
              <a href={item.href} className="transition-colors duration-[var(--duration-fast)] hover:text-accent">
                {item.value}
              </a>
            ) : (
              item.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
