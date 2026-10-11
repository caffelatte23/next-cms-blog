import { createEnv } from "@t3-oss/env-nextjs";
import * as v from "valibot";

export const env = createEnv({
  server: {
    SERVER_DOMAIN: v.string(),
    CMS_API_KEY: v.string(),
  },
  runtimeEnv: {
    SERVER_DOMAIN: process.env.SERVER_DOMAIN,
    CMS_API_KEY: process.env.CMS_API_KEY,
  },
});
