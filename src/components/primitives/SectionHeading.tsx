import { Reveal } from "./Reveal";

export interface SectionHeadingProps {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  lede?: string;
  readout?: React.ReactNode;
}

export function SectionHeading({ id, index, eyebrow, title, lede, readout }: SectionHeadingProps) {
  return (
    <Reveal className="mb-10 sm:mb-14">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <div className="flex items-baseline gap-3">
          <span aria-hidden className="font-mono text-micro text-ink-3">
            {index} /
          </span>
          <span className="font-mono text-micro-lg uppercase tracking-[0.12em] text-ink-2">{eyebrow}</span>
        </div>
        {readout && <span className="font-mono text-micro text-ink-3">{readout}</span>}
      </div>
      <h2 id={`${id}-title`} className="mt-3 text-h2 text-ink">
        {title}
      </h2>
      {lede && <p className="mt-3 max-w-[var(--container-measure)] text-lead text-ink-2">{lede}</p>}
      <div aria-hidden className="relative mt-6 h-px w-full bg-line-faint">
        <div className="absolute inset-y-0 left-0 w-16 origin-left scale-x-100 bg-accent-line" />
      </div>
    </Reveal>
  );
}
