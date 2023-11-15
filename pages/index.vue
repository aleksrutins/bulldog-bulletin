<script setup>
const { $directus, $readItems } = useNuxtApp();

const articles = await $directus.request($readItems('articles')).catch(console.log)
</script>
<template>
    <div>
        <div v-for="article of articles">
            <h1>{{ article.title }}</h1>
        </div>
    </div>
</template>
