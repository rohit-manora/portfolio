/** Minimal class joiner — no dependency needed for this surface area. */
export function cn(...parts: readonly (string | false | null | undefined)[]): string {
  return parts.filter(Boolean).join(" ");
}
