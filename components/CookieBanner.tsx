"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentement aux cookies"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 animate-slide-up"
    >
      <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-5">
        <div className="flex items-start justify-between gap-4 mb-3">
          <p className="text-sm font-semibold text-navy">Ce site utilise des cookies</p>
          <button
            onClick={decline}
            className="text-muted hover:text-charcoal transition-colors mt-0.5 cursor-pointer"
            aria-label="Fermer"
          >
            <X size={16} />
          </button>
        </div>
        <p className="text-xs text-muted leading-relaxed mb-4">
          Nous utilisons uniquement des cookies essentiels au fonctionnement du site.
          Aucun tracker publicitaire, aucune donnée partagée.{" "}
          <Link href="/politique-confidentialite" className="underline hover:text-navy">
            En savoir plus
          </Link>
        </p>
        <div className="flex gap-3">
          <button onClick={accept} className="btn-primary text-xs px-4 py-2 flex-1">
            Accepter
          </button>
          <button
            onClick={decline}
            className="btn-secondary text-xs px-4 py-2 flex-1"
          >
            Refuser
          </button>
        </div>
      </div>
    </div>
  );
}
