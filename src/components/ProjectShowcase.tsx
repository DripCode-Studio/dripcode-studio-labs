"use client";

import { motion } from "framer-motion";
import { PortfolioVideo } from "./PortfolioVideo";

interface ProjectShowcaseProps {
  title: string;
  description?: string;
  youtubeId: string;
  client?: string;
  role?: string;
  stack?: string[];
  year?: string;
}

export function ProjectShowcase({
  title,
  description,
  youtubeId,
  client,
  role,
  stack,
  year,
}: ProjectShowcaseProps) {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {client && (
              <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">
                {client}
              </p>
            )}

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              {title}
            </h2>

            {description && (
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                {description}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-6 text-sm mb-8">
              {role && (
                <div>
                  <span className="block text-muted-foreground text-xs mb-1 uppercase tracking-wider">
                    Role
                  </span>
                  <span className="font-medium">{role}</span>
                </div>
              )}
              {year && (
                <div>
                  <span className="block text-muted-foreground text-xs mb-1 uppercase tracking-wider">
                    Year
                  </span>
                  <span className="font-medium">{year}</span>
                </div>
              )}
            </div>

            {stack && stack.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 text-muted-foreground backdrop-blur-sm hover:bg-white/10 hover:text-foreground transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </div>

        <div className="order-1 lg:order-2">
          <PortfolioVideo
            title={title}
            youtubeId={youtubeId}
            client={client}
          />
        </div>
      </div>
    </section>
  );
}
