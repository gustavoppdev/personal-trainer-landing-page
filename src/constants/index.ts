import {
  aceLogo,
  afaaLogo,
  coachIcon,
  crownIcon,
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
  StepType,
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
    alt: "fire",
  },
  {
    iconSrc: lightningIcon,
    description: "1.title",
    alt: "lightning",
  },
  {
    iconSrc: crownIcon,
    description: "2.title",
    alt: "crown",
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

// Array para HowWorks.tsx
export const HowWorksStepsArray: StepType[] = [
  {
    index: "0.index",
    title: "0.title",
    description: "0.description",
  },
  {
    index: "1.index",
    title: "1.title",
    description: "1.description",
  },
  {
    index: "2.index",
    title: "2.title",
    description: "2.description",
  },
  {
    index: "3.index",
    title: "3.title",
    description: "3.description",
  },
  {
    index: "4.index",
    title: "4.title",
    description: "4.description",
  },
];
