"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  Database,
  BarChart3,
  Users,
  AlertTriangle,
  Compass,
  Shield,
} from "lucide-react";
import ReportMockup from "@/components/ReportMockup";
import DownloadModal from "@/components/DownloadModal";

// FAQ data
const faqs = [
  {
    q: "Vos données viennent d'où ?",
    a: "Exclusivement de sources publiques officielles : Pappers (liasses fiscales), INSEE (Sirene), BODACC (procédures collectives), registres des bénéficiaires effectifs. Zéro scraping sauvage, zéro donnée douteuse.",
  },
  {
    q: "Quel délai pour recevoir un rapport ?",
    a: "48 heures ouvrées pour un rapport standard. 24 heures pour les demandes urgentes (sur supplément).",
  },
  {
    q: "Les données sont-elles à jour ?",
    a: "Oui. Les liasses fiscales couvrent jusqu'au dernier exercice déposé. Les données Sirene et BODACC sont récupérées en temps réel au moment de la production du rapport.",
  },
  {
    q: "Vous travaillez sur quels secteurs ?",
    a: "Tous les secteurs où les entreprises françaises déposent des comptes — c'est-à-dire à peu près tous. Industrie, services, tech, distribution, BTP, agro.",
  },
  {
    q: "Et pour les volumes ? 1 rapport ? 50 ?",
    a: "Les deux, avec une tarification dégressive. Le devis est toujours personnalisé.",
  },
];

