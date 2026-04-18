"use client";

import { useState } from "react";
import { X, CheckCircle } from "lucide-react";

interface DownloadModalProps {
  open: boolean;
  onClose: () => void;
}

export default function DownloadModal({ open, onClose }: DownloadModalProps) {
  const [email, setEmail] = useState("");
  const [fonction, setFonction] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("https://formspree.io/f/xvzdaqwb", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, fonction, _type: "rapport-exemple" }),
      });
    } catch {
      // On ouvre le PDF même si l'envoi email échoue
    } finally {
      setLoading(false);
      setSubmitted(true);
      window.open("/rapport-exemple.pdf", "_blank", "noopener,noreferrer");
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Télécharger le rapport-exemple"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted hover:text-charcoal transition-colors cursor-pointer"
          aria-label="Fermer"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="text-center py-4">
            <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-navy mb-2">Le rapport s'ouvre.</h3>
            <p className="text-sm text-muted leading-relaxed">
              Le PDF s'est ouvert dans un nouvel onglet. Zéro newsletter, zéro relance automatique.
            </p>
            <button onClick={onClose} className="btn-primary mt-6 w-full">
              Fermer
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <span className="section-label">Rapport-exemple</span>
              <h3 className="text-2xl font-bold text-navy mt-2">
                12 pages. Anonymisé. Tout de suite.
              </h3>
              <p className="text-sm text-muted mt-2">
                Recevez le rapport-exemple par email — voyez exactement ce que vous
                recevrez avant votre RDV.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="modal-email"
                  className="block text-sm font-medium text-navy mb-1"
                >
                  Email professionnel <span className="text-red-500">*</span>
                </label>
                <input
                  id="modal-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="vous@entreprise.fr"
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ochre focus:border-transparent"
                  autoComplete="email"
                />
              </div>

              <div>
                <label
                  htmlFor="modal-fonction"
                  className="block text-sm font-medium text-navy mb-1"
                >
                  Fonction
                </label>
                <select
                  id="modal-fonction"
                  value={fonction}
                  onChange={(e) => setFonction(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-ochre focus:border-transparent bg-white cursor-pointer"
                >
                  <option value="">Sélectionner (optionnel)</option>
                  <option value="ceo">CEO / Dirigeant</option>
                  <option value="dir-commercial">Dir. commercial</option>
                  <option value="biz-dev">Biz dev</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full justify-center mt-2 disabled:opacity-50"
              >
                {loading ? "Envoi en cours…" : "Recevoir le rapport par email"}
              </button>
            </form>

            <p className="text-xs text-muted text-center mt-4">
              Vous recevrez uniquement le rapport-exemple. Zéro newsletter, zéro relance
              automatique.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
