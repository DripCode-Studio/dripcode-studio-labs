import type { ReactNode } from "react";
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
        &copy; {new Date().getFullYear()} DripCode Studio. Output Platform.
      </footer>
    </div>
  );
}
