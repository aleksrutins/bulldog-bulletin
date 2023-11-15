import { createDirectus, rest, readItem, readItems } from "@directus/sdk";

const directus = createDirectus(
    process.env.NUXT_PUBLIC_DIRECTUS_URL ??
        "https://bulldog-bulletin-production.up.railway.app",
).with(rest());

export default defineNuxtPlugin(() => ({
    provide: { directus, readItem, readItems },
}));
