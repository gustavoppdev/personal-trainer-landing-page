// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import Image from "next/image";

// Tipos
import { PhilosophyStatType } from "@/types";

type Props = {
  stat: PhilosophyStatType;
};

const AboutCard = ({ stat }: Props) => {
  const t = useTranslations("Sections.About.stats");
  const tAlt = useTranslations("Others.Alt.icons");
  return (
    <li
      className="p-4 flex flex-col gap-8 lg:gap-2 bg-custom-white-80 dark:bg-custom-black-60 hover:bg-custom-white-90/90 dark:hover:bg-custom-black-60/90 rounded-3xl w-full
     transition-colors duration-300"
    >
      <Image
        src={stat.iconSrc}
        alt={tAlt(stat.alt)}
        width={32}
        height={32}
        sizes="32px"
        className="dark:invert"
      />

      <p className="text-custom-body-3">{t(stat.description)}</p>
    </li>
  );
};

export default AboutCard;
