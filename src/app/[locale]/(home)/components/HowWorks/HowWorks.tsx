// Next.js
import Image from "next/image";

// Componentes
import SectionTitle from "@/components/common/SectionTitle";
import Step from "./Step";

// Assets & Constantes
import { HowWorksStepsArray } from "@/constants";
import { howWorksPicture } from "@/assets";

export const HowWorks = () => {
  return (
    <section
      id=""
      className="section-container py-14 lg:my-24 grid grid-cols-1 lg:grid-cols-2 gap-10"
    >
      {/* CTA */}
      <div className="flex flex-col gap-6">
        <SectionTitle namespace="Sections.HowWorks" />

        <div className="relative w-full rounded-3xl overflow-hidden custom-height">
          <Image
            src={howWorksPicture}
            alt="Rachel Stone"
            fill
            sizes="(max-width: 640px) calc(100vw - 1rem), (max-width: 768px) 608px, (max-width: 1024px) 688px, (max-width: 1280px) 452px, (max-width: 1536px) 540px, 588px"
            className="object-cover"
            style={{ objectPosition: "top" }}
            placeholder="blur"
            quality={100}
          />
        </div>
      </div>

      {/* Steps */}
      <ul className="flex flex-col gap-10 justify-between font-medium items-start lg:mx-auto">
        {HowWorksStepsArray.map((step) => (
          <Step key={step.index} step={step} />
        ))}
      </ul>
    </section>
  );
};
