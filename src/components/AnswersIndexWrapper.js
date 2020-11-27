/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";
import PostWrapper from "./PostWrapper";
import { Link } from "gatsby";

const Wrapper = styled.main`
  display: grid;
  grid-auto-rows: 200px;
  padding-bottom: 2em;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1em;
`;

const Category = styled.p`
 margin-top: 5px;
 background: #7CC1E4;
 color: white;
 padding: 6px 10px;
 border-radius: 5px;
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
          <h1 style={{height: "60px"}}>{frontmatter.title}</h1>
          <p>{frontmatter.date}</p>
          <Category>{frontmatter.category}</Category>
        </PostWrapper>
      </Link>
    ))}
  </Wrapper>
);

export default AnswersIndexWrapper;
