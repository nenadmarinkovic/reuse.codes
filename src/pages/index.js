/** @jsx jsx */
import { jsx } from "../context";
import { Layout } from "../components/Layout";
import SEO from "gatsby-theme-seo/src/components/seo";
import { Helmet } from "react-helmet";

const SEODescription = `
  Reusable code snippets for web developers and designers.
`;

const SEOKeywords = [
  "Web Developer",
  "Frontend Developer",
  "React",
  "Gatsby",
  "GIT",
  "JavaScript",
  "CSS",
  "HTML",
];

export default () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Reuse | Reusable code snippets for web developers and designers.
        </title>
      </Helmet>
      <SEO
        title="Reusable code snippets for web developers and designers."
        description={SEODescription}
        keywords={SEOKeywords}
      />
    </Layout>
  );
};
