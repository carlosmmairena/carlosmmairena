import rss from '@astrojs/rss';

import { getCollection } from 'astro:content';


export async function GET(context: any) {
    const posts = await getCollection("posts");

    return rss({
        title: 'Carlos Mairena | Blog',
        description: 'Compartiendo con la comunidad',
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/posts/${post.id}/`,
        })),
        customData: `<language>es</language>`,
    });
}
