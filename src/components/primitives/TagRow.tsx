import { getSkill } from "@/data";
import { MicroLabel } from "./MicroLabel";
import { Tag } from "./Tag";

export interface TagRowProps {
  label?: string;
  items: string[];
  variant?: "solid" | "outline" | "ghost";
  /** Resolve items as skill ids via the registry. Falls back to the raw
   *  string if the id isn't found, so plain labels also work. */
  resolveSkills?: boolean;
}

export function TagRow({ label, items, variant = "ghost", resolveSkills = true }: TagRowProps) {
  if (!items.length) return null;

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
      {label && (
        <MicroLabel size="sm" tone="faint">
          {label}
        </MicroLabel>
      )}
      <div className="flex flex-wrap gap-1.5">
        {items.map((id) => {
          const name = (resolveSkills && getSkill(id)?.name) || id;
          return (
            <Tag key={id} variant={variant} size="sm">
              {name}
            </Tag>
          );
        })}
      </div>
    </div>
  );
}
