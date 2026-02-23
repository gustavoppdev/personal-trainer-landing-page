// Next.js & Next-Intl
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// Componentes
import { Button } from "@/components/ui/button";

// Tipos & Lucide Icons
import { ContactType } from "@/types";
import { ArrowRight } from "lucide-react";

interface Props {
  contactType: ContactType;
}

export const ContactCard = ({ contactType }: Props) => {
  const t = useTranslations("Sections.Contact.cards");
  const tAlt = useTranslations("Others.Alt");

  return (
    <Link
      href={"#"}
      className="bg-custom-white-80 dark:bg-custom-black-60 rounded-3xl p-6 flex flex-col justify-between group transition-all duration-300 hover:shadow-lg hover:scale-[1.01]"
    >
      <Image
        src={contactType.icon}
        alt={`${contactType.title} icon`}
        width={32}
        height={32}
        sizes="32px"
        className="mb-5 dark:invert"
      />

      <div className="flex justify-between items-center">
        <div>
          <h3 className="mb-1 text-custom-body-1">{t(contactType.title)}</h3>
          <p className="text-custom-body-3 text-custom-black-50">
            {t(contactType.description)}
          </p>
        </div>

        <Button size={"icon-lg"} aria-label={tAlt("accessBtn")}>
          <ArrowRight className="size-5" />
        </Button>
      </div>
    </Link>
  );
};
