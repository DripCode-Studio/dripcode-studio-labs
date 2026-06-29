"use client";

import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { Layout } from "@/components/Layout";
import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { works } from "@/data/work";
import { Tag } from "@/components/Tag";
import { Button } from "@/components/Button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = works.find(w => w.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <Layout>
      <CaseStudyLayout>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/work" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-12 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Work
          </Link>
          
          <header className="mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">{project.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-sm">
              {project.client && (
                <div>
                  <span className="text-muted-foreground block mb-1">Client</span>
                  <span className="font-medium">{project.client}</span>
                </div>
              )}
              <div>
                <span className="text-muted-foreground block mb-1">Role</span>
                <span className="font-medium">{project.role}</span>
              </div>
              <div>
                <span className="text-muted-foreground block mb-1">Year</span>
                <span className="font-medium">{project.year}</span>
              </div>
            </div>
          </header>

          {project.image && (
            <div className="w-full aspect-video rounded-xl mb-16 overflow-hidden border border-border/50">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          )}

          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              {project.description}
            </p>
            
            <h3 className="text-2xl font-bold tracking-tight mt-12 mb-4">Context</h3>
            <p>
              This project was born from a clear operational need. The existing workflow relied on spreadsheets, manual handoffs, and tribal knowledge — a setup that worked at small scale but became a bottleneck as the organization grew.
            </p>

            <h3 className="text-2xl font-bold tracking-tight mt-12 mb-4">Problem</h3>
            <p>
              The core challenge was fragmentation. Data lived in multiple silos, there was no single source of truth, and every reporting cycle required hours of manual reconciliation. The team needed a unified system that could serve as the operational backbone.
            </p>

            <h3 className="text-2xl font-bold tracking-tight mt-12 mb-4">Solution & Features</h3>
            <ul className="space-y-2 mt-4">
              <li>Architected a distributed event-driven system</li>
              <li>Implemented real-time data sync with WebSockets</li>
              <li>Designed a high-throughput ingestion pipeline</li>
              <li>Created a modular, extensible UI framework</li>
              <li>Achieved sub-100ms P99 latency across all read paths</li>
            </ul>

            <h3 className="text-2xl font-bold tracking-tight mt-12 mb-6">Tech Stack</h3>
            <div className="flex flex-wrap gap-2 not-prose">
              {project.stack.map(tech => (
                <Tag key={tech} variant="outline">{tech}</Tag>
              ))}
            </div>

            {project.result && (
              <>
                <h3 className="text-2xl font-bold tracking-tight mt-12 mb-4">Results</h3>
                <div className="p-6 rounded-lg bg-primary/10 border border-primary/20 text-primary-foreground not-prose">
                  <p className="font-mono text-lg">{project.result}</p>
                </div>
              </>
            )}
          </div>

          <div className="pt-12 border-t border-border/40 text-center">
            <h3 className="text-2xl font-bold tracking-tight mb-4">Need something like this built?</h3>
            <p className="text-muted-foreground mb-8">We&apos;re currently taking on select client projects.</p>
            <Link href="/contact">
              <Button size="lg" className="gap-2 group">
                Get in touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </CaseStudyLayout>
    </Layout>
  );
}
