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
        icon: `src/images/favicon.png`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Reuse`,
        short_name: `Reuse`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    "gatsby-plugin-emotion",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
  ],
};
