// Next.js & Next-Intl
import { getTranslations } from "next-intl/server";

// Components
import Validation from "./Validation";
import CTA from "./CTA";

const titleTypography =
  "text-heading-5 leading-heading-5 tracking-heading-5 lg:text-heading-1 lg:leading-heading-1 lg:tracking-heading-1";

export const Hero = async () => {
  const t = await getTranslations("Sections.Hero");

  return (
    <section className="section-container grid grid-cols-1 gap-6 lg:grid-cols-6 items-end pb-4 lg:pb-10">
      <div className="flex flex-col gap-3 lg:col-span-4">
        {/* Validação */}
        <Validation />

        {/* Título */}
        <h1 className={`${titleTypography} text-white`}>{t("headline")}</h1>
      </div>

      {/* CTA */}
      <CTA />
    </section>
  );
};
