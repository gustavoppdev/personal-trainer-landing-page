// React & Next-Intl
import { useTranslations } from "next-intl";
import { ReactNode } from "react";

// Componentes
import { Button } from "@/components/ui/button";

// Lucide Icons & Utils
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  type?: "outline" | "primary";
  hero?: boolean;
  styles?: string;
  onClick?: () => void;
};

const ButtonPrimary = ({
  children,
  hero = false,
  type = "primary",
  styles = "",
  onClick,
}: Props) => {
  const t = useTranslations("Others.Alt");

  return (
    <div
      onClick={onClick}
      className={cn(
        type === "primary"
          ? "bg-custom-primary hover:bg-custom-primary/90"
          : "bg-white dark:bg-custom-black-90 border border-black",
        "p-4 pr-1 w-full lg:w-fit h-12.5 rounded-lg flex items-center justify-between text-base text-white cursor-pointer group font-medium",
        styles,
      )}
    >
      {children}
      <Button
        size={"icon-lg"}
        aria-label={t("accessBtn")}
        className={cn(
          hero && "lg:self-end",
          "lg:ml-6 mr-1 group-hover:ml-10 transition-all duration-300",
        )}
      >
        <ArrowRight className="size-5" />
      </Button>
    </div>
  );
};

export default ButtonPrimary;
