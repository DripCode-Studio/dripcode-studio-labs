import type { ReactNode } from "react";
import { ExternalLink } from "lucide-react";
import { Nav } from "./Nav";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground font-sans">
      <Nav />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <footer className="py-8 border-t border-border/40 text-center text-xs text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} DripCode Studio Labs. All rights reserved.</p>
        <a
          href="https://www.dripcodestudio.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1 hover:text-foreground transition-colors"
        >
          DripCode Studio
          <ExternalLink className="w-3 h-3" />
        </a>
      </footer>
    </div>
  );
}
