import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export interface SectionProps {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  lede?: string;
  readout?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, index, eyebrow, title, lede, readout, children, className }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`scroll-mt-[calc(var(--header-h)+2rem)] py-20 sm:py-28 lg:py-32 ${className ?? ""}`}
    >
      <Container>
        <SectionHeading id={id} index={index} eyebrow={eyebrow} title={title} lede={lede} readout={readout} />
        {children}
      </Container>
    </section>
  );
}
