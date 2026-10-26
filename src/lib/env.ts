import { z } from "zod";

/**
 * Environment values read once at startup. Optional values get local defaults
 * so a fresh clone runs without any .env file.
 */
const envSchema = z.object({
  NEXT_PUBLIC_APP_NAME: z.string().min(1).default("Alan AI Hackathon"),
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  NODE_ENV: process.env.NODE_ENV,
});
