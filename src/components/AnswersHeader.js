/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";
import Navigation from "./Navigation";

const Header = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin: 2em;

  & > p {
    font-size: 0.8em;
  }

  @media (min-width: 48em) {
    & > p {
      font-size: 1.1em;
    }
  }
`;

const AnswersHeader = () => (
  <Header>
    <Navigation destination="/" text="Back" />
  </Header>
);

export default AnswersHeader;
