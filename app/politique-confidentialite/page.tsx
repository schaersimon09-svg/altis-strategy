import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et traitement des données personnelles — Altis Strategy.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="bg-offwhite pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-black text-navy mb-2">Politique de confidentialité</h1>
        <p className="text-muted text-sm mb-12">Dernière mise à jour : avril 2026</p>

        <div className="bg-white rounded-2xl border border-slate-200 p-8 flex flex-col gap-8 text-sm text-charcoal leading-relaxed">
          <section>
            <h2 className="text-base font-bold text-navy mb-2">1. Responsable du traitement</h2>
            <p className="text-muted">
              Altis Strategy — contact@altis-strategy.fr
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-navy mb-2">2. Données collectées</h2>
            <p className="text-muted mb-2">
              Nous collectons uniquement les données que vous nous transmettez volontairement
              via les formulaires de contact et de téléchargement :
            </p>
            <ul className="list-disc pl-5 text-muted space-y-1">
              <li>Nom, email professionnel, fonction, entreprise</li>
              <li>Contexte de la demande (optionnel)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-navy mb-2">3. Finalités du traitement</h2>
            <ul className="list-disc pl-5 text-muted space-y-1">
              <li>Répondre à vos demandes de devis et questions</li>
              <li>Envoyer le rapport-exemple demandé</li>
              <li>Facturation et exécution des missions (données strictement nécessaires)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-navy mb-2">4. Durée de conservation</h2>
            <p className="text-muted">
              Les données des prospects non convertis en clients sont conservées 12 mois après
              le dernier contact. Les données clients sont conservées 5 ans après la fin de la
              mission (obligation comptable).
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-navy mb-2">5. Partage des données</h2>
            <p className="text-muted">
              Nous ne vendons, ne louons et ne partageons vos données avec aucun tiers à des
              fins commerciales. Les données ne transitent que par notre hébergeur Vercel
              (infrastructure uniquement).
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-navy mb-2">6. Cookies</h2>
            <p className="text-muted">
              Ce site utilise uniquement des cookies essentiels au fonctionnement (mémorisation
              de votre consentement). Aucun cookie publicitaire ni tracker tiers n'est déposé.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-navy mb-2">7. Vos droits (RGPD)</h2>
            <p className="text-muted">
              Conformément au RGPD, vous disposez des droits suivants : accès, rectification,
              suppression, portabilité, limitation et opposition. Exercez-les en écrivant à :{" "}
              <a href="mailto:contact@altis-strategy.fr" className="text-ochre hover:underline">
                contact@altis-strategy.fr
              </a>. Réponse sous 30 jours. Vous pouvez également introduire une réclamation
              auprès de la CNIL (cnil.fr).
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
