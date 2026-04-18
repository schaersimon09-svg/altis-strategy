import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Notre méthode — Comment on produit les rapports",
  description:
    "Liasses fiscales, ratios financiers, cartographie dirigeants, signaux faibles. Découvrez comment on transforme la donnée publique française en avantage commercial.",
};

const etapes = [
  {
    num: "01",
    title: "Cadrage",
    duration: "0 à 24 h",
    body: "On qualifie la demande. Cible précise, contexte commercial, format attendu. On identifie les SIREN cibles et on vérifie la disponibilité des comptes déposés.",
    livrable: "Accusé de prise en charge + devis.",
    sources: null,
  },
  {
    num: "02",
    title: "Collecte de données",
    duration: "Automatisée",
    body: "On extrait les liasses fiscales depuis Pappers (formats 2033 et 2050). On interroge l'API recherche-entreprises.api.gouv.fr pour la fiche Sirene (identité, adresse, forme, effectif, dirigeants). On consulte BODACC pour détecter toute procédure collective récente.",
    livrable: null,
    sources: ["Pappers", "INSEE Sirene V3", "BODACC", "RNE"],
  },
  {
    num: "03",
    title: "Analyse financière",
    duration: null,
    body: "Chaque liasse est convertie en 12 ratios. Chaque ratio est comparé à l'historique de l'entreprise sur 5 ans.",
    livrable: null,
    sources: null,
    ratios: [
      "Croissance du CA (CAGR 3 ans)",
      "Marge nette, marge brute, marge d'exploitation",
      "EBE rapporté au CA",
      "Autonomie financière (capitaux propres / total bilan)",
      "Poids des dettes financières",
      "Délai de paiement clients (DSO)",
      "Délai de paiement fournisseurs (DPO)",
      "Cycle de cash (CCC)",
      "Rotation des stocks",
      "Trésorerie nette",
    ],
  },
  {
    num: "04",
    title: "Synthèse stratégique",
    duration: null,
    body: "On traduit les chiffres en leviers d'approche. Exemples concrets : Le DSO est passé de 65 à 95 jours en 18 mois — angle 'optimisation BFR' pertinent. L'entreprise a recruté 12 personnes en 2 ans mais la marge s'érode — angle 'structuration' valide. Chaque levier est sourcé par au moins un chiffre vérifiable.",
    livrable: null,
    sources: null,
  },
  {
    num: "05",
    title: "Livraison",
    duration: null,
    body: "Le rapport PDF est envoyé par email, accompagné des fichiers sources et des liasses originales.",
    livrable:
      "L'Excel source (ratios calculés, ligne à ligne, vérifiables) + les liasses fiscales originales en annexe + les sources URL Pappers / INSEE pour chaque donnée.",
    sources: null,
    note: "Vous pouvez vérifier chaque chiffre. C'est la règle.",
  },
];

export default function MethodePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy grid-texture pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="section-label block mb-4">Méthode</span>
          <h1 className="text-4xl md:text-5xl font-black text-white max-w-2xl leading-tight mb-6">
            Un rapport n'a de valeur que si on peut vérifier chaque chiffre.
          </h1>
          <p className="text-lg text-white/60 max-w-xl leading-relaxed">
            Voici, étape par étape, ce qu'il se passe entre votre demande et la livraison
            du PDF.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-offwhite py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />

            <div className="flex flex-col gap-0">
              {etapes.map((etape, i) => (
                <div
                  key={etape.num}
                  className="relative flex gap-8 pb-12 last:pb-0"
                >
                  {/* Step indicator */}
                  <div className="hidden md:flex flex-col items-center flex-shrink-0">
                    <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center z-10 relative shadow-md">
                      <span className="text-ochre font-black text-xs font-mono">
                        {etape.num}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-2xl border border-slate-200 p-7">
                    {/* Mobile step num */}
                    <span className="md:hidden text-xs font-bold text-ochre font-mono mb-1 block">
                      {etape.num}
                    </span>

                    <div className="flex items-center justify-between gap-4 mb-4">
                      <h2 className="text-xl font-black text-navy">
                        {etape.title}
                      </h2>
                      {etape.duration && (
                        <span className="text-xs bg-ochre/10 text-ochre font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                          {etape.duration}
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-muted leading-relaxed mb-4">{etape.body}</p>

                    {/* Ratios list */}
                    {etape.ratios && (
                      <div className="bg-navy/3 border border-slate-200 rounded-xl p-4 mb-4">
                        <p className="text-xs font-semibold text-navy mb-3">
                          Les 12 ratios calculés :
                        </p>
                        <div className="grid sm:grid-cols-2 gap-1.5">
                          {etape.ratios.map((ratio) => (
                            <div key={ratio} className="flex items-center gap-2 text-xs text-muted">
                              <div className="w-1.5 h-1.5 bg-ochre rounded-full flex-shrink-0" />
                              {ratio}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Sources */}
                    {etape.sources && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-xs text-muted font-medium">Sources :</span>
                        {etape.sources.map((s) => (
                          <span
                            key={s}
                            className="text-xs bg-navy/5 text-navy font-semibold px-2.5 py-1 rounded"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Livrable */}
                    {etape.livrable && (
                      <div className="flex items-start gap-2 text-sm">
                        <span className="font-semibold text-navy flex-shrink-0">
                          Livrable :
                        </span>
                        <span className="text-muted">{etape.livrable}</span>
                      </div>
                    )}

                    {/* Note forte */}
                    {etape.note && (
                      <p className="mt-4 text-sm font-semibold text-navy border-l-4 border-ochre pl-3 py-1">
                        {etape.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Garantie méthodologique */}
      <section className="bg-navy grid-texture py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <span className="section-label block mb-6">Garantie méthodologique</span>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              "Si une donnée ne peut pas être sourcée, elle n'apparaît pas dans le rapport.",
              "Tout chiffre est daté. Un ratio de 2022 ne sera jamais présenté comme « récent ».",
              "Aucune opinion, aucun jugement. On expose les faits. Vous décidez.",
            ].map((principe, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <div className="text-4xl font-black text-ochre/20 font-mono mb-3">
                  0{i + 1}
                </div>
                <p className="text-sm text-white/70 leading-relaxed">{principe}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/contact" className="btn-primary gap-2 text-base px-8 py-4">
              Tester la méthode sur l'une de vos cibles
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
