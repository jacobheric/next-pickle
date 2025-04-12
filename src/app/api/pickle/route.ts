import { pickelMe } from "@/lib/agentKit";

export const dynamic = "force-static";

export async function GET() {
  const response = await pickelMe();
  console.log("pickle recipe", response);
  return Response.json({ response });
}
