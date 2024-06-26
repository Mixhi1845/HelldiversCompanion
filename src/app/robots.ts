import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
    return {
      rules: [
        {
            userAgent: '*',
            allow: '/',
            disallow: '/items/',
        },
      ],
      sitemap: 'https://www.helldiverscompanion.app/sitemap.xml',
      host: 'https://www.helldiverscompanion.app',
    };
  }