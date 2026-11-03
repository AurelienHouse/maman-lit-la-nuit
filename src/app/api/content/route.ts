import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const CONTENT_FILE_PATH = path.join(process.cwd(), "src", "data", "site-content.json");

export async function GET() {
  try {
    // Si un token GitHub est configuré sur Vercel, on peut lire la dernière version depuis GitHub
    const githubToken = process.env.GITHUB_TOKEN;
    const githubRepo = process.env.GITHUB_REPO || "AurelienHouse/maman-lit-la-nuit";

    if (githubToken) {
      const res = await fetch(
        `https://api.github.com/repos/${githubRepo}/contents/src/data/site-content.json`,
        {
          headers: {
            Authorization: `Bearer ${githubToken}`,
            Accept: "application/vnd.github.v3+json",
          },
          cache: "no-store",
        }
      );
      if (res.ok) {
        const fileData = await res.json();
        const decoded = Buffer.from(fileData.content, "base64").toString("utf-8");
        return NextResponse.json(JSON.parse(decoded));
      }
    }

    const raw = await fs.readFile(CONTENT_FILE_PATH, "utf-8");
    return NextResponse.json(JSON.parse(raw));
  } catch {
    return NextResponse.json({ overrides: {}, customBooks: null, mamaProfile: null });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { password, content } = body;

    const expectedPassword = process.env.ADMIN_PASSWORD || "chloe2026";
    if (password !== expectedPassword) {
      return NextResponse.json(
        { error: "Mot de passe administrateur incorrect." },
        { status: 401 }
      );
    }

    const jsonString = JSON.stringify(content, null, 2);

    // 1. Si GITHUB_TOKEN est présent (en production sur Vercel), on commit directement sur GitHub !
    const githubToken = process.env.GITHUB_TOKEN;
    const githubRepo = process.env.GITHUB_REPO || "AurelienHouse/maman-lit-la-nuit";

    if (githubToken) {
      // Récupérer le SHA actuel du fichier s'il existe
      const getRes = await fetch(
        `https://api.github.com/repos/${githubRepo}/contents/src/data/site-content.json`,
        {
          headers: {
            Authorization: `Bearer ${githubToken}`,
            Accept: "application/vnd.github.v3+json",
          },
          cache: "no-store",
        }
      );

      let sha: string | undefined;
      if (getRes.ok) {
        const existing = await getRes.json();
        sha = existing.sha;
      }

      const putRes = await fetch(
        `https://api.github.com/repos/${githubRepo}/contents/src/data/site-content.json`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${githubToken}`,
            Accept: "application/vnd.github.v3+json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: "chore(admin): mise à jour du contenu depuis le mode admin du site",
            content: Buffer.from(jsonString, "utf-8").toString("base64"),
            ...(sha ? { sha } : {}),
          }),
        }
      );

      if (!putRes.ok) {
        const errText = await putRes.text();
        return NextResponse.json(
          { error: `Erreur GitHub API: ${errText}` },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        mode: "github",
        message: "Sauvegardé sur GitHub & Vercel ! Le site public se met à jour automatiquement.",
      });
    }

    // 2. Sinon, sauvegarde directe sur le disque local (en développement local)
    try {
      await fs.writeFile(CONTENT_FILE_PATH, jsonString, "utf-8");
      return NextResponse.json({
        success: true,
        mode: "local-file",
        message: "Sauvegardé dans le fichier src/data/site-content.json !",
      });
    } catch {
      // Sur Vercel sans GITHUB_TOKEN, le système de fichiers est en lecture seule
      return NextResponse.json({
        success: true,
        mode: "browser-only",
        message:
          "Modifications enregistrées dans votre navigateur ! (Pour synchroniser entre tous les appareils sur Vercel, ajoutez GITHUB_TOKEN ou exportez vos modifications).",
      });
    }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Erreur inconnue";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
