import type { Config } from "@react-router/dev/config";

export default {
  // SPA mode: the contact form submits straight to StaticForms from the
  // browser, so no server runtime is needed and the build is fully static.
  ssr: false,
} satisfies Config;
