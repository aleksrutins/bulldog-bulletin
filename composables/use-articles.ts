export type Article = {
    id: number;
    status: 'published' | 'draft' | 'archived';
    
    user_created: string;
    user_updated: string;

    date_created: Date;
    date_updated: Date;

    title: string;
    content: object;
}

export default () => {
    const { getItems } = useDirectusItems();
    return useAsyncData('articles', () => getItems<Article>({ collection: 'articles' }))
}