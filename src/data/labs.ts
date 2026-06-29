export interface Lab {
  name: string;
  desc: string;
  tag: string;
  href: string;
  soon: boolean;
}

export const labs: Lab[] = [
  {
    name: "Sidequest RPG",
    desc: "Real-life quest board to boost your productivity and make life more fun",
    tag: "Productivity",
    href: "https://sidequest-rpg.vercel.app/",
    soon: false,
  },
  {
    name: "AcadXP",
    desc: "Transform Your Academic Journey into an Epic Adventure",
    tag: "Education",
    href: "https://acadxp.vercel.app/",
    soon: false,
  },
  {
    name: "SimpleBudget",
    desc: "Plan your money. See where it goes.",
    tag: "Finance",
    href: "https://simplebudget-sigma.vercel.app/",
    soon: false,
  },
  {
    name: "AfroChef",
    desc: "Cook Like a True African Chef",
    tag: "Cooking",
    href: "https://afrochef.dripcodestudio.com/",
    soon: false,
  },
  {
    name: "DevKit",
    desc: "Your Ultimate Developer Resource Hub",
    tag: "Development",
    href: "https://devkit.dripcodestudio.com/",
    soon: false,
  },
  {
    name: "Timora",
    desc: "A smart student-friendly calendar and planning tool with many Calendar integration.",
    tag: "Productivity",
    href: "#",
    soon: true,
  },
  {
    name: "VoiceUp",
    desc: "Petition platform for your voice to be heard",
    tag: "Advocacy",
    href: "https://github.com/DripCode-Studio/VoiceUp/releases/tag/build-6",
    soon: false,
  },
  {
    name: "LedgerYear",
    desc: "Track your expenses, year by year",
    tag: "Finance",
    href: "http://ledgeryear.dripcodestudio.com/",
    soon: false,
  },
  {
    name: "ChronoTasks",
    desc: "Todo companion: set, track, and complete your goals as the year progresses.",
    tag: "Productivity",
    href: "https://tasks2026.dripcodestudio.com/",
    soon: false,
  },
];
