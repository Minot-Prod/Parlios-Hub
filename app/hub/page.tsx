"use client";

import * as React from "react";

type MissionCategory = "create" | "media" | "code" | "content" | "other";

type Mission = {
  id: string;
  label: string;
  helper: string;
  category: MissionCategory;
};

const MISSIONS: Mission[] = [
  {
    id: "create-website",
    category: "create",
    label: "Créer un site web",
    helper: "Landing page, site vitrine, page de vente simple…"
  },
  {
    id: "create-app",
    category: "create",
    label: "Créer une application",
    helper: "Outil interne, mini SaaS, dashboard, app métier."
  },
  {
    id: "create-offer",
    category: "create",
    label: "Créer une offre / boutique",
    helper: "Page d’offre, bundle, tunnel simple pour vendre."
  },
  {
    id: "create-image",
    category: "media",
    label: "Générer une image",
    helper: "Prompts image (Midjourney, DALL·E, etc.)."
  },
  {
    id: "create-video",
    category: "media",
    label: "Générer une vidéo",
    helper: "Script, storyboard, idées pour vidéo IA."
  },
  {
    id: "create-presentation",
    category: "content",
    label: "Créer une présentation",
    helper: "Slides, webinaire, conférence, atelier."
  },
  {
    id: "code",
    category: "code",
    label: "Écrire / améliorer du code",
    helper: "Features, refacto, debug, intégrations API."
  },
  {
    id: "brainstorm",
    category: "other",
    label: "Brainstorm / coaching Parlios",
    helper: "Clarifier une idée, un projet, une stratégie."
  }
];

export default function HubPage() {
  const [selectedId, setSelectedId] = React.useState<string | null>(null);

  const selectedMission = React.useMemo(
    () => MISSIONS.find((m) => m.id === selectedId) ?? null,
    [selectedId]
  );

  return (
    <div className="relative min-h-screen bg-zinc-50 text-zinc-900 dark:bg-slate-950 dark:text-slate-50">
      {/* Fond doux */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-zinc-50 to-zinc-100 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
        {/* Header */}
        <header className="text-center space-y-2">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-zinc-500 dark:text-slate-400">
            Parlios · Hub IA
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Parle au cœur de Parlios.
          </h1>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-slate-300 max-w-2xl mx-auto">
            Fenêtre centrale du système : tu expliques ce que tu veux créer, optimiser
            ou comprendre. Parlios réfléchit avec toi et te propose le meilleur chemin.
          </p>
        </header>

        {/* Chat central */}
        <section className="max-w-3xl mx-auto">
          <div className="rounded-3xl border border-zinc-200 bg-white/95 shadow-lg shadow-zinc-200/70 overflow-hidden dark:border-slate-800 dark:bg-slate-950/90 dark:shadow-black/60">
            {/* Header du chat */}
            <div className="px-5 py-3 border-b border-zinc-200 flex items-center justify-between gap-3 dark:border-slate-800">
              <div>
                <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-zinc-500 dark:text-slate-400">
                  Parlios · Core Chat
                </p>
              </div>
              <span className="text-[10px] px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-900/40 dark:text-emerald-200 dark:border-emerald-500/60">
                Prêt
              </span>
            </div>

            {/* Zone de contexte / mode sélectionné */}
            <div className="px-5 py-4 space-y-3 min-h-[220px]">
              {selectedMission && (
                <div className="rounded-2xl border border-amber-300 bg-amber-50 px-4 py-3 text-xs sm:text-sm text-zinc-900 space-y-1.5 dark:border-amber-500/70 dark:bg-amber-900/20 dark:text-amber-50">
                  <p className="text-[11px] uppercase tracking-wide text-amber-700 dark:text-amber-200">
                    Mode sélectionné
                  </p>
                  <p className="font-medium">{selectedMission.label}</p>
                  <p className="text-[11px] text-zinc-700 dark:text-amber-100/90">
                    {selectedMission.helper}
                  </p>
                  <p className="text-[11px] text-zinc-600 dark:text-amber-100/80">
                    Décris ton besoin dans le champ ci-dessous, Parlios adaptera ses questions
                    et son plan à ce mode.
                  </p>
                </div>
              )}

              {!selectedMission && (
                <p className="text-[12px] text-zinc-500 dark:text-slate-400">
                  Choisis une option en dessous ou écris simplement ce que tu veux faire
                  (comme sur Kimi ou Skywork). Parlios s’occupera de structurer le plan.
                </p>
              )}
            </div>

            {/* Zone d’input */}
            <div className="border-t border-zinc-200 px-4 py-3 sm:px-5 sm:py-4 dark:border-slate-800">
              <form
                className="flex flex-col gap-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <textarea
                  className="min-h-[80px] max-h-[180px] resize-y rounded-2xl bg-zinc-50 border border-zinc-200 px-3 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-50 dark:placeholder:text-slate-500"
                  placeholder='Ex : "Crée un site simple pour mon projet IA avec une page d’accueil et une page contact."'
                />
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[11px] text-zinc-500 dark:text-slate-400">
                    Plus tard, ce chat sera branché à ton orchestrateur d&apos;agents Parlios.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium bg-amber-500 text-zinc-900 hover:bg-amber-400 transition border border-amber-600/50 dark:text-slate-950"
                  >
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Raccourcis / cartes d’options */}
        <section className="space-y-3">
          <div className="text-center space-y-1">
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-zinc-500 dark:text-slate-400">
              Choisis une option
            </p>
            <p className="text-xs text-zinc-500 dark:text-slate-400">
              Création, média, code, business, optimisation… Choisis une carte,
              Parlios adaptera les questions et le plan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {MISSIONS.map((mission) => {
              const isActive = mission.id === selectedId;
              return (
                <button
                  key={mission.id}
                  type="button"
                  onClick={() =>
                    setSelectedId((prev) =>
                      prev === mission.id ? null : mission.id
                    )
                  }
                  className={[
                    "text-left rounded-2xl border px-4 py-3 text-xs sm:text-sm transition",
                    isActive
                      ? "border-amber-500 bg-amber-50 shadow-sm dark:border-amber-400 dark:bg-amber-900/30"
                      : "border-zinc-200 bg-white hover:border-amber-400 hover:bg-amber-50/40 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-amber-400/80 dark:hover:bg-amber-900/10"
                  ].join(" ")}
                >
                  <p className="font-medium text-zinc-900 dark:text-slate-50">
                    {mission.label}
                  </p>
                  <p className="mt-1 text-[11px] text-zinc-600 dark:text-slate-400">
                    {mission.helper}
                  </p>
                </button>
              );
            })}
          </div>

          <p className="text-[11px] text-center text-zinc-500 dark:text-slate-400">
            Tu peux aussi ignorer les cartes et simplement écrire ton idée dans le chat.
          </p>
        </section>

        <footer className="pt-4 pb-6 text-center text-[11px] text-zinc-500 dark:text-slate-500">
          Parlios — optimise ton temps, libère ton potentiel.
        </footer>
      </div>
    </div>
  );
}
