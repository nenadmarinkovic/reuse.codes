/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";

const Container = styled.div`
  overflow-wrap: break-word;
  width: 100%;
`;

const ParagraphText = styled.p`
  padding: 2em 0;
  font-size: 1.1em;
  line-height: 2.3;
`;

const Text = ({ children }) => (
  <Container>
    <ParagraphText>{children}</ParagraphText>
  </Container>
);

export default Text;
