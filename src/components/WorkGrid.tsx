import type { ReactNode } from "react";

interface WorkGridProps {
  children: ReactNode;
}

export function WorkGrid({ children }: WorkGridProps) {
  return (
    <div className="flex flex-col">
      {children}
    </div>
  );
}
