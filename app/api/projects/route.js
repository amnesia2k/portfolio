import { projects } from "@/app/data/projects";

export async function GET() {
  return new Response(JSON.stringify(projects), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
