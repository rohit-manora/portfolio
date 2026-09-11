"use client";

import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback: ReactNode;
}

/**
 * If WebGL is unavailable or the context is lost, render the static lattice
 * instead. An error boundary is more robust than feature detection — it also
 * covers context loss after a successful mount.
 */
export class CanvasBoundary extends Component<Props, { failed: boolean }> {
  override state = { failed: false };

  static getDerivedStateFromError(): { failed: boolean } {
    return { failed: true };
  }

  override render(): ReactNode {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}
