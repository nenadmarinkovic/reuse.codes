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
          <PageLink page="html" title="HTML and markup languages" />
          <PageLink page="css" title="CSS and CSS-in-JS solutions" />
          <PageLink page="sass" title="Sass and Less" />
          <PageLink page="javascript" title="JavaScript" />
          <PageLink page="node" title="Node and Express" />
          <PageLink page="react" title="React" />
          <PageLink page="git" title="Git and Github" />
          <PageLink page="cms" title="Content Management Systems" />
        </Categories>
    
      </PageTransition>
    </LayoutLibrary>
  );
};
