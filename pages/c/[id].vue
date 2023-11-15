<script setup lang="ts">
    const { params } = useRoute();
    
    const { data: articles } = await useArticles();
    const filteredArticles = computed(() => articles.value?.filter(a => (a.categories as unknown as string[]).includes(params.id as string)))
</script>

<template>
    <div v-for="article in filteredArticles">
        {{ article.title }}
    </div>
</template>
