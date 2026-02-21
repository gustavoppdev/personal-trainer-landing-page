// Next.js & Next-Intl
import Image from "next/image";
import { useTranslations } from "next-intl";

// Tipos
import { ServiceFeatureType } from "@/types";

const emphasisSubtitleTypography =
  "text-body-1 leading-body-1 tracking-body-1 lg:text-heading-1 lg:leading-heading-1 lg:tracking-heading-1 font-medium";

const FeatureCard = ({
  icon,
  title,
  description,
  image,
  type,
}: ServiceFeatureType) => {
  const t = useTranslations("Sections.Services.features");
  // Lógica de Classes
  const isEmphasis = type === "emphasis";
  const isWithImage = type === "withImage";

  // Estilo do rótulo/ícone
  const iconClasses = isEmphasis ? emphasisSubtitleTypography : "text-base";

  // Estrutura principal do card (cor e cantos)
  const baseCardClasses =
    "p-6 rounded-3xl bg-custom-black-60 text-white cursor-pointer transition-all duration-300 hover:shadow-md shadow-custom-primary/50";

  const renderedIcon =
    typeof icon === "object" ? (
      <Image src={icon} alt={title} width={24} height={24} />
    ) : (
      icon
    );

  // Se for o card com imagem, a estrutura interna é um Grid
  // Aplica as classes de hover no contêiner principal
  if (isWithImage) {
    return (
      <div
        className={`${baseCardClasses} grid grid-cols-1 lg:grid-cols-2 gap-4 group `}
      >
        {/* Lado Esquerdo (Texto) */}
        <div className="flex flex-col justify-between">
          <span className="mb-4 block">{renderedIcon}</span>

          <div className="space-y-1">
            <div className="w-fit space-y-0.5">
              <h3 className="text-custom-body-1">{t(title)}</h3>
              <div className="w-0 h-px bg-custom-primary transition-all duration-300 group-hover:w-full"></div>
            </div>
            <p className="text-custom-body-3 text-custom-white-80 opacity-80">
              {t(description)}
            </p>
          </div>
        </div>

        {/* Lado Direito (Imagem) */}
        {image && (
          <div
            className={`relative rounded-xl overflow-hidden lg:rounded-none w-full h-[240px] lg:h-auto lg:aspect-117/184`}
          >
            <Image
              src={image}
              alt={t(title)}
              fill
              sizes="(max-width: 640px) calc(100vw - 2.5rem), (max-width: 768px) 560px, (max-width: 1024px) 640px, (max-width: 1280px) 220px, (max-width: 1536px) 272px, 284px"
              className="object-cover object-[50%_10%]"
              placeholder="blur"
              quality={90}
            />
          </div>
        )}
      </div>
    );
  }

  // Cards Padrão e Ênfase
  // Aplica as classes de hover no contêiner principal
  return (
    <div className={`${baseCardClasses} flex flex-col justify-between group`}>
      {/* Rótulo / Ícone (Com estilo condicional) */}
      <span className={`${iconClasses} mb-4 block`}>{renderedIcon}</span>

      <div className="space-y-1">
        <div className="w-fit space-y-0.5">
          <h3 className="text-custom-body-1">{t(title)}</h3>
          <div className="w-0 h-px bg-custom-primary transition-all duration-300 group-hover:w-full"></div>
        </div>
        <p className="text-custom-body-3 text-custom-white-80 opacity-80">
          {t(description)}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
