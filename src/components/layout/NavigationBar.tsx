// Next.js & Next-Intl
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

// Assets
import { rachelLogo } from "@/assets";

// Components
import NavigationBarMobile from "./NavigationBarMobile";

const NavigationBar = () => {
  const t = useTranslations("Others.Alt");

  return (
    <header className="relative section-container py-4 lg:py-10">
      <nav className="bg-black/65 py-2 px-4 flex justify-between items-center gap-2 w-fit rounded-[30px] hover:bg-black/80 transition-colors duration-300 fixed z-50">
        <Link href={"/"} aria-label={t("home")}>
          <Image
            src={rachelLogo}
            alt="Rachel"
            width={68}
            height={22}
            sizes="68px"
            priority
            className="object-contain"
          />
        </Link>

        <NavigationBarMobile />
      </nav>
    </header>
  );
};

export default NavigationBar;
