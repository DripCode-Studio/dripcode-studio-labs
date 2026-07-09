"use client";

import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";
import { LabGrid } from "@/components/LabGrid";
import { LabCard } from "@/components/LabCard";
import { labs } from "@/data/labs";
import { PageMetadata } from "@/components/PageMetadata";
import { seo } from "@/data/seo";
import { motion } from "framer-motion";

export default function LabsPage() {
  return (
    <Layout>
      <PageMetadata {...seo["/labs"]} />
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-2xl mb-12"
        >
          <h1 className="text-4xl font-bold tracking-tight mb-4">Labs</h1>
          <p className="text-lg text-muted-foreground">
            Tools, experiments, and side projects that automate the friction out of daily life — for individuals, teams, and anyone in between.
          </p>
        </motion.div>
        
        <LabGrid>
          {labs.map((lab, i) => (
            <LabCard key={lab.name} lab={lab} index={i} />
          ))}
        </LabGrid>
      </Section>
    </Layout>
  );
}
