import {
  aceLogo,
  afaaLogo,
  coachIcon,
  crowIcon,
  fireIcon,
  groupIcon,
  issaLogo,
  lightningIcon,
  nasmLogo,
  plansIcon,
  servicesPicture,
} from "@/assets";
import {
  LocalesArrayType,
  NavigationLink,
  PhilosophyStatType,
  ServiceFeatureType,
  StatType,
} from "../types";

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

// Array para About.tsx
export const PhilosophyStatsArray: PhilosophyStatType[] = [
  {
    iconSrc: fireIcon,
    description: "0.title",
  },
  {
    iconSrc: lightningIcon,
    description: "1.title",
  },
  {
    iconSrc: crowIcon,
    description: "2.title",
  },
];

// Array para LogosTicker.tsx
export const LogosTickerArray = [
  {
    image: nasmLogo,
    alt: "NASM",
  },
  {
    image: aceLogo,
    alt: "ACE",
  },
  {
    image: issaLogo,
    alt: "ISSA",
  },
  {
    image: afaaLogo,
    alt: "AFAA",
  },
];

// Array para Services.tsx
export const ServicesFeatures: ServiceFeatureType[] = [
  {
    icon: "NYC",
    title: "0.title",
    description: "0.description",
    type: "emphasis",
  },
  {
    icon: coachIcon,
    title: "1.title",
    description: "1.description",
    type: "default",
  },
  {
    icon: plansIcon,
    title: "2.title",
    description: "2.description",
    type: "default",
  },
  {
    icon: groupIcon,
    title: "3.title",
    description: "3.description",
    type: "withImage",
    image: servicesPicture,
  },
];
