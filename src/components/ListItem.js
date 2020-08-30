/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";

const Container = styled.div`
  overflow-wrap: break-word;
`;

const ParagraphText = styled.p`
  font-size: 1.1em;

  @media (min-width: 48em) {
    font-size: 1.3em;
  }
`;

const ListItem = ({ children }) => (
  <Container>
    <ParagraphText>{children}</ParagraphText>
  </Container>
);

export default ListItem;
