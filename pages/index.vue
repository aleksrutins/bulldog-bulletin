<script setup lang="ts">
const { data: articles } = await useArticles();
</script>
<template>
    <div>
        <div v-for="article of articles">
            <h1>{{ article.title }}</h1>
        </div>
    </div>
</template>
