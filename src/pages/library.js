/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";
import { LayoutLibrary } from "../components/LayoutLibrary";
import PageLink from "../components/PageLink";
import Paragraph from "../components/Paragraph";
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
  grid-auto-rows: 155px;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-gap: 1em;
`;

const Introduction = styled.section`
  margin-top: 1em;

  & > p {
    overflow-wrap: break-word;
    font-size: 1.5em;
    padding: 1em;
  }

  & > a {
    overflow-wrap: break-word;
    font-size: 1.5em;
    padding: 1em;
  }
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
        <Introduction>
          <Paragraph>
            Lumbersexual street art gentrify master cleanse, blog letterpress
            photo booth semiotics readymade disrupt mumblecore helvetica kitsch
            stumptown.
          </Paragraph>
          <Paragraph>
            Chillwave sartorial street art, vexillologist enamel pin coloring
            book tousled pop-up paleo helvetica. Knausgaard activated charcoal
            gastropub four loko next level crucifix sustainable.
          </Paragraph>
        </Introduction>
      </PageTransition>
    </LayoutLibrary>
  );
};
