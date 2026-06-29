"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Lab } from "@/data/labs";
import { Tag } from "./Tag";

interface LabCardProps {
  lab: Lab;
  index: number;
}

export function LabCard({ lab, index }: LabCardProps) {
  return (
    <motion.a
      href={lab.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border/50 bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
      data-testid={`card-lab-${lab.name}`}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-semibold text-lg tracking-tight group-hover:text-primary transition-colors">
          {lab.name}
        </h3>
        <div className="flex items-center gap-2">
          {lab.status === "active" ? (
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-medium border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Active
            </div>
          ) : (
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-500 text-xs font-medium border border-amber-500/20">
              Soon
            </div>
          )}
          <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
        </div>
      </div>
      
      <p className="text-muted-foreground text-sm mb-6 flex-grow">
        {lab.desc}
      </p>
      
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
        <Tag variant="outline">{lab.tag}</Tag>
      </div>
    </motion.a>
  );
}
