// Next.js & Next-Intl
import Image from "next/image";
import { useTranslations } from "next-intl";

// Componentes
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import SectionTitle from "@/components/common/SectionTitle";

// Assets
import { afterPicture, avatar4, beforePicture, starIcon } from "@/assets";

export const Results = () => {
  const t = useTranslations("Sections.Results");
  const tAlt = useTranslations("Others.Alt.icons");

  return (
    <section
      id="results"
      className="section-container py-14 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center overflow-hidden"
    >
      {/* Texto */}
      <div className="space-y-12 lg:max-w-lg">
        <SectionTitle namespace="Sections.Results" withButton={false} />

        {/* Testimonial Card */}
        <div className="flex flex-col gap-2 mb-4.5">
          {/* Avatar */}
          <Image
            src={avatar4}
            alt="avatar"
            width={72}
            height={72}
            sizes="72px"
            className="object-cover"
          />
          <div>
            <h3 className="text-custom-body-1">{t("author")}</h3>
            <p className="text-custom-body-3 text-custom-black-50">
              {t("authorDescription")}
            </p>
          </div>
        </div>

        <div className="flex gap-1 mb-4 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Image
              key={i}
              src={starIcon}
              alt={tAlt("star")}
              width={21}
              height={21}
              sizes="21px"
            />
          ))}
        </div>

        <blockquote className="text-custom-body-2">{t("quote")}</blockquote>
      </div>

      {/* Slider Antes/Depois */}
      <div className="relative">
        {/* Elemento decorativo de fundo */}
        <div className="absolute -inset-4 bg-gray-100 dark:bg-neutral-800 rounded-4xl -z-10 rotate-2 scale-105 opacity-50" />

        <BeforeAfterSlider
          beforeImage={beforePicture}
          afterImage={afterPicture}
          beforeLabel={t("before")}
          afterLabel={t("after")}
        />
      </div>
    </section>
  );
};
