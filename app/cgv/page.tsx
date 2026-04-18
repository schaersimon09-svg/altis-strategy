import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CGV — Conditions générales de vente",
  description: "Conditions générales de vente d'Altis Strategy.",
};

export default function CGVPage() {
  return (
    <section className="bg-offwhite pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-black text-navy mb-2">
          Conditions générales de vente
        </h1>
        <p className="text-muted text-sm mb-12">Dernière mise à jour : avril 2026</p>

        <div className="bg-white rounded-2xl border border-slate-200 p-8 flex flex-col gap-8 text-sm text-charcoal leading-relaxed">
          {[
            {
              title: "1. Objet",
              body: "Les présentes CGV définissent les conditions dans lesquelles Altis Strategy réalise des missions d'intelligence commerciale pour ses clients (« le Client »). Toute commande implique l'acceptation sans réserve des présentes conditions.",
            },
            {
              title: "2. Commande et devis",
              body: "Toute mission fait l'objet d'un devis personnalisé transmis par email. Le devis précise la nature de la mission, le format de livraison et le délai estimé. La mission démarre à réception de l'accord écrit (email) du Client.",
            },
            {
              title: "3. Délais de livraison",
              body: "Les délais indiqués dans le devis sont des estimations en jours ouvrés à compter de la validation et du paiement. Altis Strategy s'engage à signaler tout dépassement dès qu'il est identifié. En cas d'urgence confirmée, un supplément peut s'appliquer selon les conditions convenues.",
            },
            {
              title: "4. Tarifs et paiement",
              body: "Les tarifs sont sur devis. Sauf accord contraire, le paiement est dû à réception de la facture, par virement. Un acompte de 50 % peut être demandé pour les missions de sourcing. Tout retard de paiement donne lieu à des pénalités de retard au taux légal en vigueur.",
            },
            {
              title: "5. Propriété des livrables",
              body: "Les rapports et fichiers livrés sont la propriété exclusive du Client dès règlement complet. Altis Strategy conserve la propriété de la méthodologie et des outils de production. Le Client n'est pas autorisé à revendre les rapports produits.",
            },
            {
              title: "6. Confidentialité",
              body: "Altis Strategy s'engage à ne divulguer ni l'identité du Client ni les cibles analysées à des tiers. Les données transmises par le Client sont utilisées exclusivement dans le cadre de la mission commandée.",
            },
            {
              title: "7. Sources et limites",
              body: "Tous les rapports sont produits à partir de sources publiques officielles (Pappers, INSEE, BODACC, RNE). Altis Strategy ne peut être tenu responsable d'informations absentes des sources officelles, de données non encore déposées, ou d'inexactitudes dans les registres publics.",
            },
            {
              title: "8. Droit applicable",
              body: "Les présentes CGV sont soumises au droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux compétents sont ceux du lieu du siège social d'Altis Strategy.",
            },
          ].map((article) => (
            <section key={article.title}>
              <h2 className="text-base font-bold text-navy mb-2">{article.title}</h2>
              <p className="text-muted">{article.body}</p>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
