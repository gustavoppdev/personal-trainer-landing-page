// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import Image from "next/image";

// Constantes & Assets
import { PhilosophyStatsArray } from "@/constants";
import { aboutImage, signature } from "@/assets";

// Componentes
import AboutCard from "./AboutCard";

const titleTypography =
  "text-heading-6 leading-heading-6 tracking-heading-6 lg:text-heading-3 lg:leading-heading-3 lg:tracking-heading-3 font-medium";

export const About = () => {
  const t = useTranslations("Sections.About");

  return (
    <section
      id="about"
      className="section-container py-14 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10"
    >
      {/* Imagem */}
      <div className="relative aspect-1200/1589 rounded-[40px] overflow-hidden">
        <Image
          src={aboutImage}
          alt="Rachel Stone"
          fill
          sizes="(max-width: 640px) calc(100vw - 1rem), (max-width: 768px) 608px, (max-width: 1024px) 688px, (max-width: 1280px) 452px, (max-width: 1536px) 540px, 588px"
          placeholder="blur"
          blurDataURL={aboutImage.src}
          className="object-cover"
          quality={90}
        />
      </div>

      {/* Textos */}
      <div className="flex flex-col justify-between">
        <div>
          <p className="text-custom-body-3 text-custom-black-50">
            {t("introduction")}
          </p>
          <h2 className={titleTypography}>{t("headline")}</h2>

          <div className="space-y-4 text-custom-body-3 mt-3">
            <p>{t("description1")}</p>
            <p>{t("description2")}</p>
            <p>{t("description3")}</p>
          </div>

          <div className="relative flex justify-end mt-20 md:mt-12.5 lg:mt-17">
            <Image
              src={signature}
              alt="Rachel Stone"
              width={148}
              height={32}
              sizes="148px"
              className="dark:invert"
            />
          </div>
        </div>

        {/* Filosofia */}
        <div className="space-y-4">
          <h3 className="text-custom-body-1">{t("stats.title")}</h3>

          <ul className="flex flex-col lg:flex-row gap-4">
            {PhilosophyStatsArray.map((stat) => (
              <AboutCard key={stat.description} stat={stat} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
