// Next-Intl
import { useTranslations } from "next-intl";

// Tipos
import { StatType } from "@/types";

type Props = {
  stat: StatType;
};

const StatCard = ({ stat }: Props) => {
  const t = useTranslations("Sections.Stats");

  return (
    <li className="flex flex-col gap-4">
      <h2 className="text-custom-heading-2">{t(stat.value)}</h2>

      <div className="max-w-[222px] space-y-1">
        <h3 className="text-custom-body-1">{t(stat.title)}</h3>
        <p className="text-custom-body-3 text-custom-black-50">
          {t(stat.description)}
        </p>
      </div>
    </li>
  );
};

export default StatCard;
