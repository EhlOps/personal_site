// Parses `{{...}}` tokens into accent mono <strong> spans — no markdown
// dependency, no dangerouslySetInnerHTML. Non-global regex; split() still
// splits every occurrence in the string.
const TOKEN = /\{\{(.+?)\}\}/;

export function Highlight({ text }: { text: string }) {
  const parts = text.split(TOKEN);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} data-numeric className="font-mono text-[0.94em] font-medium text-accent">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}
