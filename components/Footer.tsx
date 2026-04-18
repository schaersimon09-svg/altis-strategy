import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Tagline */}
        <div className="mb-12 pb-12 border-b border-white/10">
          <p className="text-2xl font-bold tracking-tight max-w-lg leading-tight">
            Altis Strategy
          </p>
          <p className="mt-3 text-white/60 text-sm max-w-sm leading-relaxed">
            L'intelligence commerciale pour dirigeants et commerciaux de PME-ETI
            qui ne veulent plus prospecter à l'aveugle.
          </p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-ochre mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/", label: "Accueil" },
                { href: "/offres", label: "Offres" },
                { href: "/methode", label: "Méthode" },
                { href: "/a-propos", label: "À propos" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-ochre mb-4">
              Contact
            </p>
            <ul className="flex flex-col gap-3 text-sm text-white/60">
              <li>
                <a
                  href="mailto:contact@altis-strategy.fr"
                  className="hover:text-white transition-colors"
                >
                  contact@altis-strategy.fr
                </a>
              </li>
              <li className="mt-2">
                <span className="text-white/40 text-xs block mb-1">Vincent Godbille</span>
                <a
                  href="mailto:vincent.godbille@he-arc.ch"
                  className="hover:text-white transition-colors text-xs"
                >
                  vincent.godbille@he-arc.ch
                </a>
              </li>
              <li className="mt-1">
                <span className="text-white/40 text-xs block mb-1">Simon Schaer</span>
                <a
                  href="mailto:schaersimon@gmail.com"
                  className="hover:text-white transition-colors text-xs"
                >
                  schaersimon@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-ochre mb-4">
              Mentions
            </p>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/mentions-legales", label: "Mentions légales" },
                { href: "/politique-confidentialite", label: "Politique de confidentialité" },
                { href: "/cgv", label: "CGV" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2026 Altis Strategy. Cofondée par Vincent Godbille & Simon Schaer.
            Tous droits réservés.
          </p>
          <p className="text-xs text-white/40">
            altis-strategy.fr
          </p>
        </div>
      </div>
    </footer>
  );
}
