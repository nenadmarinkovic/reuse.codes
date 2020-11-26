/** @jsx jsx */
import { jsx } from "../context";
import { Layout } from "../components/Layout";
import SEO from "gatsby-theme-seo/src/components/seo";
import Fade from "react-reveal/Fade"

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
    <Fade>
    <Layout>
      <SEO
        title="Reusable code snippets for web developers and designers."
        description={SEODescription}
        keywords={SEOKeywords}
      />
    </Layout>
    </Fade>
  );
};
