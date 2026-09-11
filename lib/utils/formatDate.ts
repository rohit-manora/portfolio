const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
] as const;

/** "2024-03" -> "Mar 2024". `null` -> "Present". */
export function formatMonth(iso: string | null): string {
  if (iso === null) return "Present";
  const [year, month] = iso.split("-");
  if (year === undefined || month === undefined) return iso;
  const name = MONTHS[Number(month) - 1];
  return name === undefined ? iso : `${name} ${year}`;
}

export function formatRange(start: string, end: string | null): string {
  return `${formatMonth(start)} — ${formatMonth(end)}`;
}
