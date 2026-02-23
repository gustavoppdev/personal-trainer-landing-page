// Componentes
import { Accordion } from "@/components/ui/accordion";
import SectionTitle from "@/components/common/SectionTitle";
import FAQItem from "./FAQItem";

// Constantes
import { FAQArray } from "@/constants";

export const FAQ = () => {
  return (
    <section className="section-container place py-14 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Text */}
      <SectionTitle
        namespace="Sections.FAQ"
        buttonType="outline"
        buttonStyles="dark:border-white text-primary"
        styles="lg:max-w-lg gap-y-3"
      />

      {/* FAQ */}

      <Accordion type="single" collapsible className="justify-between">
        {FAQArray.map((faq, index) => (
          <FAQItem key={index} faq={faq} index={index} />
        ))}
      </Accordion>
    </section>
  );
};