const deliverables = [
  {
    icon: BarChart3,
    title: "Santé financière sur 5 ans",
    desc: "CA, marge nette, EBE, résultat net, trésorerie.",
  },
  {
    icon: Database,
    title: "12 ratios clés",
    desc: "Rentabilité, solvabilité, cycle de cash, dépendance fournisseurs.",
  },
  {
    icon: Users,
    title: "Cartographie dirigeants",
    desc: "Qui décide, depuis quand, autres mandats.",
  },
  {
    icon: AlertTriangle,
    title: "Signaux faibles",
    desc: "Procédures collectives, changements récents, trajectoire RH.",
  },
  {
    icon: Compass,
    title: "Leviers d'approche",
    desc: "3 à 5 angles d'attaque commerciaux, argumentés par la donnée.",
  },
  {
    icon: Shield,
    title: "Sources 100 % officielles",
    desc: "Pappers, INSEE, BODACC. Rien d'inventé.",
  },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-navy grid-texture min-h-[90vh] flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left */}
          <div>
            <span className="section-label block mb-5">Intelligence commerciale B2B</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Prospecter sans les chiffres, c'est tirer dans le brouillard.
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-lg">
              Altis Strategy produit des rapports d'intelligence commerciale qui décryptent
              vos cibles avant le RDV. Factuel. Sourcé. Opérationnel.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary gap-2">
                Demander un rapport
                <ArrowRight size={16} />
              </Link>
              <button
                onClick={() => setModalOpen(true)}
                className="btn-ghost-white gap-2"
              >
                Voir un exemple
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap gap-6">
              {[
                { num: "48h", label: "délai standard" },
                { num: "12", label: "ratios analysés" },
                { num: "5 ans", label: "d'historique" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-black text-ochre font-mono tabular-nums">
                    {stat.num}
                  </div>
                  <div className="text-xs text-white/50 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — mockup */}
          <div className="hidden lg:flex justify-center items-center">
            <ReportMockup />
          </div>
        </div>
      </section>

      {/* ─── LE PROBLÈME ─────────────────────────────────────── */}
      <section className="bg-offwhite py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="section-label">Le constat</span>
            <h2 className="text-3xl md:text-4xl font-black text-navy mt-3 mb-4">
              Vos commerciaux partent en RDV avec 3 infos.
            </h2>
            <p className="text-lg text-muted">
              Un nom. Un LinkedIn. Une intuition. C'est à peu près tout.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: "Questions molles",
                body: "Vous posez des questions dont vous auriez pu trouver la réponse en 10 minutes.",
                accent: "border-l-amber-400",
              },
              {
                title: "Offres génériques",
                body: "Vous pitchez la même chose à tout le monde parce que vous ne savez rien de spécifique.",
                accent: "border-l-amber-400",
              },
              {
                title: "Cycles qui s'étirent",
                body: "Vous perdez 3 RDV à apprendre ce qu'un rapport aurait dit en 20 pages.",
                accent: "border-l-amber-400",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`bg-white border border-slate-200 border-l-4 ${item.accent} rounded-xl p-6`}
              >
                <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <p className="text-base font-semibold text-navy border-l-4 border-ochre pl-4 py-1">
            Le problème n'est pas votre équipe. C'est la donnée qu'elle n'a pas.
          </p>
        </div>
      </section>

      {/* ─── LA PROMESSE ─────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="section-label">Ce qu'on livre</span>
            <h2 className="text-3xl md:text-4xl font-black text-navy mt-3">
              Un rapport. 48 heures. Tout ce qui compte sur votre cible.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {deliverables.map((item) => (
              <div key={item.title} className="card group">
                <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-ochre/10 transition-colors">
                  <item.icon className="w-5 h-5 text-navy group-hover:text-ochre transition-colors" />
                </div>
                <h3 className="font-bold text-navy mb-1 text-sm">{item.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button onClick={() => setModalOpen(true)} className="btn-primary gap-2">
              Voir un rapport complet
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ─── APERÇU DU RAPPORT ───────────────────────────────── */}
      <section className="bg-offwhite py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">Exemple concret</span>
              <h2 className="text-3xl md:text-4xl font-black text-navy mt-3 mb-4">
                Ce qu'on remet à un commercial avant un RDV à 250 k€.
              </h2>
              <p className="text-muted mb-6 leading-relaxed">
                12 pages. Anonymisé. Téléchargeable tout de suite. Voyez exactement la
                structure, la densité d'information et les leviers identifiés.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {[
                  "Page de garde + fiche identité entreprise",
                  "Tableau de ratios financiers sur 5 ans",
                  "Cartographie des dirigeants",
                  "Signaux faibles détectés",
                  "Leviers d'approche priorisés",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-charcoal">
                    <CheckCircle2 className="w-4 h-4 text-ochre flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button onClick={() => setModalOpen(true)} className="btn-primary gap-2">
                Télécharger le rapport-exemple (PDF)
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Mockup stack */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -left-4 -top-4 w-72 h-96 bg-navy/10 rounded-xl" />
                <div className="absolute -left-2 -top-2 w-72 h-96 bg-navy/20 rounded-xl" />
                <ReportMockup className="relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MÉTHODE EN 3 ÉTAPES ─────────────────────────────── */}
      <section className="bg-navy grid-texture py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="section-label">La méthode</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-3">
              Comment on transforme 200 lignes de données publiques
              en un avantage commercial.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                num: "01",
                title: "Collecte",
                body: "Extraction des liasses fiscales, dirigeants, établissements, BODACC via sources officielles.",
              },
              {
                num: "02",
                title: "Analyse",
                body: "Calcul de 12 ratios, détection des signaux faibles, comparaison sectorielle.",
              },
              {
                num: "03",
                title: "Synthèse",
                body: "Rédaction d'un rapport structuré avec leviers d'approche priorisés.",
              },
            ].map((step) => (
              <div
                key={step.num}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
              >
                <div className="text-5xl font-black text-ochre/30 font-mono mb-4">
                  {step.num}
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/methode" className="btn-ghost-white gap-2">
              Voir la méthode en détail
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── POUR QUI ────────────────────────────────────────── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="section-label">Pour qui</span>
            <h2 className="text-3xl md:text-4xl font-black text-navy mt-3">
              Conçu pour les équipes qui prospectent en B2B complexe.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Dirigeants de PME-ETI",
                body: "Vous préparez un RDV stratégique, un appel d'offres, une négociation de contrat-cadre.",
              },
              {
                title: "Directeurs commerciaux",
                body: "Vous armez votre équipe avec du contenu qui transforme le taux de closing.",
              },
              {
                title: "Biz dev & account managers",
                body: "Vous travaillez des grands comptes et vous refusez d'arriver mal préparé.",
              },
            ].map((profile) => (
              <div key={profile.title} className="card border-t-4 border-t-ochre">
                <h3 className="font-bold text-navy mb-2">{profile.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{profile.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────────── */}
      <section className="bg-offwhite py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="section-label">FAQ</span>
            <h2 className="text-3xl font-black text-navy mt-3">Questions fréquentes</h2>
          </div>

          <div className="flex flex-col divide-y divide-slate-200">
            {faqs.map((faq, i) => (
              <div key={i} className="py-5">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left cursor-pointer group"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-semibold text-navy group-hover:text-ochre transition-colors text-sm md:text-base">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted flex-shrink-0 transition-transform duration-200 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <p className="mt-3 text-sm text-muted leading-relaxed pr-8">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL + MANIFESTE ───────────────────────────── */}
      <section className="bg-navy grid-texture py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <blockquote className="mb-10">
            <p className="text-2xl md:text-3xl font-black text-white leading-tight mb-4">
              On peut continuer à prospecter comme en 2005.
            </p>
            <p className="text-xl md:text-2xl text-white/70 font-medium leading-tight">
              Ou on peut arriver en RDV en sachant exactement à qui on parle.
            </p>
          </blockquote>
          <Link href="/contact" className="btn-primary text-base px-8 py-4 gap-2">
            Parlons de votre prochain RDV
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <DownloadModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
