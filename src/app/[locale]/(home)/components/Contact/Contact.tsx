// Componentes
import { ContactCard } from "./ContactCard";
import SectionTitle from "@/components/common/SectionTitle";
import FormContact from "./FormContact";

// Constantes
import { ContactCTA } from "@/constants";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="section-container py-14 lg:py-24 space-y-8"
    >
      {/* Text */}
      <SectionTitle
        namespace="Sections.Contact"
        withButton={false}
        styles="lg:max-w-lg"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="grid grid-cols-1 gap-4">
          {ContactCTA.map((cta, index) => (
            <ContactCard key={index} contactType={cta} />
          ))}
        </div>

        <FormContact />
      </div>
    </section>
  );
};
