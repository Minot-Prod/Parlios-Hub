import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Parlios",
};

export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
      <header className="space-y-3 text-center">
        <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-zinc-500">
          Parlios · Contact
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Entrer en contact avec Parlios.
        </h1>
        <p className="text-sm sm:text-base text-zinc-600">
          Une question sur le projet, une idée, une demande pro ? Tu peux utiliser les
          infos ci-dessous pour nous joindre.
        </p>
      </header>

      <section className="rounded-2xl border border-zinc-200 bg-white p-5 space-y-3 text-sm text-zinc-600">
        <p>
          Pour l&apos;instant, le contact se fait simplement par email. Le formulaire
          complet et les autres canaux (communauté, événements) arriveront plus tard.
        </p>
        <p>
          <span className="font-medium text-zinc-900">Email :</span>{" "}
          <span className="underline decoration-dotted">
            contact@parlios.fr
          </span>
        </p>
        <p className="text-[11px] text-zinc-500">
          Merci de préciser en quelques lignes ton contexte (activité, situation,
          ce que tu cherches à améliorer) pour qu&apos;on puisse te répondre au mieux.
        </p>
      </section>
    </div>
  );
}
