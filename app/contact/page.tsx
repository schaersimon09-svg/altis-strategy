"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Lock, BellOff, Clock } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    fonction: "",
    entreprise: "",
    besoin: "",
    volume: "",
    delai: "",
    contexte: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.nom.trim()) e.nom = "Champ obligatoire.";
    if (!form.email.trim()) e.email = "Champ obligatoire.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Adresse email invalide.";
    if (!form.besoin) e.besoin = "Sélectionnez un type de besoin.";
    return e;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      const firstKey = Object.keys(errs)[0];
      document.getElementById(firstKey)?.focus();
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/xvzdaqwb", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          nom: form.nom,
          email: form.email,
          fonction: form.fonction,
          entreprise: form.entreprise,
          besoin: form.besoin,
          volume: form.volume,
          delai: form.delai,
          contexte: form.contexte,
        }),
      });
      if (!res.ok) throw new Error("Erreur réseau");
      setSubmitted(true);
    } catch {
      setErrors({ form: "Une erreur est survenue. Réessayez ou écrivez-nous directement." });
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ochre focus:border-transparent transition-colors ${
      errors[field] ? "border-red-400 bg-red-50" : "border-slate-200"
    }`;

  return (
    <>
      {/* Hero */}
      <section className="bg-navy grid-texture pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="section-label block mb-4">Contact</span>
          <h1 className="text-4xl md:text-5xl font-black text-white max-w-2xl leading-tight mb-4">
            Dites-nous qui vous voulez comprendre.
          </h1>
          <p className="text-lg text-white/60">
            Réponse sous 24 h ouvrées. Devis sous 48 h.
          </p>
        </div>
      </section>

      {/* Form + reassurance */}
      <section className="bg-offwhite py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
                  <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-5" />
                  <h2 className="text-2xl font-black text-navy mb-3">
                    Demande reçue.
                  </h2>
                  <p className="text-muted leading-relaxed max-w-sm mx-auto">
                    Nous vous répondons sous 24 h ouvrées avec un devis personnalisé.
                    Pas de relance automatique.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="bg-white rounded-2xl border border-slate-200 p-8"
                >
                  {errors.form && (
                    <div role="alert" className="mb-5 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                      {errors.form}
                    </div>
                  )}
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Nom */}
                    <div>
                      <label htmlFor="nom" className="block text-sm font-medium text-navy mb-1">
                        Nom complet <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="nom"
                        name="nom"
                        type="text"
                        required
                        value={form.nom}
                        onChange={handleChange}
                        className={inputClass("nom")}
                        autoComplete="name"
                      />
                      {errors.nom && (
                        <p className="text-xs text-red-500 mt-1" role="alert">{errors.nom}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">
                        Email professionnel <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass("email")}
                        autoComplete="work email"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1" role="alert">{errors.email}</p>
                      )}
                    </div>

                    {/* Fonction */}
                    <div>
                      <label htmlFor="fonction" className="block text-sm font-medium text-navy mb-1">
                        Fonction
                      </label>
                      <input
                        id="fonction"
                        name="fonction"
                        type="text"
                        placeholder="Ex : Directeur commercial"
                        value={form.fonction}
                        onChange={handleChange}
                        className={inputClass("fonction")}
                        autoComplete="organization-title"
                      />
                    </div>

                    {/* Entreprise */}
                    <div>
                      <label htmlFor="entreprise" className="block text-sm font-medium text-navy mb-1">
                        Entreprise
                      </label>
                      <input
                        id="entreprise"
                        name="entreprise"
                        type="text"
                        value={form.entreprise}
                        onChange={handleChange}
                        className={inputClass("entreprise")}
                        autoComplete="organization"
                      />
                    </div>

                    {/* Type de besoin */}
                    <div className="sm:col-span-2">
                      <label htmlFor="besoin" className="block text-sm font-medium text-navy mb-1">
                        Type de besoin <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="besoin"
                        name="besoin"
                        required
                        value={form.besoin}
                        onChange={handleChange}
                        className={`${inputClass("besoin")} cursor-pointer bg-white`}
                      >
                        <option value="">Sélectionner</option>
                        <option value="flash">Rapport Flash</option>
                        <option value="strategique">Rapport Stratégique</option>
                        <option value="sourcing">Sourcing sectoriel</option>
                        <option value="autre">Autre</option>
                      </select>
                      {errors.besoin && (
                        <p className="text-xs text-red-500 mt-1" role="alert">{errors.besoin}</p>
                      )}
                    </div>

                    {/* Volume */}
                    <div>
                      <label htmlFor="volume" className="block text-sm font-medium text-navy mb-1">
                        Nombre de cibles (approximatif)
                      </label>
                      <select
                        id="volume"
                        name="volume"
                        value={form.volume}
                        onChange={handleChange}
                        className={`${inputClass("volume")} cursor-pointer bg-white`}
                      >
                        <option value="">Sélectionner</option>
                        <option value="1">1</option>
                        <option value="2-5">2–5</option>
                        <option value="6-15">6–15</option>
                        <option value="15+">15+</option>
                        <option value="nsp">Je ne sais pas encore</option>
                      </select>
                    </div>

                    {/* Délai */}
                    <div>
                      <label htmlFor="delai" className="block text-sm font-medium text-navy mb-1">
                        Délai souhaité
                      </label>
                      <select
                        id="delai"
                        name="delai"
                        value={form.delai}
                        onChange={handleChange}
                        className={`${inputClass("delai")} cursor-pointer bg-white`}
                      >
                        <option value="">Sélectionner</option>
                        <option value="urgent">Urgent (24 h)</option>
                        <option value="semaine">Cette semaine</option>
                        <option value="mois">Ce mois</option>
                        <option value="pas-urgent">Pas urgent</option>
                      </select>
                    </div>

                    {/* Contexte */}
                    <div className="sm:col-span-2">
                      <label htmlFor="contexte" className="block text-sm font-medium text-navy mb-1">
                        Contexte (optionnel)
                      </label>
                      <textarea
                        id="contexte"
                        name="contexte"
                        rows={4}
                        placeholder="Ex : je prépare un RDV avec un prospect à 250 k€ sur le secteur XYZ"
                        value={form.contexte}
                        onChange={handleChange}
                        className={`${inputClass("contexte")} resize-none`}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center mt-6 text-base py-4 gap-2 disabled:opacity-50"
                  >
                    {loading ? "Envoi en cours…" : "Envoyer la demande"}
                    {!loading && <ArrowRight size={18} />}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar reassurance */}
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-navy mb-5 text-sm">Ce que vous pouvez attendre</h3>
                <ul className="flex flex-col gap-5">
                  {[
                    {
                      icon: Lock,
                      title: "Confidentialité totale.",
                      body: "Nous ne partageons jamais les demandes reçues ni les cibles analysées.",
                    },
                    {
                      icon: BellOff,
                      title: "Pas de relances agressives.",
                      body: "Un seul email de suivi si vous ne donnez pas de nouvelles.",
                    },
                    {
                      icon: Clock,
                      title: "Devis ferme sous 48 h.",
                      body: "Si le délai n'est pas tenable, nous vous le disons tout de suite.",
                    },
                  ].map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <div className="w-8 h-8 bg-ochre/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon size={16} className="text-ochre" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-navy">{item.title}</p>
                        <p className="text-xs text-muted leading-relaxed">{item.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct contacts */}
              <div className="bg-navy rounded-2xl p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-ochre mb-4">
                  Contact direct
                </p>
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-white text-sm font-semibold">Vincent Godbille</p>
                    <p className="text-white/50 text-xs mb-1">Méthodologie & Data</p>
                    <a
                      href="mailto:vincent.godbille@he-arc.ch"
                      className="text-ochre text-xs hover:underline"
                    >
                      vincent.godbille@he-arc.ch
                    </a>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Simon Schaer</p>
                    <p className="text-white/50 text-xs mb-1">Stratégie & Relation client</p>
                    <a
                      href="mailto:schaersimon@gmail.com"
                      className="text-ochre text-xs hover:underline"
                    >
                      schaersimon@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
