/** @jsx jsx */
import { jsx } from "../context";
import { graphql } from "gatsby";
import { LayoutLibrary } from "../components/LayoutLibrary";
import AnswersIndexWrapper from "../components/AnswersIndexWrapper";
import SEO from "gatsby-theme-seo/src/components/seo";
import SearchBar from "../components/SearchBar";
import { useSearchBar } from "../useSearchBar";
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
  "typescript",
];

export default ({ data }) => {
  const { answers, handleSearchQuery } = useSearchBar(data);

  return (
    <Fade>
    <LayoutLibrary>
      <SEO
        title="CMS"
        description={SEODescription}
        keywords={SEOKeywords}
      />

        <SearchBar category="cms" handleSearchQuery={handleSearchQuery} />
        <AnswersIndexWrapper answers={answers} />
  
    </LayoutLibrary>
    </Fade>
  );
};

export const query = graphql`
  query typescript_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { published: { eq: true }, category: { eq: "cms" } }
      }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
          category
          
        }
        fields {
          slug
        }
      }
    }
  }
`;
