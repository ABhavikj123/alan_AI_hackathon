import { NextResponse } from "next/server";
import { z } from "zod";
import { env } from "@/lib/env";

const healthSchema = z.object({
  status: z.literal("ok"),
  app: z.string(),
  timestamp: z.string(),
});

/** Readiness probe used by the environment setup and by uptime checks. */
export function GET() {
  const body = healthSchema.parse({
    status: "ok",
    app: env.NEXT_PUBLIC_APP_NAME,
    timestamp: new Date().toISOString(),
  });

  return NextResponse.json(body);
}
