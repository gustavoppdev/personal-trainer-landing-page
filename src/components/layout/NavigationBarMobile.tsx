"use client";

// React
import { useState } from "react";

// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

// Componentes
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../common/ModeToggle";
import ButtonPrimary from "@/components/common/ButtonPrimary";
import LanguageSwitcher from "../common/LanguageSwitcher";

// Constantes
import { NavigationLinks } from "@/constants";

// Lucide Icons & Assets
import { Menu } from "lucide-react";
import { rachelLogo } from "@/assets";

const NavigationBarMobile = () => {
  const t = useTranslations("Layout.NavigationBar");
  const tAlt = useTranslations("Others.Alt");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          className="bg-transparent dark:bg-transparent"
          size={"icon-lg"}
          aria-label={t("alt.openMenu")}
        >
          <Menu className="size-6 dark:invert" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="bg-primary-foreground border-custom-black-80 flex flex-col justify-between w-[90vw] max-w-xs sm:max-w-sm lg:max-w-[400px] p-6 text-primary"
      >
        {/* Top */}
        <SheetHeader className="pl-0">
          <Link
            href={"/"}
            aria-label={tAlt("home")}
            onClick={() => setIsOpen(false)}
          >
            <Image
              src={rachelLogo}
              alt="Rachel"
              width={90}
              height={29}
              sizes="90px"
              className="object-cover invert dark:invert-0"
            />
          </Link>
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <SheetDescription className="sr-only">Menu</SheetDescription>
        </SheetHeader>

        {/* Links */}
        <div className="grow mt-8">
          <ul className="flex flex-col space-y-4 h-full">
            {NavigationLinks.map((link) => (
              <li key={link.labelKey}>
                <Link
                  href={link.href}
                  aria-label={t(link.labelKey)}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-custom-body-1 text-primary hover:text-custom-primary transition-colors duration-200"
                >
                  {t(link.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex h-full items-end">
          <div className="flex flex-col gap-4 ">
            <ModeToggle />

            <LanguageSwitcher />
          </div>
        </div>

        {/* Bottom */}
        <div className="w-full pt-4 border-t">
          <ButtonPrimary styles="w-full" onClick={() => setIsOpen(false)}>
            {t("cta.title")}
          </ButtonPrimary>
          <p className="text-custom-body-3 text-primary mt-2">
            {t("cta.introduction")}
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavigationBarMobile;
