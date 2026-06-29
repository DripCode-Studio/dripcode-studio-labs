import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  variant?: "default" | "outline" | "primary" | "muted";
  className?: string;
}

export function Tag({ children, variant = "default", className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
        {
          "bg-secondary text-secondary-foreground": variant === "default",
          "border border-border text-foreground": variant === "outline",
          "bg-primary/20 text-primary": variant === "primary",
          "bg-muted text-muted-foreground": variant === "muted",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
