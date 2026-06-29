"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground mb-6">
            DripCode <br className="hidden sm:block" />
            <span className="text-muted-foreground">Output Platform</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            A studio of systems, tools, and production builds. We experiment in the lab, we execute for clients.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/labs" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto font-semibold gap-2 group">
                Explore Labs
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/work" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto font-semibold">
                View Client Work
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
