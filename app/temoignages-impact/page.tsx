import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact & témoignages Parlios",
};

export default function ImpactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      <header className="space-y-3">
        <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-zinc-500">
          Parlios · Impact
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          L&apos;impact, ce n&apos;est pas que des chiffres.
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 max-w-2xl">
          On parlera forcément de temps gagné, de charge mentale allégée et de projets
          enfin lancés. Mais l&apos;objectif derrière Parlios, c&apos;est surtout de te
          redonner confiance dans ta capacité à avancer, à ton rythme.
        </p>
      </header>

      <section className="rounded-2xl border border-zinc-200 bg-white p-5 space-y-3">
        <h2 className="text-sm font-semibold text-zinc-900">
          Ce que Parlios cherche à mesurer.
        </h2>
        <ul className="text-sm text-zinc-600 space-y-1.5 list-disc list-inside">
          <li>Combien d&apos;heures de charge mentale tu récupères chaque semaine.</li>
          <li>Combien de projets passent enfin du &quot;un jour&quot; à &quot;c&apos;est fait&quot;.</li>
          <li>À quel point tu te sens plus clair dans tes priorités et tes décisions.</li>
        </ul>
        <p className="text-sm text-zinc-600">
          Les premiers témoignages seront ajoutés ici au fur et à mesure des retours.
        </p>
      </section>
    </div>
  );
}
