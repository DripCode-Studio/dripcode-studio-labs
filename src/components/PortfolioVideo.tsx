"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface PortfolioVideoProps {
  title: string;
  youtubeId: string;
  client?: string;
  className?: string;
}

function toDomain(name: string): string {
  return (
    name
      .toLowerCase()
      .replace(/['']/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .replace(/-(com|net|org)$/, ".$1") + ".com"
  );
}

export function PortfolioVideo({
  title,
  youtubeId,
  client,
  className,
}: PortfolioVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imgError, setImgError] = useState(false);

  const domain = toDomain(client || title);
  const thumbnailSrc = imgError
    ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
    : `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;

  return (
    <div className={cn("relative w-full", className)}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card shadow-2xl shadow-black/20">
              <div className="flex items-center gap-3 px-4 py-3 border-b border-border/50 bg-background/80 backdrop-blur-sm">
                <div className="flex gap-1.5" aria-hidden="true">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 flex justify-center min-w-0">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-secondary/50 text-[11px] text-muted-foreground font-mono truncate max-w-[300px] w-full justify-center">
                    <svg
                      className="w-3 h-3 flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span className="truncate">{domain}</span>
                  </div>
                </div>
              </div>

              <div className="relative aspect-video bg-black overflow-hidden">
                {!isPlaying ? (
                  <>
                    <img
                      src={thumbnailSrc}
                      alt={`${title} project walkthrough thumbnail`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={() => setImgError(true)}
                    />
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="absolute inset-0 flex flex-col items-center justify-center gap-4 group/btn"
                      aria-label={`Play ${title} project walkthrough video`}
                      type="button"
                    >
                      <span className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover/btn:bg-white/20 group-hover/btn:scale-110 transition-all duration-300">
                        <Play
                          className="w-6 h-6 sm:w-7 sm:h-7 text-white ml-0.5"
                          fill="white"
                        />
                      </span>
                      <span className="text-white/80 text-sm font-medium tracking-wide">
                        Watch Project Walkthrough
                      </span>
                    </button>
                  </>
                ) : (
                  <iframe
                    src={embedUrl}
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    title={`${title} project walkthrough`}
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
