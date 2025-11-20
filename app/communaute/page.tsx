import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Communauté Parlios — avancer ensemble",
};

export default function CommunautePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      <header className="space-y-3">
        <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-zinc-500">
          Parlios · Communauté
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Tu n&apos;es pas seul face à l&apos;IA.
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 max-w-2xl">
          La communauté Parlios, c&apos;est un espace pour parler vrai : ce qui fonctionne,
          ce qui bloque, ce qu&apos;on ne comprend pas encore, et comment on peut se
          simplifier la vie grâce à l&apos;IA sans se cramer.
        </p>
      </header>

      <section className="grid gap-6 sm:grid-cols-3">
        <div className="rounded-2xl border border-zinc-200 bg-white p-4">
          <h2 className="text-sm font-semibold text-zinc-900 mb-1">
            Espace d&apos;échange
          </h2>
          <p className="text-sm text-zinc-600">
            Un lieu pour poser tes questions, partager tes essais, et profiter des idées
            des autres entrepreneurs (France & Canada).
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-4">
          <h2 className="text-sm font-semibold text-zinc-900 mb-1">
            Sessions & ateliers
          </h2>
          <p className="text-sm text-zinc-600">
            Des sessions ponctuelles (en ligne) pour tester des outils, revoir un process,
            ou co-construire de nouveaux workflows IA.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-4">
          <h2 className="text-sm font-semibold text-zinc-900 mb-1">
            Co-développement
          </h2>
          <p className="text-sm text-zinc-600">
            L&apos;idée : que chacun reparte avec un petit plan d&apos;action concret,
            plutôt qu&apos;avec une liste de concepts théoriques.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-white p-5 space-y-3">
        <h2 className="text-sm font-semibold text-zinc-900">
          Comment rejoindre la communauté ?
        </h2>
        <p className="text-sm text-zinc-600">
          L&apos;ouverture officielle de l&apos;espace communautaire (Discord / cercle privé)
          sera annoncée prochainement. L&apos;idée est simple : un lieu bienveillant, sans
          bullshit, pour avancer ensemble sur l&apos;usage de l&apos;IA dans nos activités.
        </p>
        <p className="text-sm text-zinc-600">
          Si tu veux être tenu au courant, commence par tester le{" "}
          <span className="font-medium text-zinc-900">Hub IA</span> ou les{" "}
          <span className="font-medium text-zinc-900">outils gratuits</span> : tu seras
          automatiquement sur le radar pour les prochaines étapes.
        </p>
      </section>
    </div>
  );
}
