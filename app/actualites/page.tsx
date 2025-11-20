import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Actualités Parlios — évolutions & nouveautés",
};

const items = [
  {
    title: "Lancement du Hub IA Parlios (version publique)",
    status: "En préparation",
    text: "Première version ouverte du Hub, avec un chat central et des raccourcis guidés."
  },
  {
    title: "Premiers outils gratuits alignés sur la méthode Parlios",
    status: "À venir",
    text: "Des petits outils ciblés pour t&apos;aider sur le temps, l&apos;offre et les contenus."
  },
  {
    title: "Ouverture de la communauté Parlios France / Canada",
    status: "À venir",
    text: "Espace d&apos;échange pour les entrepreneurs qui veulent utiliser l&apos;IA sans se perdre."
  }
];

export default function ActualitesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      <header className="space-y-3">
        <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-zinc-500">
          Parlios · Actualités
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Les prochaines étapes du projet.
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 max-w-2xl">
          Parlios avance par petits blocs concrets : d&apos;abord le Hub, puis les outils,
          puis la communauté. Pas de roadmap théorique, juste des jalons clairs.
        </p>
      </header>

      <section className="space-y-4">
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-zinc-200 bg-white p-4 space-y-1.5"
          >
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-sm font-semibold text-zinc-900">
                {item.title}
              </h2>
              <span className="text-[11px] px-2 py-1 rounded-full bg-zinc-100 text-zinc-700 border border-zinc-200">
                {item.status}
              </span>
            </div>
            <p className="text-sm text-zinc-600">
              {item.text}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}
