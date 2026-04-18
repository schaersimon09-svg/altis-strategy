export default function ReportMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`report-mockup select-none ${className}`}>
      {/* Cover page */}
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden w-80">
        {/* Header stripe */}
        <div className="bg-navy px-6 py-4 flex items-center justify-between">
          <div>
            <div className="text-xs text-ochre font-semibold tracking-widest uppercase mb-1">
              Altis Strategy
            </div>
            <div className="text-white font-bold text-sm">Rapport Stratégique</div>
          </div>
          <div className="w-8 h-8 bg-ochre/20 rounded flex items-center justify-center">
            <span className="text-ochre font-black text-xs">AS</span>
          </div>
        </div>

        {/* Body */}
        <div className="p-5">
          <div className="mb-4">
            <div className="h-3 w-32 bg-charcoal/10 rounded mb-2" />
            <div className="h-5 w-48 bg-navy rounded mb-1" />
            <div className="h-3 w-24 bg-ochre/30 rounded" />
          </div>

          {/* Ratio table */}
          <div className="border border-slate-200 rounded-lg overflow-hidden mb-4">
            <div className="bg-navy/5 px-3 py-2 border-b border-slate-200">
              <span className="text-xs font-semibold text-navy">Ratios clés — 5 ans</span>
            </div>
            {[
              { label: "Croissance CA (CAGR)", value: "+12.4%", positive: true },
              { label: "Marge nette", value: "8.2%", positive: true },
              { label: "Autonomie financière", value: "61%", positive: true },
              { label: "DSO (jours)", value: "87j", positive: false },
              { label: "Trésorerie nette", value: "+2.1M€", positive: true },
            ].map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between px-3 py-1.5 border-b border-slate-200/50 last:border-0"
              >
                <span className="text-xs text-muted">{row.label}</span>
                <span
                  className={`text-xs font-semibold font-mono tabular-nums ${
                    row.positive ? "text-emerald-600" : "text-amber-600"
                  }`}
                >
                  {row.value}
                </span>
              </div>
            ))}
          </div>

          {/* Leviers section */}
          <div>
            <div className="text-xs font-semibold text-navy mb-2">
              Leviers d'approche identifiés
            </div>
            {[
              "DSO élevé — angle optimisation BFR",
              "Croissance soutenue — angle structuration",
              "Forte autonomie — angle investissement",
            ].map((levier, i) => (
              <div key={i} className="flex items-start gap-2 mb-1.5">
                <div className="w-4 h-4 rounded bg-ochre/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-ochre text-xs font-bold">{i + 1}</span>
                </div>
                <span className="text-xs text-muted leading-tight">{levier}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-offwhite border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-muted">Sources : Pappers · INSEE · BODACC</span>
          <span className="text-xs text-muted">12 pages</span>
        </div>
      </div>
    </div>
  );
}
