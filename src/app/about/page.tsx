"use client";

import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";
import { PageMetadata } from "@/components/PageMetadata";
import { seo } from "@/data/seo";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function AboutPage() {
  return (
    <Layout>
      <PageMetadata {...seo["/about"]} />
      <Section className="max-w-3xl mx-auto pt-24 sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground mb-6 border border-border rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Part of <a href="https://www.dripcodestudio.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">DripCode Studio</a>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight mb-8">About</h1>
          
          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              DripCode Studio Labs is the engineering arm of <a href="https://www.dripcodestudio.com" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:text-primary transition-colors">DripCode Studio</a> — a digital agency where design meets code. We specialize in building high-performance systems, polished interfaces, and tools that deliver.
            </p>
            <p>
              While the agency covers branding, design, and creative direction, Labs focuses on pure engineering: full-stack development, software architecture, internal tools, open source, and SaaS projects. We operate at the intersection of rigorous engineering and precise product design.
            </p>
            <p>
              Our internal lab produces tools that solve our own friction points. Our client work applies those same principles to complex business problems — landing pages, dashboards, SaaS platforms, and custom systems.
            </p>
            <p className="text-sm border-l-2 border-primary pl-4">
              DripCode Studio also offers: <a href="https://www.dripcodestudio.com" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:text-primary transition-colors">Branding, UI/UX Design, Web & Mobile Development, Digital Innovation</a>.
            </p>
          </div>
        </motion.div>
      </Section>
    </Layout>
  );
}
