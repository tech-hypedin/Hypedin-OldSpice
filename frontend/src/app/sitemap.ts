import type { MetadataRoute } from 'next';

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

function sitemap(): MetadataRoute.Sitemap {
    const routes = ['', '/rules', '/faq', '/contact', '/privacy', '/application'];
    return routes.map((path) => ({
        url: `${SITE}${path}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: path === '' ? 1 : 0.7,
    }));
}

export default sitemap;