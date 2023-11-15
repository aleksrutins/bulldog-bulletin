<script setup>
const { getItems } = useDirectusItems();
const articles = await getItems({ collection: 'articles' })
</script>
<template>
    <div>
        <div v-for="article of articles">
            <h1>{{ article.title }}</h1>
        </div>
    </div>
</template>