import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://altis-strategy.fr"),
  title: {
    template: "%s | Altis Strategy",
    default: "Altis Strategy — Intelligence commerciale pour dirigeants de PME-ETI",
  },
  description:
    "Altis Strategy produit des rapports d'intelligence commerciale qui décryptent vos prospects avant le RDV. Santé financière, dirigeants, leviers d'approche. Sources 100 % officielles.",
  keywords: [
    "intelligence commerciale",
    "rapport d'entreprise PME",
    "préparation RDV commercial",
    "analyse financière prospect",
    "due diligence commerciale PME",
    "sourcing B2B France",
    "liasse fiscale analyse",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://altis-strategy.fr",
    siteName: "Altis Strategy",
    title: "Altis Strategy — L'intelligence commerciale qui change vos RDV.",
    description:
      "Des rapports factuels, sourcés, opérationnels. Pour arriver en RDV en sachant exactement à qui on parle.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Altis Strategy — L'intelligence commerciale qui change vos RDV.",
    description:
      "Des rapports factuels, sourcés, opérationnels. Pour arriver en RDV en sachant exactement à qui on parle.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
