import { Container } from "./primitives/Container";

// Evaluated once at build time in this server component — safe under
// static export, since there's no client render of it to cause a
// hydration mismatch.
const buildDate = new Date().toISOString().slice(0, 10);

export function SiteFooter() {
  return (
    <footer className="border-t border-line-faint py-8">
      <Container>
        <div className="flex flex-col items-center gap-2 text-center font-mono text-micro-sm text-ink-3 sm:flex-row sm:justify-between sm:text-left">
          <span>© {new Date().getFullYear()} SAM EHLERS</span>
          <span>BUILT WITH NEXT.JS · TYPESCRIPT · TAILWIND</span>
          <span>LAST DEPLOY {buildDate}</span>
        </div>
        <p className="mt-4 text-center text-micro-sm text-ink-3 sm:text-left">
          All third-party names and marks are the property of their respective owners and are used to describe my
          work.{" "}
          <a
            href="/brand/ATTRIBUTION.md"
            className="underline decoration-line-strong underline-offset-2 hover:text-ink-2"
          >
            Attribution
          </a>
          . No endorsement or affiliation is implied.
        </p>
      </Container>
    </footer>
  );
}
