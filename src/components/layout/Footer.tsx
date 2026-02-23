// Next.js & Next-Intl
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// Componentes
import { Button } from "@/components/ui/button";

// Assets & Constantes
import { djectLogo, rachelLogo } from "@/assets";
import { FooterSocialLinks, NavigationLinks } from "@/constants";

const Footer = () => {
  const t = useTranslations("Layout.Footer");
  const tAlt = useTranslations("Others.Alt");

  return (
    <div className="section-container">
      <footer className="my-14 rounded-3xl bg-custom-black-60 p-6 lg:p-10 flex flex-col justify-between text-white gap-8 h-auto lg:min-h-[450px]">
        <div className="flex flex-col items-center gap-7 lg:flex-row lg:justify-between lg:items-start">
          <Link href={"/"} aria-label={tAlt("home")}>
            <Image
              src={rachelLogo}
              alt="Rachel Stone"
              width={68}
              height={22}
              sizes="68px"
            />
          </Link>

          <div className="flex flex-col gap-8 items-center lg:items-end">
            {/* Links de Navegação */}
            <ul className="flex flex-col gap-4 lg:gap-6 text-center lg:flex-row lg:text-left">
              {NavigationLinks.map((link) => (
                <li key={link.labelKey}>
                  <Button
                    variant={"link"}
                    size={"sm"}
                    className="text-white text-custom-body-2"
                  >
                    <Link href={link.href}>{t(link.labelKey)}</Link>
                  </Button>
                </li>
              ))}
            </ul>
            {/* Ícones de Mídias Sociais */}
            <ul className="flex items-center gap-4">
              {FooterSocialLinks.map((link) => (
                <li key={link.alt}>
                  <Button
                    size={"icon"}
                    className="bg-black dark:hover:bg-black/30 rounded-full"
                  >
                    <Image
                      src={link.icon}
                      alt={link.alt}
                      width={16}
                      height={16}
                      sizes="16px"
                    />
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Parte Inferior */}
        <div className="flex flex-col text-center items-center lg:flex-row lg:justify-between lg:text-left lg:items-start gap-4 text-custom-body-3">
          <p>{t("copyright")}</p>
          <p className="flex items-center gap-2">
            {t("createdBy")}
            <Link href="https://www.figma.com/@djectstudio" target="_blank">
              <Image
                src={djectLogo}
                alt="Dject Studio"
                width={88}
                height={18}
                sizes="88px"
              />
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
