// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import Image from "next/image";

// Assets
import { avatar3, starIcon } from "@/assets";

const titleTypography =
  "text-heading-6 leading-heading-6 tracking-heading-6 lg:text-heading-3 lg:leading-heading-3 lg:tracking-heading-3 font-medium";

const CustomerQuote = () => {
  const t = useTranslations("Sections.CustomerQuote");
  const tAlt = useTranslations("Others.Alt");

  return (
    <section className="section-container place-content-start lg:place-content-center py-14 lg:py-24">
      <div className="flex flex-col gap-4 max-w-lg lg:max-w-[808px] lg:mx-auto">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <Image
              key={index}
              src={starIcon}
              alt={tAlt("icons.star")}
              width={21}
              height={21}
              sizes="21px"
              className="object-cover"
            />
          ))}
        </div>

        <h2 className={titleTypography}>{t("quote")}</h2>

        <div className="flex items-center gap-4">
          <Image
            src={avatar3}
            alt={tAlt("avatars.3")}
            width={64}
            height={64}
            sizes="64px"
            className="object-cover"
          />
          <div>
            <h3 className="text-custom-body-1">{t("author")}</h3>
            <p className="text-custom-body-3 text-custom-black-50">
              {t("authorDescription")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerQuote;
