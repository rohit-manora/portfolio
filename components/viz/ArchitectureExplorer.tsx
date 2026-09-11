"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { layers, nodeDetails, sharedFacts } from "@/data/architecture";
import { sectionIndex } from "@/data/navigation";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { cn } from "@/lib/utils/cn";

const MFE_IDS = new Set(
  layers.find((l) => l.id === "mfe")?.nodes.map((n) => n.id) ?? [],
);

const PULSE_PATH = ["brand", "mfe", "shared", "content", "integration"] as const;

function detailsFor(id: string): readonly { key: string; value: string }[] {
  /* Source A names the eight modules but describes none individually.
     Every module therefore renders the shared architecture facts — all of
     which are stated verbatim in the resume. Nothing per-module is invented. */
  if (MFE_IDS.has(id)) return sharedFacts;
  return nodeDetails[id] ?? [];
}

export function ArchitectureExplorer() {
  const [selected, setSelected] = useState<string>("basket");
  const [interacted, setInteracted] = useState(false);
  const [pulseLayer, setPulseLayer] = useState(0);
  const reduced = useReducedMotion();
  const layerRefs = useRef<Map<string, HTMLButtonElement[]>>(new Map());

  /* Idle pulse traverses Brand -> MFE -> Storybook -> AEM -> GraphQL.
     Stops permanently once someone interacts. */
  useEffect(() => {
    if (reduced || interacted) return;
    const timer = window.setInterval(() => {
      setPulseLayer((v) => (v + 1) % (PULSE_PATH.length + 2));
    }, 1200);
    return () => window.clearInterval(timer);
  }, [reduced, interacted]);

  const selectedLabel =
    layers.flatMap((l) => l.nodes).find((n) => n.id === selected)?.label ?? "";

  const onNodeKeyDown = (e: React.KeyboardEvent, layerId: string, index: number) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    const nodes = layerRefs.current.get(layerId);
    if (nodes === undefined || nodes.length === 0) return;
    e.preventDefault();
    const next =
      e.key === "ArrowRight"
        ? (index + 1) % nodes.length
        : (index - 1 + nodes.length) % nodes.length;
    nodes[next]?.focus();
  };

  const select = (id: string) => {
    setSelected(id);
    setInteracted(true);
  };

  return (
    <Section id="architecture" className="bg-surface-1/30" fullBleed>
      <div className="mx-auto max-w-[1320px] px-5 md:px-20">
        <SectionHeading
          index={sectionIndex.architecture}
          label="Architecture"
          title="Carnival UK — microfrontend platform."
          deck="Eight independent modules composed into two brand experiences, sharing one Storybook design system and AEM-managed content. Select any node to inspect it."
        />

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Graph */}
          <div className="lg:col-span-8">
            <div className="flex flex-col">
              {layers.map((layer, layerIdx) => {
                const isPulsing =
                  !reduced &&
                  !interacted &&
                  PULSE_PATH[pulseLayer] === layer.id;

                return (
                  <div key={layer.id}>
                    {layerIdx > 0 && (
                      <div className="relative h-8" aria-hidden="true">
                        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-line-subtle" />
                        {isPulsing && (
                          <motion.span
                            initial={{ top: 0, opacity: 0 }}
                            animate={{ top: "100%", opacity: [0, 1, 0] }}
                            transition={{ duration: 1.1, ease: "easeInOut" }}
                            className="absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-data"
                          />
                        )}
                      </div>
                    )}

                    <div
                      className={cn(
                        "rounded border border-line-subtle bg-bg/60 p-4 transition-opacity duration-300 md:p-5",
                        layer.abstracted === true && "opacity-25",
                      )}
                    >
                      <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-text-tertiary">
                        {layer.label}
                      </p>

                      <div
                        className={cn(
                          "mt-3 grid gap-2",
                          layer.id === "mfe"
                            ? "grid-cols-2 sm:grid-cols-4"
                            : layer.nodes.length > 2
                              ? "grid-cols-2 sm:grid-cols-4"
                              : "grid-cols-1 sm:grid-cols-2",
                        )}
                      >
                        {layer.nodes.map((node, i) => {
                          const isSelected = selected === node.id;
                          return (
                            <button
                              key={node.id}
                              type="button"
                              ref={(el) => {
                                if (el === null) return;
                                const list = layerRefs.current.get(layer.id) ?? [];
                                list[i] = el;
                                layerRefs.current.set(layer.id, list);
                              }}
                              onClick={() => select(node.id)}
                              onFocus={() => select(node.id)}
                              onKeyDown={(e) => onNodeKeyDown(e, layer.id, i)}
                              aria-pressed={isSelected}
                              aria-describedby="arch-detail"
                              className={cn(
                                "rounded border px-3 py-2.5 text-left text-sm transition-all duration-200",
                                isSelected
                                  ? "border-accent bg-accent-muted text-text-primary"
                                  : "border-line-subtle bg-surface-1/60 text-text-secondary hover:border-line-strong hover:text-text-primary",
                                interacted && !isSelected && "opacity-60",
                              )}
                            >
                              {node.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-4">
            <div
              id="arch-detail"
              aria-live="polite"
              className="lg:sticky lg:top-32 rounded border border-line bg-surface-1 p-6"
            >
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-accent">
                Selected
              </p>
              <h3 className="mt-3 font-display text-xl tracking-[-0.02em] text-text-primary">
                {selectedLabel}
              </h3>

              <dl className="mt-6 border-t border-line-subtle">
                {detailsFor(selected).map((row) => (
                  <div key={row.key} className="border-b border-line-subtle py-3">
                    <dt className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-text-tertiary">
                      {row.key}
                    </dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Screen readers get the full structure without navigating a graph */}
        <table className="sr-only-custom">
          <caption>Carnival UK microfrontend architecture by layer</caption>
          <thead>
            <tr>
              <th scope="col">Layer</th>
              <th scope="col">Components</th>
            </tr>
          </thead>
          <tbody>
            {layers.map((layer) => (
              <tr key={layer.id}>
                <th scope="row">{layer.label}</th>
                <td>{layer.nodes.map((n) => n.label).join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
