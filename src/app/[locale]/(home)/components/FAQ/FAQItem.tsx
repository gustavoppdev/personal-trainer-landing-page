import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQType } from "@/types";
import { useTranslations } from "next-intl";

type Props = {
  faq: FAQType;
  index: number;
};

const FAQItem = ({ faq, index }: Props) => {
  const t = useTranslations("Sections.FAQ.faqs");
  return (
    <AccordionItem value={`item-${index}`} className="py-4">
      <AccordionTrigger>{t(faq.question)}</AccordionTrigger>
      <AccordionContent>{t(faq.answer)}</AccordionContent>
    </AccordionItem>
  );
};

export default FAQItem;
