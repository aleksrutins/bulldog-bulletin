import { createDirectus, graphql, readItem, readItems } from "@directus/sdk";

const directus = createDirectus('https://bulldog-bulletin-production.up.railway.app').with(graphql());

export default defineNuxtPlugin(() => ({
    provide: { directus, readItem, readItems }
}))