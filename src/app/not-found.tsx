import { LinkButton } from "@/components/primitives/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 px-6 text-center">
      <span className="font-mono text-micro text-ink-3">ERROR / 404</span>
      <h1 className="text-h1 text-ink">Page not found</h1>
      <p className="max-w-[40ch] text-sm text-ink-3">
        Whatever you were looking for isn&rsquo;t here. Everything on this site lives on one page.
      </p>
      <LinkButton href="/" variant="outline">
        Back to ehlops.com
      </LinkButton>
    </main>
  );
}
