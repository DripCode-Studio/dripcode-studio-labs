"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { WorkItem } from "@/data/work";
import { Tag } from "./Tag";

interface ProjectCardProps {
  project: WorkItem;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group flex flex-col lg:flex-row gap-8 lg:gap-12 py-12 border-b border-border/40 first:pt-0 last:border-0"
      data-testid={`card-work-${project.slug}`}
    >
      <div className="lg:w-1/3 flex flex-col gap-4">
        <div>
          <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          {project.client && (
            <p className="text-muted-foreground text-sm font-medium">
              Client: <span className="text-foreground">{project.client}</span>
            </p>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.stack.slice(0, 3).map(tech => (
            <Tag key={tech} variant="outline">{tech}</Tag>
          ))}
          {project.stack.length > 3 && (
            <Tag variant="muted">+{project.stack.length - 3}</Tag>
          )}
        </div>
      </div>
      
      <div className="lg:w-2/3 flex flex-col justify-between">
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          {project.description}
        </p>
        
        <div className="flex items-end justify-between mt-auto">
          <div>
            <p className="text-sm font-medium text-foreground mb-1">Role</p>
            <p className="text-sm text-muted-foreground">{project.role}</p>
          </div>
          
          <Link href={`/work/${project.slug}`} className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            View case study
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
