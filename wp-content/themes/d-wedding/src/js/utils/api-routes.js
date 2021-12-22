export const ApiRoutes = {
    pages: (siteUrl) => `${siteUrl}/wp-json/wp/v2/pages/`,
    page: (siteUrl, pageId) => `${siteUrl}/wp-json/wp/v2/pages/${pageId}`,
}