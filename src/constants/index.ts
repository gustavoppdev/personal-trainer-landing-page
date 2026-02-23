import {
  aceLogo,
  afaaLogo,
  chatIcon,
  coachIcon,
  crownIcon,
  fireIcon,
  groupIcon,
  issaLogo,
  lightningIcon,
  nasmLogo,
  phoneIcon,
  plansIcon,
  servicesPicture,
} from "@/assets";
import {
  ContactType,
  FAQType,
  LocalesArrayType,
  NavigationLink,
  PhilosophyStatType,
  ProgramType,
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

// Array para Programs.tsx
export const ProgramsArray: ProgramType[] = [
  {
    mostPopular: false,
    title: "0.title",
    price: "0.price",
    description: "0.description",
    features: ["0.features.0", "0.features.1", "0.features.2", "0.features.3"],
  },
  {
    mostPopular: true,
    title: "1.title",
    price: "1.price",
    description: "1.description",
    features: ["1.features.0", "1.features.1", "1.features.2", "1.features.3"],
  },
  {
    mostPopular: false,
    title: "2.title",
    price: "2.price",
    description: "2.description",
    features: ["2.features.0", "2.features.1", "2.features.2", "2.features.3"],
  },
];

// Array para FAQ.tsx
export const FAQArray: FAQType[] = [
  {
    question: "0.question",
    answer: "0.answer",
  },
  {
    question: "1.question",
    answer: "1.answer",
  },
  {
    question: "2.question",
    answer: "2.answer",
  },
  {
    question: "3.question",
    answer: "3.answer",
  },
  {
    question: "4.question",
    answer: "4.answer",
  },
  {
    question: "5.question",
    answer: "5.answer",
  },
];

export const ContactCTA: ContactType[] = [
  { icon: chatIcon, title: "0.title", description: "0.description" },
  {
    icon: phoneIcon,
    title: "1.title",
    description: "1.description",
  },
];
