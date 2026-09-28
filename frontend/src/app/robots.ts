import type { MetadataRoute } from 'next';

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin', '/dashboard', '/login', '/application', '/api'],
        },
        sitemap: `${SITE}/sitemap.xml`,
    };
}

export default robots;