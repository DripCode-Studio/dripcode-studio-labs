"use client";

import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";
import { WorkGrid } from "@/components/WorkGrid";
import { ProjectCard } from "@/components/ProjectCard";
import { works } from "@/data/work";
import { motion } from "framer-motion";

export default function WorkPage() {
  return (
    <Layout>
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl mb-16"
        >
          <h1 className="text-4xl font-bold tracking-tight mb-4">Client Work</h1>
          <p className="text-lg text-muted-foreground">
            Production builds and engineering work we've delivered for clients.
          </p>
        </motion.div>
        
        {works.length > 0 ? (
          <WorkGrid>
            {works.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </WorkGrid>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="text-lg text-muted-foreground mb-2">No client work listed yet.</p>
            <p className="text-sm text-muted-foreground/60">Case studies are being written. Check back soon.</p>
          </div>
        )}
      </Section>
    </Layout>
  );
}
