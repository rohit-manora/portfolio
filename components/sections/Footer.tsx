import { ArrowUp } from "lucide-react";
import { navItems } from "@/data/navigation";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line-subtle">
      <div className="mx-auto max-w-[1320px] px-5 py-14 md:px-20">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-text-primary">
              {profile.name}
            </p>
            <p className="mt-2 text-sm text-text-secondary">{profile.title}</p>
            <a
              href={`mailto:${profile.contact.email}`}
              className="mt-5 block break-all text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              {profile.contact.email}
            </a>
            <a
              href={profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              LinkedIn &#8599;
            </a>
          </div>

          <nav aria-label="Footer">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-text-tertiary transition-colors hover:text-text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Colophon — naming the stack and the type is what engineers do */}
          <div className="space-y-5">
            <div>
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-text-tertiary">
                Built with
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                Next.js · React Three Fiber
                <br />
                Tailwind CSS · Framer Motion
              </p>
            </div>
            <div>
              <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-text-tertiary">
                Type
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                Instrument Sans · JetBrains Mono
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex items-center justify-between border-t border-line-subtle pt-6">
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-text-tertiary">
            &copy; {new Date().getFullYear()} {profile.name}
          </p>
          <a
            href="#main"
            className="group inline-flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-text-tertiary transition-colors hover:text-text-primary"
          >
            Back to top
            <ArrowUp
              size={13}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
