// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import Image from "next/image";

// Componentes
import ButtonPrimary from "@/components/common/ButtonPrimary";

// Assets & Types
import { check, programIcon } from "@/assets";
import { ProgramType } from "@/types";
import { cn } from "@/lib/utils";

type Props = {
  program: ProgramType;
};

const ProgramCard = ({ program }: Props) => {
  const t = useTranslations("Sections.Programs.pricing");
  return (
    <li
      className={`${
        program.mostPopular
          ? "bg-custom-primary py-8"
          : "bg-custom-white-80 dark:bg-custom-black-60 py-4"
      } rounded-3xl px-4 flex flex-col gap-8 justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-xs cursor-pointer hover:shadow-custom-primary/50`}
    >
      {/* Top */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span
            className={`${
              program.mostPopular
                ? "bg-black dark:bg-white"
                : "bg-white dark:bg-black"
            } size-11 grid place-content-center rounded-xl`}
          >
            <Image
              src={programIcon}
              alt="Icon"
              width={22}
              height={22}
              sizes="22px"
              className={cn(
                program.mostPopular &&
                  "invert brightness-0 dark:invert-0 dark:brightness-100",
                !program.mostPopular && "dark:invert",
              )}
            />
          </span>
          {program.mostPopular && (
            <span className="py-2 px-3 bg-black dark:bg-white text-white dark:text-black rounded-[8px] rounded-tr-none rounded-br-none font-medium">
              {t("mostPopular")}
            </span>
          )}
        </div>

        <h3 className="text-custom-body-1">{t(program.title)}</h3>

        <h4 className="text-custom-heading-4">
          {t(program.price)}
          <span className="text-custom-body-3">{t("perMonth")}</span>
        </h4>

        <p className="text-custom-body-3">{t(program.description)}</p>
      </div>

      {/* Bottom */}
      <ul className="flex flex-col gap-2 text-custom-body-3">
        <li>
          <h5>{t("included")}</h5>
        </li>

        {program.features.map((feature) => (
          <li key={feature} className="flex items-center gap-1">
            <Image
              src={check}
              alt="Check"
              width={22}
              height={22}
              sizes="22px"
              className="dark:invert"
            />
            {t(feature)}
          </li>
        ))}
      </ul>

      <ButtonPrimary type="outline" styles="lg:w-full text-primary">
        {t("join")}
      </ButtonPrimary>
    </li>
  );
};

export default ProgramCard;
