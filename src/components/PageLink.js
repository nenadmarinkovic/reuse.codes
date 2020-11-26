/** @jsx jsx */
import { jsx } from "../context";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const ShowMore = styled.div`
  position: absolute;
  bottom: 20px;
  font-size: 13px;
  font-family: monospace;
  font-weight: 600;
  margin-left: 5px;
  color: #55AAD4;
  margin-left: 10px;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.3s linear;
`;

const LinkBox = styled.div`
  padding: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: #e8edf3;

  &:hover {
    box-shadow: 0 5px 10px rgba(0,0,0,0.12);
  }

  &:hover ${ShowMore} {
    visibility: visible;
    opacity: 1;
   }
  }

  & > h3 {
    font-size: 1.2em;
    color: black;
  }

  @media (min-width: 48em) {
    & > h3 {
      font-size: 1em;
      text-align: center;
    }
  }
`;

const PageLink = ({ page, title }) => (
  <Link
    sx={{
      textDecoration: "none",
      position: "relative",
    }}
    to={`/${page}`}
  >
    <LinkBox>
      <h3
        sx={{
          color: "black",
          fontWeight: "normal",
        }}
      >
        {title}
      </h3>

      <ShowMore> See all →</ShowMore>
    </LinkBox>
  </Link>
);

export default PageLink;
