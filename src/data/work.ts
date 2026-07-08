export interface WorkItem {
  slug: string;
  title: string;
  client?: string;
  description: string;
  role: string;
  stack: string[];
  result?: string;
  year?: string;
  image?: string;
}

export const works: WorkItem[] = [
  {
    slug: "atlas-build-group",
    title: "Atlas Build Group",
    client: "Atlas Build Group",
    description:
      "A modern, responsive landing page for an industrial construction and engineering firm. Features 17 distinct sections including hero with animated stats, project masonry gallery, case study spotlight, comparison table, animated counters, team cards, and FAQ accordion — all with staggered scroll animations and a cohesive dark industrial aesthetic.",
    role: "Frontend Development & UI Implementation",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "shadcn/ui",
      "Lucide",
    ],
    result:
      "Fully responsive static site with perfect Lighthouse scores, SEO metadata, JSON-LD structured data, and dynamic sitemap generation.",
    year: "2025",
    image: "/images/work/atlas-build-group_showcase.png",
  },
];
