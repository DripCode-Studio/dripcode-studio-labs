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
  const isSoon = lab.soon;

  const content = (
    <div
      className={`relative flex flex-col justify-between overflow-hidden rounded-xl border p-6 transition-all ${
        isSoon
          ? "border-border/30 bg-card/50 opacity-50 cursor-default"
          : "border-border/50 bg-card transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 group cursor-pointer"
      }`}
      data-testid={`card-lab-${lab.name}`}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className={`font-semibold text-lg tracking-tight ${isSoon ? "text-muted-foreground" : "group-hover:text-primary transition-colors"}`}>
          {lab.name}
        </h3>
        <div className="flex items-center gap-2">
          {isSoon ? (
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-muted/20 text-muted-foreground text-xs font-medium border border-border/30">
              Soon
            </div>
          ) : (
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-medium border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Active
            </div>
          )}
          {!isSoon && (
            <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          )}
        </div>
      </div>
      
      <p className="text-muted-foreground text-sm mb-6 flex-grow">
        {lab.desc}
      </p>
      
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
        <Tag variant={isSoon ? "muted" : "outline"}>{lab.tag}</Tag>
      </div>
    </div>
  );

  if (isSoon) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
      >
        {content}
      </motion.div>
    );
  }

  return (
    <motion.a
      href={lab.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      {content}
    </motion.a>
  );
}
