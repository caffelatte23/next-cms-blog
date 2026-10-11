import { createClient } from "microcms-js-sdk";
import { env } from "@/env";

export const client = createClient({
  serviceDomain: env.SERVER_DOMAIN,
  apiKey: env.CMS_API_KEY,
});
