export default () => {
    const { $directus, $readItems } = useNuxtApp()

    return useAsyncData('articles', () => $directus.request($readItems('articles')));
}