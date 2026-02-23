// Next.js
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Next-Intl
import { routing } from "@/i18n/routing";
import { hasLocale, NextIntlClientProvider } from "next-intl";

// Componentes
import { ThemeProvider } from "@/components/theme-provider";

// CSS
import "./globals.css";
import Footer from "@/components/layout/Footer";
import { getTranslations } from "next-intl/server";

const generalSans = localFont({
  variable: "--font-general-sans",
  display: "swap",
  src: [
    {
      path: "../../assets/fonts/generalSans/GeneralSans-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../assets/fonts/generalSans/GeneralSans-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../assets/fonts/generalSans/GeneralSans-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../assets/fonts/generalSans/GeneralSans-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Layout.Metadata" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    openGraph: {
      title: t("openGraph.title"),
      description: t("openGraph.description"),
      siteName: t("openGraph.siteName"),
      locale: t("openGraph.locale"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitter.title"),
      description: t("twitter.description"),
    },
  };
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className="scroll-smooth"
      data-scroll-behavior="smooth"
    >
      <body className={`${generalSans.className} antialiased`}>
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
