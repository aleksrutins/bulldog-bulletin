<script setup lang="ts">
    const { params: { id } } = useRoute();
    const { data: articles } = await useArticles();
    const filteredArticles = computed(() => articles.value?.filter(a => a.categories.includes(id)))
</script>

<template>
    <div v-for="article in filteredArticles">
        {{ article.title }}
    </div>
</template>
