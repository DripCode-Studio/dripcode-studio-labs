"use client";

import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <Layout>
      <Section className="max-w-3xl mx-auto pt-24 sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight mb-8">About</h1>
          
          <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
            <p>
              DripCode is a specialized engineering studio focused on building high-performance systems and polished interfaces. We operate at the intersection of deep technical architecture and precise product design.
            </p>
            <p>
              We believe that great software feels inevitable. It shouldn&apos;t feel constructed; it should feel like it always existed. We achieve this through systems thinking, rigorous typing, and an obsessive attention to the details that most teams ignore.
            </p>
            <p>
              Our internal lab produces developer tools that solve our own friction points. Our client work applies those same tools and principles to solve complex business problems at scale.
            </p>
          </div>
        </motion.div>
      </Section>
    </Layout>
  );
}
