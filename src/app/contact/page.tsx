"use client";

import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { PageMetadata } from "@/components/PageMetadata";
import { seo } from "@/data/seo";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function ContactPage() {
  return (
    <Layout>
      <PageMetadata {...seo["/contact"]} />
      <Section className="max-w-2xl mx-auto pt-24 sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight mb-6">Contact</h1>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Have a project in mind? Whether it&apos;s an internal tool, a SaaS platform, a landing page, or a discussion about your system architecture — let&apos;s talk.
          </p>

          <div className="flex flex-col gap-4 mb-12">
            <a href="mailto:dripcodestudio@gmail.com">
              <Button size="lg" className="w-full sm:w-auto font-mono text-base">
                dripcodestudio@gmail.com
              </Button>
            </a>
          </div>

          <div className="pt-10 border-t border-border/40">
            <p className="text-sm text-muted-foreground mb-3">
              DripCode Studio Labs is part of <a href="https://www.dripcodestudio.com" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:text-primary transition-colors">DripCode Studio</a>, a full-service digital agency.
            </p>
            <a
              href="https://www.dripcodestudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Visit the agency
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </Section>
    </Layout>
  );
}
