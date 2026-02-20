// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import Image from "next/image";

// Assets & Componentes
import { calendarIcon } from "@/assets";
import ButtonPrimary from "@/components/common/ButtonPrimary";

const CTA = () => {
  const t = useTranslations("Sections.Hero");
  const tAlt = useTranslations("Others.Alt");

  return (
    <div className="text-custom-body-3 space-y-2 lg:col-span-2 ">
      <ButtonPrimary
        hero
        styles="lg:h-auto lg:w-full rounded-2xl! hover:scale-[1.01] transition-all duration-300"
      >
        <div className="flex flex-col">
          <Image
            src={calendarIcon}
            alt={tAlt("icons.calendar")}
            width={24}
            height={24}
            sizes="24px"
            className="hidden lg:block mb-2.5 min-w-6"
          />
          <span className="hidden lg:block">{t("cta.subtitle")}</span>
          {t("cta.title")}
        </div>
      </ButtonPrimary>

      <p className="text-custom-white-100">{t("cta.introduction")}</p>
    </div>
  );
};

export default CTA;
