import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projet Parlios — histoire & vision",
};

export default function ProjetParliosPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      <header className="space-y-3">
        <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-zinc-500">
          Parlios · Projet
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          L&apos;IA qui respecte ton temps, pas l&apos;inverse.
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 max-w-2xl">
          Parlios est né d&apos;une question simple : comment aider les entrepreneurs à
          reprendre le contrôle de leur temps, sans tomber dans la complexité des outils
          habituels ? Ici, l&apos;IA n&apos;est pas un gadget : c&apos;est une assistance
          concrète, humaine, centrée sur ta réalité de terrain.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 bg-white p-4">
          <h2 className="text-sm font-semibold text-zinc-900 mb-1">
            1 · Simplifier le quotidien
          </h2>
          <p className="text-sm text-zinc-600">
            Te débarrasser des tâches répétitives, des to-do qui s&apos;accumulent,
            et des décisions micro qui épuisent. Parlios t&apos;aide à voir clair
            et à automatiser ce qui peut l&apos;être.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-4">
          <h2 className="text-sm font-semibold text-zinc-900 mb-1">
            2 · Honorer ton énergie
          </h2>
          <p className="text-sm text-zinc-600">
            Tu n&apos;es pas une machine. Parlios t&apos;accompagne pour respecter ton
            rythme, ton attention et ta créativité, au lieu de te forcer à en faire
            toujours plus.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-4">
          <h2 className="text-sm font-semibold text-zinc-900 mb-1">
            3 · Construire un mouvement
          </h2>
          <p className="text-sm text-zinc-600">
            Parlios n&apos;est pas seulement un outil : c&apos;est un espace de partage,
            d&apos;entraide et d&apos;expérimentation autour d&apos;une IA plus simple,
            plus saine et plus accessible.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">
          Trois piliers : maison, compagnon, mouvement.
        </h2>
        <div className="space-y-3 text-sm text-zinc-600">
          <p>
            <span className="font-medium text-zinc-900">Une maison</span> — un espace
            stable, clair, où tes outils, tes projets et ta mémoire sont rassemblés.
            Tu sais où aller, tu sais quoi ouvrir, tu sais quoi faire ensuite.
          </p>
          <p>
            <span className="font-medium text-zinc-900">Un compagnon</span> — un ChatGPT
            spécialisé Parlios, qui connaît ta façon de travailler et t&apos;aide à
            formuler, décider, structurer. Tu n&apos;es plus seul face à la page blanche.
          </p>
          <p>
            <span className="font-medium text-zinc-900">Un mouvement</span> — une
            communauté d&apos;entrepreneurs qui avancent dans le même sens : mieux
            utiliser l&apos;IA, sans se perdre dans le bruit et les promesses vides.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-5 space-y-3">
        <h2 className="text-sm font-semibold text-zinc-900">
          Et concrètement, où va Parlios ?
        </h2>
        <ul className="text-sm text-zinc-600 space-y-1.5 list-disc list-inside">
          <li>Un Hub IA central pour piloter ton activité (planning, idées, clients).</li>
          <li>Une bibliothèque d&apos;outils gratuits, simples, pensés pour le terrain.</li>
          <li>Des parcours guidés pour t&apos;aider à lancer un projet, une offre, un contenu.</li>
          <li>Une communauté France/Canada pour partager, tester, s&apos;entraider.</li>
        </ul>
      </section>
    </div>
  );
}
