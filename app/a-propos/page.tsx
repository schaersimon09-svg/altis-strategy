import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FounderCard from "@/components/FounderCard";

export const metadata: Metadata = {
  title: "À propos — Pourquoi Altis Strategy existe",
  description:
    "Pourquoi Altis Strategy existe : rééquilibrer le rapport de force en RDV B2B grâce à une intelligence commerciale sourcée et vérifiable.",
};

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy grid-texture pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="section-label block mb-4">À propos</span>
          <h1 className="text-4xl md:text-5xl font-black text-white max-w-2xl leading-tight mb-6">
            Pourquoi Altis Strategy existe.
          </h1>
          <p className="text-lg text-white/60 max-w-xl leading-relaxed">
            Parce que trop de RDV B2B se jouent encore sur l'intuition. Et que les
            dirigeants et commerciaux de PME-ETI méritent mieux.
          </p>
        </div>
      </section>

      {/* Le constat */}
      <section className="bg-offwhite py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <span className="section-label block mb-4">Le constat</span>

          <div className="flex flex-col gap-5 text-base text-charcoal leading-relaxed">
            <p>
              Quand on regarde comment la majorité des équipes commerciales préparent leurs
              RDV, on remarque toujours le même scénario : un tour rapide sur LinkedIn, une
              lecture du site corporate, et le commercial y va en espérant que ses questions
              ouvrent la conversation.
            </p>
            <p>Ça marche encore. Un peu. De moins en moins.</p>
            <p>
              En face, les acheteurs sont mieux préparés qu'eux. Ils savent ce qu'ils veulent,
              ils ont déjà regardé 3 concurrents, et ils n'ont pas de temps pour les questions
              dont la réponse était dans le dernier rapport annuel.
            </p>
            <p className="font-semibold text-navy border-l-4 border-ochre pl-4 py-1">
              Altis Strategy rééquilibre ce rapport de force.
            </p>
          </div>
        </div>
      </section>

      {/* Convictions */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="section-label">Notre parti-pris</span>
            <h2 className="text-3xl font-black text-navy mt-3">Nos trois convictions</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "La donnée publique française est un actif sous-exploité.",
                body: "Liasses fiscales, Sirene, BODACC — tout est légalement accessible, et personne ne l'assemble.",
              },
              {
                num: "02",
                title: "L'intelligence commerciale n'est pas un luxe.",
                body: "Elle devrait être aussi systématique qu'un CRM. Aucun commercial sérieux ne doit arriver en RDV sans savoir qui il a en face.",
              },
              {
                num: "03",
                title: "Un rapport sans sources vérifiables ne vaut rien.",
                body: "Tout ce qu'on écrit est traçable. C'est la seule façon de construire de la confiance.",
              },
            ].map((conv) => (
              <div key={conv.num} className="card border-t-4 border-t-ochre">
                <div className="text-4xl font-black text-ochre/20 font-mono mb-4">
                  {conv.num}
                </div>
                <h3 className="font-bold text-navy mb-2 text-sm leading-snug">
                  {conv.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">{conv.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="bg-offwhite py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <span className="section-label">L'équipe</span>
            <h2 className="text-3xl font-black text-navy mt-3">
              Un duo. Deux rôles complémentaires. Un standard commun.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <FounderCard
              name="Vincent Godbille"
              initials="VG"
              role="Cofondateur — Méthodologie & Data"
              email="vincent.godbille@he-arc.ch"
              emailHref="mailto:vincent.godbille@he-arc.ch"
              photo="/vincent.jpg"
              bio="Fort d’un parcours tourné vers l’international et l’entrepreneuriat, Vincent apporte à Altis Strategy une vision pragmatique et terrain de l’économie globale. Actuellement basé à Bakou, il se spécialise dans le négoce de matières premières et le financement du commerce international à la HEG Genève. Expert sur Bloomberg et les outils de modélisation Excel, il transforme des données complexes en opportunités stratégiques concrètes."
            />
            <FounderCard
              name="Simon Schaer"
              initials="SS"
              role="Cofondateur — Stratégie & Relation client"
              email="schaersimon@gmail.com"
              emailHref="mailto:schaersimon@gmail.com"
              photo="/simon.jpg"
              bio="Spécialiste de la finance d’entreprise diplômé de l’Université de Saint-Gall (HSG), Simon décrypte la valeur intrinsèque des entreprises avec une rigueur forgée en audit chez EY pour le groupe Nestlé. Investisseur actif, il a développé des modèles d’évaluation avancés intégrant l’IA. Chez Altis Strategy, il combine gestion des risques et finance quantitative pour produire des rapports de haute précision."
            />
          </div>

          {/* Closing */}
          <div className="bg-navy rounded-2xl p-8 text-center max-w-2xl mx-auto">
            <p className="text-white/80 italic leading-relaxed mb-6">
              "On s'est associés parce que l'intelligence commerciale ne peut pas tenir sur
              une seule paire d'yeux. Les chiffres sans la stratégie ne vendent rien. La
              stratégie sans les chiffres vend du vent."
            </p>
            <Link href="/contact" className="btn-primary gap-2">
              Prenons 30 minutes pour parler de vos cibles
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
