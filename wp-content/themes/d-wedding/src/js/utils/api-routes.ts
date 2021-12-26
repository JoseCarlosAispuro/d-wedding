export const ApiRoutes = {
  pages: (siteUrl: string) => `${siteUrl}/wp-json/wp/v2/pages/`,
  page: (siteUrl: string, pageId: string) => `${siteUrl}/wp-json/wp/v2/pages/${pageId}`,
}
