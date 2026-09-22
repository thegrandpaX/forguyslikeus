import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function POST(request: Request) {
  let body: { name?: string; contact?: string; sector?: string; reason?: string };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const { name, contact, sector, reason } = body;
  if (!name || !contact || !reason) {
    return Response.json({ error: "Missing required fields." }, { status: 400 });
  }

  const submission = {
    name: String(name).slice(0, 200),
    contact: String(contact).slice(0, 200),
    sector: String(sector || "general").slice(0, 50),
    reason: String(reason).slice(0, 2000),
    submittedAt: new Date().toISOString(),
  };

  const { env } = getCloudflareContext();
  const key = `submission:${Date.now()}:${crypto.randomUUID()}`;
  await env.RESOURCE_SUBMISSIONS.put(key, JSON.stringify(submission));

  return Response.json({ status: "received" }, { status: 201 });
}
