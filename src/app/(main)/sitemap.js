export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function sitemap() {
  const SITE_URL = 'https://powerfilldrinks.com'
  const API_URL = SITE_URL

  /* ======================
     1. STATIC ROUTES
  ====================== */
  const staticPages = ['']

  const staticUrls = staticPages.map((route) => ({
    url: `${SITE_URL}/${route}`,
    lastModified: new Date(),
  }))

  /* ======================
     2. CMS PAGES
  ====================== */
  let cmsPageUrls = []

  try {
    const res = await fetch(`${API_URL}/api/pages?page=1&limit=1000`, {
      cache: 'no-store',
    })

    const result = await res.json()

    if (result?.success && Array.isArray(result.data)) {
      cmsPageUrls = result.data
        .filter((page) => page.isPublished && page.slug)
        .map((page) => ({
          url: `${SITE_URL}/${page.slug}`,
          lastModified: page.updatedAt
            ? new Date(page.updatedAt)
            : new Date(),
        }))
    }
  } catch (err) {
    console.error('CMS PAGES SITEMAP ERROR:', err)
  }

  /* ======================
     3. BLOGS
  ====================== */
  let blogUrls = []

  try {
    const res = await fetch(`${API_URL}/api/blogs?page=1&limit=1000`, {
      cache: 'no-store',
    })

    const result = await res.json()

    if (result?.success && Array.isArray(result.data)) {
      blogUrls = result.data
        .filter((blog) => blog.isPublished && blog.slug)
        .map((blog) => ({
          url: `${SITE_URL}/blog/${blog.slug}`,
          lastModified: blog.updatedAt
            ? new Date(blog.updatedAt)
            : new Date(),
        }))
    }
  } catch (err) {
    console.error('BLOG SITEMAP ERROR:', err)
  }

  return [...staticUrls, ...cmsPageUrls, ...blogUrls]
}
