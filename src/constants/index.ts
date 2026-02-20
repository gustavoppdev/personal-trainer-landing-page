import { LocalesArrayType, NavigationLink, StatType } from "../types";

// Array para LanguageSwitcher.tsx
export const LocalesArray: LocalesArrayType[] = [
  {
    key: "pt",
    labelKey: "portuguese",
  },
  {
    key: "en",
    labelKey: "english",
  },
];

// Links de Navegação - NavigationBar - Mobile
export const NavigationLinks: NavigationLink[] = [
  { href: "/#home", labelKey: "links.home" },
  { href: "/#about", labelKey: "links.about" },
  { href: "/#services", labelKey: "links.services" },
  { href: "/#programs", labelKey: "links.programs" },
  { href: "/#results", labelKey: "links.results" },
  { href: "/#contact", labelKey: "links.contact" },
];

// Array para Stats.tsx
export const StatsArray: StatType[] = [
  {
    value: "0.value",
    title: "0.title",
    description: "0.description",
  },
  {
    value: "1.value",
    title: "1.title",
    description: "1.description",
  },
  {
    value: "2.value",
    title: "2.title",
    description: "2.description",
  },
  {
    value: "3.value",
    title: "3.title",
    description: "3.description",
  },
];
