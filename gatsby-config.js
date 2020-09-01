module.exports = {
  siteMetadata: {
    title: "Reuse",
    description: "Reusable code snippets for web developers and designers.",
  },
  plugins: [
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Open Sans"],
      },
    },
    {
      resolve: "gatsby-theme-seo",
      options: {
        title: "Reuse",
        description: "Reusable code snippets for web developers and designers.",
        author: "Nenad Marinkovic",
        siteUrl: "https://reuse.codes",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/html`,
        name: "html",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/css`,
        name: "css",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/react`,
        name: "react",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/git`,
        name: "git",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/javascript`,
        name: "javascript",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/cms`,
        name: "cms",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/sass`,
        name: "sass",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/vs-code`,
        name: "vs-code",
      },
    },
    {
      resolve: "gatsby-plugin-page-transitions",
      options: {
        transitionTime: 400,
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
  ],
};
