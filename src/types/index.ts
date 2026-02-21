import { routingLocales } from "@/i18n/routing";
import { StaticImageData } from "next/image";

// Tipo para chave de tradução do next-intl
type TranslationKey = string;

// Tipo para os locales/idiomas do site
export type LocaleType = (typeof routingLocales)[number];

// Tipo para locale/idiomas do site, com uma label do idioma
export type LocalesArrayType = {
  key: LocaleType;
  labelKey: TranslationKey;
};

// Tipo para links de navegação
export type NavigationLink = {
  href: string;
  labelKey: TranslationKey;
};

// Tipo para estatísticas - Stats.tsx
export type StatType = {
  value: TranslationKey;
  title: TranslationKey;
  description: TranslationKey;
};

// Tipo para About.tsx
export type PhilosophyStatType = {
  iconSrc: StaticImageData;
  description: TranslationKey;
};
