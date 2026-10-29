import { MetadataRoute } from 'next';
import { ACCOMMODATIONS, EXPERIENCES, EVENTS, SHOOT_CATEGORIES } from '@/data/resortData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://swapnasrushtiresort.in';

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/accommodation`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/discover`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/events`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/for-shoot`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/packages`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/restaurant`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/booking`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ];

  const accommodationRoutes: MetadataRoute.Sitemap = ACCOMMODATIONS.map((r) => ({
    url: `${baseUrl}/accommodation/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const experienceRoutes: MetadataRoute.Sitemap = EXPERIENCES.map((e) => ({
    url: `${baseUrl}/discover/${e.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const eventRoutes: MetadataRoute.Sitemap = EVENTS.map((ev) => ({
    url: `${baseUrl}/events/${ev.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const shootRoutes: MetadataRoute.Sitemap = SHOOT_CATEGORIES.map((s) => ({
    url: `${baseUrl}/for-shoot/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...accommodationRoutes,
    ...experienceRoutes,
    ...eventRoutes,
    ...shootRoutes,
  ];
}

