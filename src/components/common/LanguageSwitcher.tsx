"use client";

// React
import { startTransition } from "react";

// Next.js & Next-Intl
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

// Componentes
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Lucide Icons & Utils
import { Languages } from "lucide-react";

// Constantes
import { LocalesArray } from "@/constants";
import { LocaleType } from "@/types";

export default function LanguageSwitcher() {
  const t = useTranslations("Others.LanguageSwitcher");
  const router = useRouter();
  const pathname = usePathname();
  const localeActive = useLocale();

  const handleLocaleChange = (locale: LocaleType) => {
    startTransition(() => {
      router.replace(pathname, { locale });
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"ghost"}
          className="cursor-pointer w-fit gap-2"
          aria-label={t("changeLanguage")}
        >
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="text-custom-body-2 text-primary hover:text-custom-primary transition-colors duration-200">
            {t("changeLanguage")}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {LocalesArray.map((locale) => (
          <DropdownMenuItem
            key={locale.key}
            disabled={localeActive === locale.key}
            onClick={() => handleLocaleChange(locale.key)}
          >
            {t(locale.labelKey)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
