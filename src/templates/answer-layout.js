/** @jsx jsx */
import styled from "@emotion/styled";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import PageTransition from "gatsby-plugin-page-transitions";
import { LayoutLibrary } from "../components/LayoutLibrary";
import { jsx } from "../context";

const IntroText = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 2em;
  @media (max-width: 765px) {
    grid-gap: 0;
  }
`;

const Title = styled.h1`
  grid-row: 1;
  text-align: start;
  font-size: 1.5em;

  @media (min-width: 48em) {
    font-size: 2em;
  }
`;

const DateAndCategory = styled.div`
  grid-row: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  @media (max-width: 765px) {
    height: 80px;
  }

  & > p {
    font-size: 14px;
    text-transform: uppercase;
  }

  @media (min-width: 48em) {
    flex-direction: row;
    & > p {
      font-size: 14px;
      text-transform: uppercase;
    }
  }
`;

export default ({ data }) => {
  const {
    frontmatter,
    body,
    fields: { editLink },
  } = data.mdx;
  const { title, date, category } = frontmatter;
  return (
    <LayoutLibrary>
      <PageTransition>
        <IntroText>
          <Title>{title}</Title>
          <DateAndCategory>
            <p
              sx={{
                fontWeight: "700",
                
                color: "#5e95c6",
               
              }}
            >
              <Link sx={{
                color: "#5e95c6",
                fontWeight: "bold",
                fontSize: "14px",
                textDecoration: "none",
                fontFamily: "monospace",
              }} to={`/${category}-answers`}>
                category: {category}
              </Link>
            </p>
            <p
             sx={{
              color: "#5e95c6",
              fontWeight: "bold",
              fontSize: "19px",
              textDecoration: "none",
              fontFamily: "monospace",
            }}
            >
              posted: {date}
            </p>
            <a
              sx={{
                color: "#5e95c6",
                fontWeight: "bold",
                fontSize: "14px",
                textDecoration: "none",
                fontFamily: "monospace",
              }}
              target="_blank"
              rel="noopener noreferrer"
              href={editLink}
            >
              Edit this post on GitHub.
            </a>
          </DateAndCategory>
        </IntroText>
        <MDXRenderer sx={{ height: "100vh" }}>{body}</MDXRenderer>
      </PageTransition>
    </LayoutLibrary>
  );
};

export const query = graphql`
  query AnswerBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
        category
        author
      }
      body
      excerpt
      fields {
        slug
        editLink
      }
    }
  }
`;
