const productIconKey = "logs";

module.exports = {
  product: "Logs",
  pathPrefix: "/logs",
  productIconKey,
  contentRepo: "cloudflare/cloudflare-docs",
  contentRepoFolder: "products/logs",
  logoSVGContent: '<svg width="48" height="48" viewBox="0 0 48 48"  xmlns="http://www.w3.org/2000/svg"><path d="M42.0003 22.569H35.9178V18.06L35.4828 17.0055L23.5353 4.96953H23.53L22.4703 4.53003H7.53027L6.03027 6.03003V42.03L7.53027 43.53H34.4178L35.9178 42.03V37.569H42.0003L43.5003 36.069V24.069L42.0003 22.569ZM23.9703 9.66903L30.814 16.5593H23.9703V9.66903ZM32.9178 40.53H9.03027V7.53003H20.9703V18.06L22.4703 19.56H32.9178V22.569H14.9763L13.4763 24.069V36.069L14.9763 37.569H32.9178V40.53ZM40.5003 34.569H16.4763V25.569H40.5003V34.569Z" /><path d="M24.1878 27.78H20.9853L19.2828 32.3775H22.4853L24.1878 27.78Z" /><path d="M30.9378 27.78H27.7353L26.0328 32.3775H29.2353L30.9378 27.78Z" /><path d="M37.6878 27.78H34.4853L32.7828 32.3775H35.9853L37.6878 27.78Z" /></svg>',
  externalLinks: [
    {
      title: "Cloudflare homepage",
      url: "https://cloudflare.com",
    },
  ],
  search: {
    indexName: "developers-cloudflare",
    apiKey: "b23088ab4d346409f9d3ece6606344c3",
    algoliaOptions: { facetFilters: '["project:logs"]' },
  },
  siteMetadata: {
    title: "Cloudflare Logs docs",
    description:
      "Cloudflare Logs contain detailed information on requests and events processed by our network. Find out about the connecting client, Cloudflare's actions, and the response from the origin server",
    author: "@cloudflare",
    url: "https://developers.cloudflare.com/logs",
    image: "https://www.cloudflare.com/img/cf-twitter-card.png",
  },
};
