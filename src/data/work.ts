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
  context: string;
  problem: string;
  features: string[];
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
    context:
      "Atlas Build Group needed a digital presence that matched the scale and professionalism of their industrial construction and engineering operation. Their existing website was outdated, lacked responsive design, and failed to convey the breadth of their project portfolio or the sophistication of their engineering capabilities.",
    problem:
      "The primary challenge was translating heavy industrial work into a polished digital experience. The site needed to feel robust and industrial while remaining fast, accessible, and easy to navigate. With dozens of project case studies, team members, and service offerings to organize, information architecture was critical.",
    features: [
      "Hero section with real-time animated statistics counters showcasing company metrics",
      "Masonry project gallery with filtering by service category and project type",
      "Case study spotlight section with before/after comparison slider",
      "Side-by-side comparison table for service differentiation",
      "Animated achievement counters (projects completed, years in business, etc.)",
      "Team member cards with hover interactions and role-based filtering",
      "FAQ accordion with smooth expand/collapse animations",
      "17 fully responsive sections with staggered scroll-triggered animations",
    ],
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
    context:
      "Aurelia Estates is a luxury real estate firm specializing in exclusive off-market properties for high-net-worth clients. They needed a digital storefront that conveyed exclusivity and sophistication while providing a seamless browsing experience for properties that by nature have limited public visibility.",
    problem:
      "Traditional real estate portals feel transactional and generic — the opposite of what Aurelia Estates stands for. The challenge was to create a dark, sophisticated aesthetic that felt more like a private gallery than a property listing, while still delivering practical features like agent contact, property inquiries, and investment information.",
    features: [
      "Dark-themed immersive hero with full-screen property imagery and overlay text",
      "Curated property gallery with smooth lightbox transitions and high-res image support",
      "Agent profile cards with credentials, specialties, and direct contact options",
      "Investment insights section with market trends and data visualizations",
      "Animated scroll-triggered section reveals for a narrative browsing experience",
      "Responsive contact and inquiry forms integrated with the CRM pipeline",
    ],
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
    context:
      "Ember & Oak is a luxury fine dining establishment that required a digital experience as refined as their cuisine. They needed a website that could convey the ambiance, artistry, and exclusivity of the restaurant while providing practical tools like reservations and menu browsing.",
    problem:
      "The primary challenge was capturing the sensory experience of fine dining — the lighting, the plating, the atmosphere — through a screen. The site needed to feel warm and luxurious with gold and copper accents, while handling complex interactions like table reservations with date/time pickers and special dietary requirements.",
    features: [
      "Full-screen parallax hero video showcasing the dining atmosphere and kitchen",
      "Interactive gallery lightbox with high-resolution food and interior photography",
      "Reservation form with Zod validation, date/time picker, party size, and seating preferences",
      "Menu sections with category filtering, dietary icons, and price display",
      "Private dining and events page with capacity details and inquiry form",
      "15 meticulously designed sections with cohesive dark theme and metallic accents",
      "Smooth scroll navigation with section indicator dots",
      "Micro-animations on hover, scroll, and page transitions throughout",
    ],
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
    context:
      "Iron Forge Fitness is a modern gym built for serious athletes and casual fitness enthusiasts alike. They needed a high-energy digital presence that could showcase their facilities, class offerings, and membership options while driving conversions — all with the intensity that the Iron Forge brand demands.",
    problem:
      "Their previous site was a basic single-page brochure that didn't reflect the energy of the gym environment. It lacked dynamic content like class schedules, pricing transparency, and trainer information — essential tools that prospective members look for when choosing a gym.",
    features: [
      "High-energy hero section with gym footage and motivational overlay text",
      "Interactive pricing cards with feature comparison and toggle between monthly/annual",
      "Dynamic class schedule with day/time grid and instructor assignments",
      "Testimonials carousel built with Embla Carousel for smooth infinite scrolling",
      "Trainer showcase with profile cards, specialties, and certification badges",
      "Membership sign-up flow with plan selection and form validation",
      "Animated counter sections for gym stats (members, classes, trainers)",
      "Full-page scroll sections with parallax background imagery",
    ],
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
    context:
      "Morrow Coffee Co. is a specialty coffee roaster with a strong brand philosophy centered on slow living, craftsmanship, and meaningful connections. They needed a digital presence that felt warm, tactile, and intentional — a space where their story and products could shine without the noise of a typical e-commerce layout.",
    problem:
      "The existing site was a boilerplate template that didn't reflect the brand's artisanal identity. It lacked storytelling elements, made subscription discovery difficult, and had no way for customers to find their physical cafe locations — all of which were critical to the brand experience.",
    features: [
      "Parallax hero section with macro coffee photography and brand tagline overlay",
      "Featured menu grid with product cards, tasting notes, and origin stories",
      "Subscription tier comparison table with feature breakdown and CTA",
      "Embedded Google Maps location block for cafe finder with hours and contact",
      "Newsletter sign-up with brand voice copy and email validation",
      "Neutral earthy color palette with serif typography for a premium editorial feel",
      "Scroll-triggered micro-animations on product cards and section transitions",
      "Fully restructured from a Replit monorepo into a clean Next.js project structure",
    ],
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
    context:
      "Wanderly Travel is a premium travel brand curating unique destination experiences for discerning travelers. They needed a website that could inspire wanderlust through immersive visuals and storytelling, while providing practical travel planning tools to convert inspiration into bookings.",
    problem:
      "The travel industry is highly visual and competitive — Wanderly's previous site failed to capture the imagination of potential travelers. Load times were slow, imagery was poorly presented, and the booking flow was cumbersome. The site needed a complete overhaul to compete with leading travel brands.",
    features: [
      "Immersive full-screen hero with rotating destination video backgrounds",
      "Destination showcase pages with gallery, highlights, and curated itineraries",
      "Tour package cards with pricing, duration, inclusions, and availability",
      "Deal carousel for limited-time offers with countdown timers",
      "Testimonials and traveler stories section with photo and rating integration",
      "Travel planning tools including interactive itinerary builder and packing checklist",
      "Destination filter and search for easy trip discovery",
      "Responsive booking inquiry form with destination selection and date range picker",
    ],
    year: "2025",
    image: "/images/work/wanderly-travel_showcase.png",
    youtubeId: "YXAG2LVUI7s",
  },
];
