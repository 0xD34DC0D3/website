// Serves the static site, plus /api/me: forwards the parent-domain
// voodoo_session cookie to voodoo's /me so the header can show sign-in state.

interface Env {
  ASSETS: { fetch(req: Request): Promise<Response> };
  AUTH_URL: string;
}

const SESSION_COOKIE = "voodoo_session";
const noStore = { "Cache-Control": "private, no-store" };

function readCookie(header: string | null, name: string): string | null {
  for (const part of (header ?? "").split(";")) {
    const i = part.indexOf("=");
    if (i > 0 && part.slice(0, i).trim() === name) return part.slice(i + 1).trim();
  }
  return null;
}

async function me(req: Request, env: Env): Promise<Response> {
  const session = readCookie(req.headers.get("Cookie"), SESSION_COOKIE);
  if (!session) return new Response(null, { status: 401, headers: noStore });

  const res = await fetch(new URL("/me", env.AUTH_URL), {
    headers: { Cookie: `${SESSION_COOKIE}=${session}`, Accept: "application/json" },
  });
  if (!res.ok) return new Response(null, { status: res.status === 401 ? 401 : 502, headers: noStore });

  const { email } = (await res.json()) as { email: string };
  return Response.json({ email }, { headers: noStore });
}

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const url = new URL(req.url);
    if (url.pathname === "/api/me" && req.method === "GET") return me(req, env);
    return env.ASSETS.fetch(req);
  },
};
