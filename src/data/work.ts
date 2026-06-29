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
    slug: "nexus-dashboard",
    title: "Nexus Dashboard",
    client: "Finova Capital",
    description:
      "A real-time financial operations dashboard replacing spreadsheets with live data. Built for a fast-moving fintech team that needed to eliminate reporting friction.",
    role: "Full-stack development, UI design",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "tRPC"],
    result: "Operations team reduced reporting time by 80%.",
    year: "2024",
    image: "https://picsum.photos/seed/nexus/1200/675",
  },
  {
    slug: "vault-cms",
    title: "Vault CMS",
    client: "ContentLayer",
    description:
      "Headless CMS designed for developer teams who need structured content workflows and version-controlled publishing.",
    role: "Architecture, full-stack development",
    stack: ["React", "Node.js", "MongoDB", "Redis", "Docker"],
    result: "Content publishing velocity increased by 3x.",
    year: "2024",
    image: "https://picsum.photos/seed/vault-cms/1200/675",
  },
  {
    slug: "pulse-monitor",
    title: "Pulse Monitor",
    client: "StreamLine Logistics",
    description:
      "Real-time logistics tracking and fleet monitoring platform connecting 200+ vehicles to a single dispatch interface.",
    role: "Frontend lead, system design",
    stack: ["Next.js", "TypeScript", "WebSocket", "Mapbox", "AWS"],
    result: "Dispatch team cut response time to incidents by 60%.",
    year: "2023",
    image: "https://picsum.photos/seed/pulse-monitor/1200/675",
  },
];
