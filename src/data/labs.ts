export interface Lab {
  name: string;
  desc: string;
  tag: string;
  href: string;
  status?: "active" | "soon";
}

export const labs: Lab[] = [
  {
    name: "Flow Forge",
    desc: "Visual workflow builder for automating repetitive tasks.",
    tag: "automation",
    href: "https://github.com/DripCode-Studio",
    status: "active",
  },
  {
    name: "Schema Lens",
    desc: "Real-time database schema visualizer and diff tool.",
    tag: "developer-tools",
    href: "https://github.com/DripCode-Studio",
    status: "active",
  },
  {
    name: "Response Kit",
    desc: "Design and test API response payloads instantly.",
    tag: "api",
    href: "https://github.com/DripCode-Studio",
    status: "active",
  },
  {
    name: "Deploy Pulse",
    desc: "Monitor deployments with a single dashboard.",
    tag: "devops",
    href: "https://github.com/DripCode-Studio",
    status: "soon",
  },
  {
    name: "Token Vault",
    desc: "Secure environment variable manager for teams.",
    tag: "security",
    href: "https://github.com/DripCode-Studio",
    status: "active",
  },
  {
    name: "Log Drift",
    desc: "Streaming log viewer with smart alerting.",
    tag: "monitoring",
    href: "https://github.com/DripCode-Studio",
    status: "soon",
  },
];
