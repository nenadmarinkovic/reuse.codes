/** @jsx jsx */
import styled from "@emotion/styled";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import PageTransition from "gatsby-plugin-page-transitions";
import { LayoutLibrary } from "../components/LayoutLibrary";
import { jsx } from "../context";

const IntroText = styled.div`
  display: grid;
  // grid-template-rows: repeat(2, 1fr);
  grid-gap: 2em;
  @media (max-width: 765px) {
    grid-gap: 0;
  }
`;

const Title = styled.h1`
  grid-row: 1;
  text-align: start;
  font-size: 1.5em;
  color: #323f4b;
  line-height: 1.5;
  width: 60%;

  @media (min-width: 48em) {
    font-size: 2.5em;
  }
`;

const DateAndCategory = styled.div`
  grid-row: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 765px) {
    height: 120px;
    flex-direction: column;
    justify-content: start;
    align-items: start;
  }

  & > p {
    font-size: 15px;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  @media (min-width: 48em) {
    flex-direction: row;
    padding-bottom: 5px;
    margin-bottom: 30px;

    & > p {
      font-size: 15px;
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
                color: "#55AAD4",
              }}
            >
              <Link
                sx={{
                  background: "#55AAD4",
                  padding: "5px 10px",
                  color: "white",
                  borderRadius: "5px",
                  fontWeight: "700",
                  fontSize: "15px",
                  textDecoration: "none",
                }}
                to={`/${category}`}
              >
                Category:{" "}
                <span style={{ textTransform: "uppercase" }}>{category}</span>
              </Link>
            </p>
            <p
              sx={{
                background: "#55AAD4",
                padding: "5px 10px",
                color: "white",
                borderRadius: "5px",
                fontWeight: "700",
                fontSize: "15px",
                textDecoration: "none",
              }}
            >
              Posted: {date}
            </p>
            <a
              sx={{
                background: "#7BC47F",
                padding: "5px 10px",
                color: "white",
                borderRadius: "5px",
                fontWeight: "700",
                fontSize: "15px",
                textDecoration: "none",
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
