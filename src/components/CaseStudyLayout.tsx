import type { ReactNode } from "react";

interface CaseStudyLayoutProps {
  children: ReactNode;
}

export function CaseStudyLayout({ children }: CaseStudyLayoutProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {children}
    </article>
  );
}
