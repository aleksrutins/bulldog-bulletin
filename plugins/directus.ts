import { createDirectus, rest, readItem, readItems } from "@directus/sdk";
import type { DirectusSchema } from "~/directus";
import type { ArrayElement } from "~/type-utils";

const directus = createDirectus<DirectusSchema>(
    process.env.NUXT_PUBLIC_DIRECTUS_URL ??
        "https://bulldog-bulletin-production.up.railway.app",
).with(rest());

export default defineNuxtPlugin(() => ({
    provide: { directus, readItem, readItems },
}));

export {
    type DirectusSchema
}

export type Article = ArrayElement<DirectusSchema['articles']>;
export type Column = ArrayElement<DirectusSchema['columns']>;