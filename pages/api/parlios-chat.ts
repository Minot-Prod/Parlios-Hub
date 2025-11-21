import type { NextApiRequest, NextApiResponse } from "next";

type Role = "user" | "assistant" | "system";

interface IncomingBody {
  message: string;
  modeId?: string;
  packId?: string;
  history?: {
    role: Role;
    content: string;
    modeId?: string;
    packId?: string;
  }[];
  options?: {
    enableTTS?: boolean;
    enableSTT?: boolean;
    enableImages?: boolean;
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const BASE44_URL = process.env.BASE44_V2_API_URL;
  const BASE44_KEY = process.env.BASE44_V2_API_KEY;

  if (!BASE44_URL || !BASE44_KEY) {
    return res.status(500).json({
      error:
        "BASE44_V2_API_URL ou BASE44_V2_API_KEY manquant dans .env.local / Netlify.",
    });
  }

  const body = req.body as IncomingBody;

  try {
    const forwardedBody = {
      message: body.message,
      modeId: body.modeId,
      packId: body.packId,
      history: body.history ?? [],
      options: body.options ?? {
        enableTTS: true,
        enableSTT: true,
        enableImages: true,
      },
      source: "parlios.fr",
      client: "parlios-hub-next",
    };

    const response = await fetch(BASE44_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer \\${BASE44\_KEY}`,
      },
      body: JSON.stringify(forwardedBody),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      return res.status(response.status).json({
        error: "Erreur côté Base44 v2",
        status: response.status,
        data,
      });
    }

    return res.status(200).json(data);
  } catch (error: any) {
    console.error("Error calling Base44 v2:", error);
    return res.status(500).json({
      error: "Erreur interne serveur Next /api/parlios-chat",
      details: error?.message ?? "unknown",
    });
  }
}
