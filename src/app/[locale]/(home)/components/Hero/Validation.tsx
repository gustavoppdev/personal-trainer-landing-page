// Next.js & Next-Intl
import Image from "next/image";
import { useTranslations } from "next-intl";

// Assets
import { avatar1, avatar2, starIcon } from "@/assets";

// Lucide Icons & Componentes
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Validation = () => {
  const t = useTranslations("Sections.Hero");
  const tAlt = useTranslations("Others.Alt");

  return (
    <div className="text-custom-body-3 flex flex-col gap-6">
      {/* Garantia */}
      <Button className="bg-black/80 hover:bg-black/90 dark:bg-white/90 dark:hover:bg-white/90 transition-colors duration-300 rounded-3xl flex items-center gap-x-2 py-2 px-4 text-primary-foreground w-fit">
        <ShieldCheck className="size-6" />
        <p>{t("guarantee")}</p>
      </Button>

      <div className="flex gap-2 items-center">
        {/* Avatares */}
        <div className="bg-black/80 dark:bg-white/90 rounded-[22px] flex items-center gap-2 p-[2px]">
          <Image
            src={avatar1}
            alt={tAlt("avatars.1")}
            width={40}
            height={40}
            sizes="40px"
            className="object-cover"
          />
          <Image
            src={avatar2}
            alt={tAlt("avatars.2")}
            width={40}
            height={40}
            sizes="40px"
            className="object-cover"
          />
        </div>

        {/* Avaliação e confiança */}
        <div className="text-white">
          <p>{t("trusted")}</p>
          <p className="flex items-center gap-1">
            <Image
              src={starIcon}
              alt={tAlt("icons.star")}
              width={19}
              height={19}
            />
            {t("rating")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Validation;
