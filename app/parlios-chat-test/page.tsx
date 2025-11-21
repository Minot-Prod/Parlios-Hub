"use client";

import { ParliosChatWidget } from "../../src/components/ParliosChatWidget";

export default function ParliosChatTestPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "#e5e7eb",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <section>
        <h1
          style={{
            fontSize: "1.6rem",
            fontWeight: 700,
            marginBottom: "0.5rem",
          }}
        >
          Parlios AI Chat — Page de test
        </h1>
        <p
          style={{
            fontSize: "0.95rem",
            maxWidth: "540px",
            color: "#9ca3af",
          }}
        >
          Page de test pour vérifier le widget Parlios AI (modes + voix +
          Base44) avant intégration sur tout le site.
        </p>
      </section>

      <ParliosChatWidget userId={undefined} isAdmin={true} />
    </main>
  );
}
