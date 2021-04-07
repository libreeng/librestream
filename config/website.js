module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Librestream', // Navigation and Site Title
  titleAlt: 'Librestream', // Title for JSONLD
  description: "Since 2003 Librestream's augmented reality enterprise solution, Onsight, has empowered workers with a robust platform designed for industrial environments.",
  headline: "Empowering Service Workers With Augmented Reality", // Headline for schema.org JSONLD
  url: 'https://librestream.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en-US', // Language Tag on <html> element
  logo: 'src/img/logo.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/img/favicon.png', // Used for manifest favicon generation
  shortName: 'Librestream', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Librestream', // Author for schemaORGJSONLD
  themeColor: '#00a0df',
  backgroundColor: '#dedede',

  twitter: '@librestream', // Twitter Username
  facebook: 'librestreaminc', // Facebook Site Name
  googleAnalyticsID: '', // TODO: Add analytics ID

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}