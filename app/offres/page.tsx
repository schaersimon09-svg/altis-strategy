import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Nos offres — Rapports d'intelligence commerciale",
  description:
    "Rapport Flash, Rapport Stratégique, Sourcing sectoriel. Trois formats pour préparer un RDV, sécuriser un compte-clé ou construire une liste de cibles qualifiées.",
};

const offres = [
  {
    id: "flash",
    badge: "Qualification rapide",
    title: "Rapport Flash",
    subtitle: "Pour qualifier un prospect avant un premier RDV.",
    pages: "6 pages",
    delai: "24 à 48 h",
    features: [
      "Identité + santé financière sur 3 ans",
      "Cartographie dirigeants",
      "3 leviers d'approche",
    ],
    casType:
      "Un commercial a un RDV découverte demain. Il veut 20 minutes de lecture pour arriver préparé.",
    cta: "Demander un Rapport Flash",
    highlight: false,
  },
  {
    id: "strategique",
    badge: "Cœur de gamme",
    title: "Rapport Stratégique",
    subtitle: "Pour un compte-clé, un appel d'offres, une négociation contrat-cadre.",
    pages: "12 à 15 pages",
    delai: "48 à 72 h",
    features: [
      "Santé financière sur 5 ans + benchmark sectoriel",
      "12 ratios financiers commentés",
      "Cartographie dirigeants + autres mandats",
      "Signaux faibles (BODACC, RH, gouvernance)",
      "5 leviers d'approche priorisés",
      "Fichiers Excel source en annexe",
    ],
    casType:
      "Un directeur commercial prépare une proposition à 250 k€ pour un compte-clé. Il veut connaître la capacité réelle de paiement et les points d'appui de la négo.",
    cta: "Demander un Rapport Stratégique",
    highlight: true,
  },
  {
    id: "sourcing",
    badge: "Volume & pipeline",
    title: "Sourcing sectoriel",
    subtitle: "Pour construire une liste de prospects qualifiés sur un secteur + géographie.",
    pages: "Mini-fiche 2 pages / entreprise",
    delai: "5 à 10 jours ouvrés",
    features: [
      "10 à 30 entreprises identifiées",
      "Critères de sourcing sur-mesure (effectif, CA, zone, signaux)",
      "Mini-fiche par entreprise identifiée",
      "Fichier Excel consolidé (ratios + contacts)",
    ],
    casType:
      "Un dirigeant veut attaquer les constructeurs de bateaux en Bretagne-Normandie-Pays de la Loire. Il veut les 13 cibles pertinentes, avec leurs chiffres et leurs dirigeants, livrées prêtes à prospecter.",
    cta: "Demander un Sourcing sectoriel",
    highlight: false,
  },
];

export default function OffresPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy grid-texture pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="section-label block mb-4">Nos offres</span>
          <h1 className="text-4xl md:text-5xl font-black text-white max-w-2xl leading-tight mb-6">
            Trois formats. Un seul standard : que votre commercial sache ce qu'il doit savoir.
          </h1>
          <p className="text-lg text-white/60 max-w-xl leading-relaxed">
            Toutes les offres sont livrées en PDF structuré, avec les sources citées et
            les fichiers de données bruts en annexe.
          </p>
        </div>
      </section>

      {/* Offres cards */}
      <section className="bg-offwhite py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {offres.map((offre) => (
              <div
                key={offre.id}
                className={`relative rounded-2xl border p-8 flex flex-col ${
                  offre.highlight
                    ? "bg-navy text-white border-navy shadow-2xl"
                    : "bg-white text-charcoal border-slate-200"
                }`}
              >
                {/* Badge */}
                <div className="mb-6">
                  <span
                    className={`text-xs font-semibold uppercase tracking-widest ${
                      offre.highlight ? "text-ochre" : "text-ochre"
                    }`}
                  >
                    {offre.badge}
                  </span>
                  {offre.highlight && (
                    <div className="absolute top-4 right-4 bg-ochre text-white text-xs font-bold px-3 py-1 rounded-full">
                      Recommandé
                    </div>
                  )}
                </div>

                <h2
                  className={`text-2xl font-black mb-2 ${
                    offre.highlight ? "text-white" : "text-navy"
                  }`}
                >
                  {offre.title}
                </h2>
                <p
                  className={`text-sm mb-6 leading-relaxed ${
                    offre.highlight ? "text-white/60" : "text-muted"
                  }`}
                >
                  {offre.subtitle}
                </p>

                {/* Metadata */}
                <div className="flex gap-4 mb-6">
                  <div className="flex items-center gap-1.5 text-xs">
                    <FileText
                      size={14}
                      className={offre.highlight ? "text-ochre" : "text-ochre"}
                    />
                    <span className={offre.highlight ? "text-white/70" : "text-muted"}>
                      {offre.pages}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs">
                    <Clock
                      size={14}
                      className={offre.highlight ? "text-ochre" : "text-ochre"}
                    />
                    <span className={offre.highlight ? "text-white/70" : "text-muted"}>
                      {offre.delai}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                  {offre.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2">
                      <CheckCircle2
                        size={16}
                        className={`flex-shrink-0 mt-0.5 ${
                          offre.highlight ? "text-ochre" : "text-ochre"
                        }`}
                      />
                      <span
                        className={`text-sm leading-tight ${
                          offre.highlight ? "text-white/80" : "text-charcoal"
                        }`}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Cas type */}
                <div
                  className={`rounded-lg p-4 mb-6 text-xs leading-relaxed ${
                    offre.highlight ? "bg-white/5 text-white/50" : "bg-offwhite text-muted"
                  }`}
                >
                  <span className="font-semibold block mb-1">Cas type :</span>
                  {offre.casType}
                </div>

                {/* CTA */}
                <Link
                  href="/contact"
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded font-semibold text-sm transition-all duration-150 ${
                    offre.highlight
                      ? "bg-ochre text-white hover:bg-ochre-dark"
                      : "bg-navy text-white hover:bg-navy/80"
                  }`}
                >
                  {offre.cta}
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tarification */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <span className="section-label block mb-4">Tarification</span>
          <h2 className="text-3xl font-black text-navy mb-4">Sur devis personnalisé.</h2>
          <p className="text-muted leading-relaxed mb-2">
            Chaque mission est dimensionnée selon le volume, l'urgence et le niveau de
            détail attendu.
          </p>
          <p className="text-muted leading-relaxed mb-10">
            Les tarifs sont dégressifs à partir du 3ᵉ rapport et font l'objet de forfaits
            mensuels pour les équipes qui externalisent leur intelligence commerciale.
          </p>
          <Link href="/contact" className="btn-primary gap-2 text-base px-8 py-4">
            Obtenir un devis en 24 h
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
