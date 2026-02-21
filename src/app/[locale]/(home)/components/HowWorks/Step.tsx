import { StepType } from "@/types";
import { useTranslations } from "next-intl";

type Props = {
  step: StepType;
};

const Step = ({ step }: Props) => {
  const t = useTranslations("Sections.HowWorks.steps");

  return (
    <li className="space-y-0.5 max-w-[450px] group cursor-pointer">
      <span className="text-custom-body-1 text-custom-black-50 group-hover:text-custom-primary transition-colors duration-1000">
        {t(step.index)}
      </span>
      <h3 className="text-heading-6">{t(step.title)}</h3>
      <p className="text-custom-body-3 text-custom-black-50">
        {t(step.description)}
      </p>

      <div className="w-0 h-px bg-custom-primary group-hover:w-full transition-all duration-1000 mt-2"></div>
    </li>
  );
};

export default Step;
