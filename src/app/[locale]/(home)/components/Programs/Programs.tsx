// Componentes
import ProgramCard from "./ProgramCard";
import SectionTitle from "@/components/common/SectionTitle";

// Constantes
import { ProgramsArray } from "@/constants";

export const Programs = () => {
  return (
    <section
      id="programs"
      className="section-container py-14 lg:py-24 flex flex-col gap-y-10"
    >
      {/* CTA */}
      <SectionTitle
        namespace="Sections.Programs"
        withButton={false}
        styles="text-center lg:max-w-[560px] mx-auto items-center"
      />

      {/* Programs */}
      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        {ProgramsArray.map((program) => (
          <ProgramCard key={program.title} program={program} />
        ))}
      </ul>
    </section>
  );
};
