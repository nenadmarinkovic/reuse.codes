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
  margin-bottom: 3em;
  padding-top: 3em;
  padding-bottom: 1em;
  height: 8em;

  @media (max-width: 535px) {
    height: 8em;
  }

  & a > h1 {
    font-size: 1.7em;
  }

  & > h2 {
    font-size: 0.8em;
    text-align: center;
    font-weight: 300;
    padding-top: 1em;
  }

  // Desktop
  @media (min-width: 48em) {
    margin-top: 40px;
    & a > h1 {
      font-size: 2.3em;
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
          fontFamily: "Open Sans",
          color: "black",
        }}
      >
        <span> Library</span>
      </h1>
    </Link>
    <Flex>
      <h2
        sx={{
          fontFamily: "Open Sans",
          color: "black",
          fontWeight: "300",
        }}
      >
        {siteDescription}
      </h2>
    </Flex>
  </Container>
);