<script setup>
const { $directus, $readItems } = useNuxtApp();

const { data: articles } = await useAsyncData('articles', () =>
    $directus.request(
        $readItems('articles', {
            fields: ['id', 'title', 'date_created', { 'user_created': ['first_name', 'last_name'] }],
            sort: '-date_created'
        })
    )
)
</script>
<template>
    <div>
        <div v-for="article of articles">
            <h1>{{ article.title }}</h1>
        </div>
    </div>
</template>