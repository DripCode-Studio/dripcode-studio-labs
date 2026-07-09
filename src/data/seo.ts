export interface PageSeo {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export const siteConfig = {
  name: "DripCode Studio Labs",
  url: "https://labs.dripcodestudio.com",
  description: "We build tools that work harder than anyone on your team.",
  ogImage: "/images/main-logo.png",
  twitterHandle: "@dripcodestudio",
};

export const seo: Record<string, PageSeo> = {
  "/": {
    title: "DripCode Studio Labs",
    description:
      "We build tools that work harder than anyone on your team. Engineering, automation, and systems from DripCode Studio.",
  },
  "/work": {
    title: "Client Work — DripCode Studio Labs",
    description:
      "Production builds and engineering work delivered for clients. Landing pages, dashboards, SaaS platforms, and custom systems.",
  },
  "/about": {
    title: "About — DripCode Studio Labs",
    description:
      "The engineering arm of DripCode Studio. Full-stack development, software architecture, internal tools, open source, and SaaS projects.",
  },
  "/contact": {
    title: "Contact — DripCode Studio Labs",
    description:
      "Have a project in mind? Get in touch with DripCode Studio Labs for engineering, automation, and system architecture.",
  },
  "/labs": {
    title: "Labs — DripCode Studio Labs",
    description:
      "Tools, experiments, and side projects that automate the friction out of daily life — for individuals, teams, and anyone in between.",
  },
};
