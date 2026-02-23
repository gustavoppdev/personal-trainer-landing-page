// Next-Intl
import { useTranslations } from "next-intl";

// Componentes
import ButtonPrimary from "@/components/common/ButtonPrimary";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const FormContact = () => {
  const t = useTranslations("Sections.Contact.sendAMessage");
  return (
    <div>
      <h3 className="text-custom-heading-6">{t("title")}</h3>

      <form className="text-custom-body-3 space-y-6 mt-4">
        <Field>
          <FieldLabel htmlFor="input-fullname">
            {t("fullname.label")}
          </FieldLabel>
          <Input
            id="input-fullname"
            placeholder={t("fullname.placeholder")}
            type="text"
            className="text-custom-black-50 py-3.5 px-4 h-auto"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="input-email">{t("email.label")}</FieldLabel>
          <Input
            id="input-email"
            type="email"
            placeholder={t("email.placeholder")}
            className="text-custom-black-50 py-3.5 px-4 h-auto"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="input-message">{t("message.label")}</FieldLabel>
          <Textarea
            id="input-message"
            placeholder={t("message.label")}
            className="text-custom-black-50 py-3.5 px-4 h-auto min-h-25"
          />
        </Field>

        <ButtonPrimary styles="lg:w-full">{t("sendBtn")}</ButtonPrimary>
      </form>
    </div>
  );
};

export default FormContact;
