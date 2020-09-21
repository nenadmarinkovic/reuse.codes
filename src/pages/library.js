/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";
import { LayoutLibrary } from "../components/LayoutLibrary";
import PageLink from "../components/PageLink";
import SEO from "gatsby-theme-seo/src/components/seo";
import PageTransition from "gatsby-plugin-page-transitions";

const SEODescription = `
Reusable code snippets.
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

const Categories = styled.div`
  display: grid;
  grid-auto-rows: 185px;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-gap: 1em;
`;

export default () => {
  return (
    <LayoutLibrary>
      <SEO
        title="Reusable code snippets for developers and designers."
        description={SEODescription}
        keywords={SEOKeywords}
      />
      <PageTransition>
        <Categories>
          <PageLink page="html-answers" title="HTML" />
          <PageLink page="css-answers" title="CSS" />
          <PageLink page="sass-answers" title="Sass" />
          <PageLink page="javascript-answers" title="JavaScript" />
          <PageLink page="react-answers" title="React" />
          <PageLink page="react-answers" title="Vue" />
          <PageLink page="git-answers" title="Git" />
          <PageLink page="cms-answers" title="CMS" />
        </Categories>
    
      </PageTransition>
    </LayoutLibrary>
  );
};
