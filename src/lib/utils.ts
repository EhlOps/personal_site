import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// Tailwind v4's CSS-first `@theme` block (globals.css) defines this site's
// own type scale as custom utilities: text-display/h1/h2/h3/lead/body/stat/
// fine/micro/micro-sm/micro-lg. tailwind-merge can't see that CSS, so out of
// the box it doesn't recognize them as font-size utilities; it falls back
// to treating them as arbitrary text-color values instead, which silently
// DROPS whichever of {size, color} comes first whenever both are passed to
// cn() (e.g. `cn("text-micro", "text-ink")` collapses to just "text-ink").
// This was a real, live bug: MicroLabel's `size` prop was a no-op, Button/
// LinkButton's non-hover text color was dropped, etc. Registering these
// names under the "font-size" group here fixes it at the one shared choke
// point instead of patching every call site.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        { text: ["display", "h1", "h2", "h3", "lead", "body", "stat", "fine", "micro", "micro-sm", "micro-lg"] },
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
