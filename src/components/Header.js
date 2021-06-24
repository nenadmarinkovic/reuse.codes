/** @jsx jsx */
import { jsx } from "../context";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.7em;
  font-weight: 300;
  width: 100%;

  @media (max-width: 750px) {
    justify-content: center;
  }

  @media (max-width: 600px) {
    align-items: start;
    flex-direction: column;
  }
`;

const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  padding: 5em 0 3em;


  & a > h1 {
    font-size: 1.7em;
    color: #24292E;
  }

  & > h2 {
    font-size: 0.8em;
    text-align: center;
    font-weight: 300;
    padding-top: 1em;
  }

  @media (max-width: 750px) {
    align-items: center;
  }

  @media (min-width: 48em) {
    margin-top: 40px;
    & a > h1 {
      font-size: 2em;
    }
    & > h2 {
      font-size: 1em;
      font-weight: 300;
    }
  }
`;

export const Header = ({ siteDescription }) => (
  <Container>
    <Link
      sx={{
        textDecoration: "none",
      }}
      to="/library"
    >
      <h1
        sx={{
          color: "black"
        }}
      >
        <span>Library</span>
      </h1>
    </Link>
    <Flex>
      <h2
        sx={{
          color: "black",
          fontWeight: "300",
          marginTop: "15px",
          lineHeight: "2",
        }}
      >
        {siteDescription}
      </h2>
    </Flex>
  </Container>
);
