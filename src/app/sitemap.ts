import { MetadataRoute } from 'next';
import { servicesData } from '@/lib/services-data';
import { blogPosts } from '@/lib/blogs';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.starsmilesdentalcare.com';

  // Base routes
  const routes = [
    '',
    '/about-us',
    '/contact-us',
    '/services',
    '/blogs',
    '/cases',
    '/faq',
    '/book-appointment',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Service routes
  const serviceRoutes = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Blog routes
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...serviceRoutes, ...blogRoutes];
}
