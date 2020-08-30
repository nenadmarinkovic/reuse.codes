/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";

const Container = styled.div`
  & > p {
    font-size: 1em;
    padding-top: 1em;
    line-height: 2.3;
  }
  // Desktop
  @media (min-width: 48em) {
    & > p {
      font-size: 1.1em;
      line-height: 2.3;
    }
  }
`;

const Paragraph = ({ children }) => (
  <Container>
    <p>{children}</p>
  </Container>
);

export default Paragraph;
