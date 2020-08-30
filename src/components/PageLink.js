/** @jsx jsx */
import { jsx } from "../context";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const LinkBox = styled.div`
  padding: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 1px solid #eaeaea;
  background-color: #5e95c6;

  & > h3 {
    font-size: 1.2em;
    color: white;
  }

  @media (min-width: 48em) {
    & > h3 {
      font-size: 1.3em;
    }
  }
`;

const PageLink = ({ page, title }) => (
  <Link
    sx={{
      textDecoration: "none",
    }}
    to={`/${page}`}
  >
    <LinkBox>
      <h3
        sx={{
          color: "black",
          fontFamily: "Open Sans",
          fontWeight: "normal",
        }}
      >
        {title}
      </h3>
    </LinkBox>
  </Link>
);

export default PageLink;
