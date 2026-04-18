import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="bg-offwhite min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="text-8xl font-black text-navy/10 font-mono mb-6">404</div>
        <h1 className="text-2xl font-black text-navy mb-3">
          Cette page n'a pas laissé de traces chez Pappers.
        </h1>
        <p className="text-muted mb-8 leading-relaxed">
          Elle n'existe pas, a été déplacée, ou nous avons un signal faible à investiguer.
        </p>
        <Link href="/" className="btn-primary gap-2">
          Retour à l'accueil
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
