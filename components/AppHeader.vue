<script setup>
const categories = ['Sports', 'Drama', 'U.S.', 'World']
</script>
<template>
    <div class="border-b p-5 sticky-top flex flex-col items-center justify-center">
        <NuxtLink href="/" class="font-display text-2xl block">The Bulldog Bulletin</NuxtLink>
        <ul class="flex flex-row">
            <li v-for="category in categories" :key="category" class="mx-2">
                <NuxtLink :href="`/c/${category}`" class="serif text-sm">{{ category }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>
