import { clusters, techs } from "@/data/skills";
import type { EngagementId } from "@/data/types";
import { cn } from "@/lib/utils/cn";

const SHORT: Record<EngagementId, string> = {
  carnival: "Carnival",
  adha: "ADHA",
  verizon: "Verizon",
  streamanalytix: "StreamAnalytix",
  giddh: "Giddh",
  servicexpert: "ServiceXpert",
  biddrip: "Biddrip",
};

/** Mobile alternative to the constellation — more useful than a squeezed graph (§7). */
export function SkillChipGroups() {
  return (
    <div className="space-y-8">
      {clusters.map((cluster) => {
        const members = techs.filter((t) => t.category === cluster.id);
        return (
          <div key={cluster.id}>
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-accent">
              {cluster.label}
            </p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {members.map((tech) => (
                <li key={tech.id}>
                  <span
                    className={cn(
                      "inline-flex flex-col rounded border px-2.5 py-1.5",
                      tech.status === "current"
                        ? "border-accent/30 bg-accent-muted"
                        : "border-line-subtle bg-surface-1",
                    )}
                  >
                    <span
                      className={cn(
                        "font-mono text-[0.6875rem] tracking-[0.02em]",
                        tech.status === "current" ? "text-text-primary" : "text-text-secondary",
                      )}
                    >
                      {tech.label}
                    </span>
                    {tech.usedOn.length > 0 && (
                      <span className="mt-0.5 font-mono text-[0.5625rem] uppercase tracking-[0.12em] text-text-tertiary">
                        {tech.usedOn.map((e) => SHORT[e]).join(" · ")}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
