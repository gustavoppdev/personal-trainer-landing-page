import { useTranslations } from "next-intl";
import ButtonPrimary from "./ButtonPrimary";

const titleTypography =
  "text-heading-6 leading-heading-6 tracking-heading-6 lg:text-heading-3 lg:leading-heading-3 lg:tracking-heading-3 font-medium";

type Props = {
  namespace: string;
  styles?: string;
  withButton?: boolean;
  buttonType?: "primary" | "outline";
  buttonStyles?: string;
};

const SectionTitle = ({
  namespace,
  styles = "",
  withButton = true,
  buttonStyles = "",
  buttonType = "primary",
}: Props) => {
  const t = useTranslations(namespace);
  return (
    <div className={`${styles} flex flex-col`}>
      <p className="text-custom-body-3 text-custom-black-50">
        {t("introduction")}
      </p>

      <h2 className={`${titleTypography} lg:max-w-[432px]`}>{t("headline")}</h2>

      <p className="mt-3 mb-6 text-custom-body-2">{t("description")}</p>

      {withButton && (
        <ButtonPrimary type={buttonType} styles={buttonStyles}>
          {t("ctaBtn")}
        </ButtonPrimary>
      )}
    </div>
  );
};

export default SectionTitle;
