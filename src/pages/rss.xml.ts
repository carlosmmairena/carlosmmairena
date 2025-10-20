import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context: any) {
  return rss({
    title: 'Carlos Mairena | Blog',
    description: 'Compartiendo con la comunidad',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>es</language>`,
  });
}
