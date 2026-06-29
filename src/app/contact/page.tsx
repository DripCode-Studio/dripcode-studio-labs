"use client";

import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <Layout>
      <Section className="max-w-2xl mx-auto pt-24 sm:pt-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight mb-4">Contact</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Have a project in mind or want to discuss a system architecture? Reach out. No fluff, just signal.
          </p>

          <a href="mailto:dripcodestudio@gmail.com">
            <Button size="lg" className="w-full sm:w-auto font-mono text-base">
              dripcodestudio@gmail.com
            </Button>
          </a>
        </motion.div>
      </Section>
    </Layout>
  );
}
