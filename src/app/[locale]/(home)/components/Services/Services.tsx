// Componentes
import FeatureCard from "./FeatureCard";
import SectionTitle from "@/components/common/SectionTitle";

// Constantes
import { ServicesFeatures } from "@/constants";

export const Services = () => {
  const gridCards = ServicesFeatures.filter((f) => f.type !== "withImage");
  const imageCard = ServicesFeatures.find((f) => f.type === "withImage");

  const featuredCard = gridCards[0]; // NYC
  const smallCards = gridCards.slice(1); // Online e Nutrition

  return (
    <section
      id="services"
      className="section-container py-14 lg:py-24 flex flex-col lg:flex-row gap-10 xl:gap-20 2xl:gap-38 lg:items-center"
    >
      {/* CTA (Lado Esquerdo) */}
      <SectionTitle
        namespace="Sections.Services"
        styles="text-white lg:max-w-[432px]"
      />

      {/* Features (Lado Direito) */}
      <div className="flex flex-col gap-4 lg:grow">
        {/* BLOCO 1: Estrutura 1 + 2 (3 Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Card de Destaque (NYC) - Ocupa 1/2 coluna */}
          {featuredCard && (
            <FeatureCard key={featuredCard.title} {...featuredCard} />
          )}

          {/* Cards Menores (Online e Nutrition) - Ocupa 1/2 coluna */}
          <div className="grid grid-cols-1 gap-4">
            {smallCards.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>

        {/* BLOCO 2: Card de Imagem - Ocupa a largura total (2/2 colunas) */}
        {imageCard && (
          <div className="lg:col-span-2">
            <FeatureCard key={imageCard.title} {...imageCard} />
          </div>
        )}
      </div>
    </section>
  );
};
