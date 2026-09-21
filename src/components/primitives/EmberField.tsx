/**
 * Full-document backdrop: a static field of orange blooms (pure CSS, no
 * animation, no scroll listener) that grows denser and hotter toward the
 * page floor. See the `ember-field` utility in globals.css for the actual
 * gradient stack; this component only mounts it, once, behind everything.
 */
export function EmberField() {
  return <div aria-hidden className="ember-field pointer-events-none absolute inset-0 -z-10" />;
}
