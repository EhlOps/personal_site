// Parses `{{...}}` tokens into accent <strong> spans, no markdown
// dependency, no dangerouslySetInnerHTML. Stays in the surrounding font and
// size (only color changes) so a pull-out never breaks mid-sentence reading
// rhythm. Non-global regex; split() still splits every occurrence in the
// string.
const TOKEN = /\{\{(.+?)\}\}/;

export function Highlight({ text }: { text: string }) {
  const parts = text.split(TOKEN);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} data-numeric className="font-bold text-accent">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}
