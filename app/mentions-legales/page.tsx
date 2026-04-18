import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales d'Altis Strategy.",
};

export default function MentionsLegalesPage() {
  return (
    <section className="bg-offwhite pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-black text-navy mb-2">Mentions légales</h1>
        <p className="text-muted text-sm mb-12">Dernière mise à jour : avril 2026</p>

        <div className="bg-white rounded-2xl border border-slate-200 p-8 prose prose-sm max-w-none text-charcoal">
          <h2 className="text-lg font-bold text-navy mb-3">Éditeur du site</h2>
          <p className="text-muted leading-relaxed mb-6">
            <strong>Altis Strategy</strong><br />
            Cofondée par Vincent Godbille et Simon Schaer<br />
            Email : contact@altis-strategy.fr<br />
            Site : altis-strategy.fr<br />
            <em>(Forme juridique et numéro SIREN à compléter une fois l'entité constituée.)</em>
          </p>

          <h2 className="text-lg font-bold text-navy mb-3">Directeur de la publication</h2>
          <p className="text-muted leading-relaxed mb-6">
            Vincent Godbille — vincent.godbille@he-arc.ch<br />
            Simon Schaer — schaersimon@gmail.com
          </p>

          <h2 className="text-lg font-bold text-navy mb-3">Hébergement</h2>
          <p className="text-muted leading-relaxed mb-6">
            Vercel Inc.<br />
            440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
            <a href="https://vercel.com" className="text-ochre hover:underline">vercel.com</a>
          </p>

          <h2 className="text-lg font-bold text-navy mb-3">Propriété intellectuelle</h2>
          <p className="text-muted leading-relaxed mb-6">
            L'ensemble du contenu de ce site (textes, graphismes, logos, méthodologie) est la
            propriété exclusive d'Altis Strategy. Toute reproduction, même partielle, est
            interdite sans autorisation préalable écrite.
          </p>

          <h2 className="text-lg font-bold text-navy mb-3">Données personnelles</h2>
          <p className="text-muted leading-relaxed">
            Les données collectées via les formulaires de contact sont utilisées exclusivement
            pour répondre aux demandes reçues. Elles ne sont pas transmises à des tiers.
            Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de
            suppression. Exercez ces droits à : contact@altis-strategy.fr.
          </p>
        </div>
      </div>
    </section>
  );
}
