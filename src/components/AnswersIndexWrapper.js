/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";
import PostWrapper from "./PostWrapper";
import { Link } from "gatsby";

const Wrapper = styled.main`
  display: grid;
  grid-auto-rows: 150px;
  padding-bottom: 2em;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1em;
`;

const AnswersIndexWrapper = ({ answers }) => (
  <Wrapper>
    {answers.map(({ id, frontmatter, fields }) => (
      <Link
        sx={{
          textDecoration: "none",
        }}
        key={id}
        to={fields.slug}
      >
        <PostWrapper>
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.date}</p>
          <p>{frontmatter.category}</p>
        </PostWrapper>
      </Link>
    ))}
  </Wrapper>
);

export default AnswersIndexWrapper;
