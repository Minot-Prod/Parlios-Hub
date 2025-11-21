"use client";

import React, { useState, useEffect, useRef, FormEvent } from "react";

type Role = "user" | "assistant" | "system";

type ChatMessage = {
  id: string;
  role: Role;
  content: string;
  modeId?: string;
  packId?: string;
};

interface ParliosChatWidgetNextProps {
  initialModeId?: string;
  initialPackId?: string;
  showModeTiles?: boolean;
  className?: string;
}

export const ParliosChatWidgetNext: React.FC<ParliosChatWidgetNextProps> = ({
  initialModeId,
  initialPackId,
  showModeTiles = true,
  className = "",
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Bienvenue sur Parlios OS v2. Choisis un mode ou commence à taper ton message pour lancer le chat.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [activeModeId, setActiveModeId] = useState<string | undefined>(
    initialModeId
  );
  const [activePackId, setActivePackId] = useState<string | undefined>(
    initialPackId
  );

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isSending) return;

    const userMessage: ChatMessage = {
      id: `user-\\${Date.now()}`,
      role: "user",
      content: input.trim(),
      modeId: activeModeId,
      packId: activePackId,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsSending(true);

    try {
      const response = await fetch("/api/parlios-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage.content,
          modeId: activeModeId,
          packId: activePackId,
          history: messages.map((m) => ({
            role: m.role,
            content: m.content,
            modeId: m.modeId,
            packId: m.packId,
          })),
          options: {
            enableTTS: true,
            enableSTT: true,
            enableImages: true,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP \\${response.status}`);
      }

      const data = await response.json();

      const replyText =
        data.reply ??
        data.message ??
        data.content ??
        "Réponse reçue depuis Base44 v2, mais le format n'est pas encore mappé. À ajuster.";

      const assistantMessage: ChatMessage = {
        id: `assistant-\\${Date.now()}`,
        role: "assistant",
        content: replyText,
        modeId: data.modeId ?? activeModeId,
        packId: data.packId ?? activePackId,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error sending message", error);
      const errorMessage: ChatMessage = {
        id: `error-\\${Date.now()}`,
        role: "system",
        content:
          "Erreur en appelant l'API Parlios/Base44 v2. Vérifie l'URL, la clé API et l'endpoint dans /api/parlios-chat.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div
      className={\`flex flex-col h-full w-full max-h-\[90vh] rounded-xl border border-neutral-800 bg-black/80 text-neutral-100 overflow-hidden \\${className}\\`}
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800 bg-gradient-to-r from-neutral-900 to-neutral-800">
        <div className="flex flex-col">
          <span className="text-sm font-semibold tracking-wide">
            Parlios OS v2
          </span>
          <span className="text-xs text-neutral-400">
            Chat connecté à Base44 v2 (modes, packs, multi-agents)
          </span>
        </div>
        <div className="text-\[10px] px-2 py-1 rounded-full border border-neutral-700 text-neutral-300">
          BETA – parlios.fr
        </div>
      </div>

      {showModeTiles && (
        <div className="flex gap-2 px-3 py-2 overflow-x-auto border-b border-neutral-900 bg-neutral-950/80">
          <button
            type="button"
            onClick={() => setActiveModeId(undefined)}
            className={\`px-3 py-1.5 text-xs rounded-full border \${!activeModeId
              ? "border-white bg-white text-black"
              : "border-neutral-700 text-neutral-300"
              }\`}
          >
            Auto (UA)
          </button>
          <button
            type="button"
            onClick={() => setActiveModeId("focus-writing")}
            className={\`px-3 py-1.5 text-xs rounded-full border \${activeModeId === "focus-writing"
              ? "border-white bg-white text-black"
              : "border-neutral-700 text-neutral-300"
              }\`}
          >
            ✍️ Rédaction
          </button>
          <button
            type="button"
            onClick={() => setActiveModeId("focus-strategy")}
            className={\`px-3 py-1.5 text-xs rounded-full border \${activeModeId === "focus-strategy"
              ? "border-white bg-white text-black"
              : "border-neutral-700 text-neutral-300"
              }\`}
          >
            🧠 Stratégie
          </button>
          <button
            type="button"
            onClick={() => setActiveModeId("focus-dev")}
            className={\`px-3 py-1.5 text-xs rounded-full border \${activeModeId === "focus-dev"
              ? "border-white bg-white text-black"
              : "border-neutral-700 text-neutral-300"
              }\`}
          >
            🛠️ Dev
          </button>
        </div>
      )}

      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 text-sm">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={\`flex \\${msg.role === "user" ? "justify-end" : "justify-start"}\\`}
          >
            <div
              className={\`max-w-[80%] rounded-2xl px-3 py-2 leading-relaxed \${msg.role === "user"
                ? "bg-white text-black"
                : msg.role === "assistant"
                  ? "bg-neutral-900 text-neutral-100"
                  : "bg-red-950 text-red-100 text-xs"
                }\`}
            >
              <div className="whitespace-pre-wrap">{msg.content}</div>
              {(msg.modeId || msg.packId) && (
                <div className="mt-1 text-\[10px] opacity-70">
                  {msg.modeId && <span>Mode: {msg.modeId}</span>}
                  {msg.modeId && msg.packId && <span> • </span>}
                  {msg.packId && <span>Pack: {msg.packId}</span>}
                </div>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form
        onSubmit={handleSend}
        className="border-t border-neutral-800 bg-neutral-950/90 px-3 py-2 flex items-center gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Écris ton message…"
          className="flex-1 bg-neutral-900 border border-neutral-700 rounded-full px-3 py-2 text-sm text-neutral-100 outline-none focus:border-neutral-300"
        />
        <button
          type="submit"
          disabled={isSending || !input.trim()}
          className="px-3 py-2 text-xs rounded-full border border-neutral-600 hover:border-white disabled:opacity-40 disabled:hover:border-neutral-600 transition"
        >
          {isSending ? "…" : "Envoyer"}
        </button>
      </form>
    </div>
  );
};

export default ParliosChatWidgetNext;
