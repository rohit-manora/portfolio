interface LedgerProps {
  rows: readonly { key: string; value: string }[];
}

/** Hairline-ruled definition list — the "enterprise document" cue (§6). */
export function Ledger({ rows }: LedgerProps) {
  return (
    <dl className="border-t border-line-subtle">
      {rows.map((row) => (
        <div
          key={row.key}
          className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-line-subtle py-3.5 md:grid-cols-[8.5rem_1fr]"
        >
          <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-text-tertiary">
            {row.key}
          </dt>
          <dd className="text-sm leading-relaxed text-text-secondary">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
