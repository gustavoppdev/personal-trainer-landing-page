import { LocalesArrayType, NavigationLink } from "../types";

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
