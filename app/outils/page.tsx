import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outils IA Parlios — gratuits & simples",
};

const categories = [
  {
    title: "Temps & organisation",
    description: "Planifier ta semaine, clarifier tes priorités, organiser tes projets.",
    hint: "Ex : plan de semaine, récap de journée, checklist projet."
  },
  {
    title: "Business & offres",
    description: "T&apos;aider à structurer une offre, une page de vente, un tunnel simple.",
    hint: "Ex : pitch d&apos;offre, plan d&apos;appel, séquence emails."
  },
  {
    title: "Contenus & présentation",
    description: "Créer plus facilement des textes, slides et ressources pédagogiques.",
    hint: "Ex : plan de présentation, script vidéo, post LinkedIn."
  },
  {
    title: "Technique & automatisation",
    description: "Accompagner tes premières automatisations sans jargon inutile.",
    hint: "Ex : scénario simple, mapping des outils, checklist technique."
  }
];

export default function OutilsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      <header className="space-y-3">
        <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-zinc-500">
          Parlios · Outils
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Une collection d&apos;outils IA pensés pour le terrain.
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 max-w-2xl">
          L&apos;objectif n&apos;est pas de te perdre avec 300 fonctionnalités.
          C&apos;est de te proposer des petits outils IA ciblés, gratuits, que tu peux
          tester en quelques minutes pour voir un résultat concret.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="rounded-2xl border border-zinc-200 bg-white p-4 flex flex-col gap-2"
          >
            <h2 className="text-sm font-semibold text-zinc-900">
              {cat.title}
            </h2>
            <p className="text-sm text-zinc-600">
              {cat.description}
            </p>
            <p className="text-[11px] text-zinc-500">
              {cat.hint}
            </p>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-dashed border-zinc-300 bg-white/60 p-5 space-y-3">
        <h2 className="text-sm font-semibold text-zinc-900">
          La suite arrive progressivement.
        </h2>
        <p className="text-sm text-zinc-600">
          Les premiers outils seront publiés dans les prochaines semaines : chaque outil
          aura sa propre page, une explication simple, et un bouton pour tester / lier
          ton compte.
        </p>
        <p className="text-sm text-zinc-600">
          En attendant, tu peux déjà passer par le{" "}
          <Link href="/hub" className="font-medium text-amber-600 hover:text-amber-700">
            Hub IA Parlios
          </Link>{" "}
          pour décrire ce que tu veux faire : Parlios te proposera un chemin adapté.
        </p>
      </section>
    </div>
  );
}
