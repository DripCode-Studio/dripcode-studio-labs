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
  youtubeId?: string;
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
    youtubeId: "0L4C_oFWM_o",
  },
  {
    slug: "aurelia-estates",
    title: "Aurelia Estates",
    client: "Aurelia Estates",
    description:
      "A luxury real estate landing page showcasing exclusive off-market properties with a dark, sophisticated aesthetic. Features animated sections, property gallery, agent profiles, and investment insights — all with smooth Framer Motion transitions.",
    role: "Frontend Developer",
    stack: [
      "Next.js",
      "Tailwind CSS v4",
      "Framer Motion",
      "shadcn/ui",
      "TypeScript",
      "React Query",
    ],
    result:
      "A performant, responsive landing page deployed on Vercel with a premium brand identity.",
    year: "2025",
    image: "/images/work/aurelia-estates_showcase.png",
    youtubeId: "a69u2jVEHS0",
  },
  {
    slug: "ember-and-oak",
    title: "Ember & Oak — Luxury Fine Dining Landing Page",
    client: "Ember & Oak",
    description:
      "A high-end restaurant landing page featuring a full-screen parallax hero, interactive gallery lightbox, reservation form with zod validation, and 15 meticulously crafted sections. Dark theme with gold and copper accents, smooth scroll navigation, and micro-animations throughout.",
    role: "Frontend Developer",
    stack: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS v4",
      "shadcn/ui",
      "Framer Motion",
      "React Hook Form",
      "Zod",
      "TanStack Query",
    ],
    result:
      "Fully responsive, static-exported site scoring 240 kB initial load, ready for Vercel deployment.",
    year: "2026",
    image: "/images/work/ember-and-oak_showcase.png",
    youtubeId: "V3cuf7Ytxvg",
  },
  {
    slug: "iron-forge-gym",
    title: "Iron Forge Gym",
    client: "Iron Forge Fitness",
    description:
      "Premium fitness landing page featuring animated sections, interactive pricing, class schedule, testimonials carousel, and trainer showcase — built for performance and Vercel deployment.",
    role: "Full-Stack Developer",
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "shadcn/ui",
      "Framer Motion",
      "Embla Carousel",
      "Lucide React",
    ],
    result:
      "Fully static, sub-200 kB initial load, 100/100 Lighthouse potential",
    year: "2026",
    image: "/images/work/iron-forge-gym_showcase.png",
    youtubeId: "mm1jlnk1zY4",
  },
  {
    slug: "morrow-coffee-co",
    title: "Morrow Coffee Co.",
    client: "Morrow Coffee Co.",
    description:
      "A brand-focused landing page for a specialty coffee company. The brief was to create a warm, tactile digital presence that reflects the brand's philosophy of slow moments and exceptional coffee. Features include a hero section with parallax imagery, a featured menu grid, a subscription tier comparison, an embedded Google Maps location block, and a newsletter sign-up — all wrapped in a neutral, earthy palette with serif typography and scroll-triggered micro-animations.",
    role: "Front-end Development & UI Implementation",
    stack: [
      "Next.js 15 (App Router)",
      "Tailwind CSS v4",
      "Framer Motion",
      "shadcn/ui (Radix primitives)",
      "Lucide React",
      "Google Maps Embed API",
    ],
    result:
      "A performant, statically-generated landing page that loads fast, scores well on Lighthouse, and is deployable to Vercel with zero configuration. The original Replit monorepo was fully restructured into a clean Next.js project, removing unused dependencies and reducing the bundle to ~155 kB first load.",
    year: "2026",
    image: "/images/work/morro-coffee-co_showcase.png",
    youtubeId: "yObL_UBPjV8",
  },
  {
    slug: "wanderly-travel",
    title: "Wanderly Travel",
    description:
      "A premium travel landing page featuring 15 distinct sections with immersive hero experience, destination showcases, tour packages, deal carousels, testimonials, and travel planning tools — all animated with Framer Motion and styled with a custom Tailwind v4 design system.",
    role: "Frontend Developer & Designer",
    stack: [
      "Next.js 15",
      "Tailwind CSS v4",
      "shadcn/ui",
      "Radix UI",
      "Framer Motion",
      "Lucide React",
      "TanStack React Query",
      "TypeScript",
    ],
    result:
      "Fully responsive static site deployed on Vercel with zero-config, achieving fast load times through Next.js static generation and optimized asset delivery.",
    year: "2025",
    image: "/images/work/wanderly-travel_showcase.png",
    youtubeId: "YXAG2LVUI7s",
  },
];
