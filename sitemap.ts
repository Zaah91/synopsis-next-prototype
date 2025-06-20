import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
        url: 'https://example.com/',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1.0,
        },
        {
        url: 'https://example.com/subpage1',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
        images: ['https://example.com/robots-snippet.png'],
        },
        {
        url: 'https://example.com/subpage2',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
        images: ['https://example.com/sitemap-snippet.png'],
        },
        {
        url: 'https://example.com/sitemap.xml',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.5,
        images: ['https://example.com/sitemap-xml.png'],
        },
    ];
}