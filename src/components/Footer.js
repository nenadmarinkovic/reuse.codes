/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";

const FooterWrap = styled.footer`
  background: #5e95c6;
  margin-top: 120px;
  height: 300px;
  width: 100%;
`;

const FooterContainer = styled.footer`
  padding-top: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  & > p {
    font-size: 0.7em;
  }

  // Desktop
  @media (min-width: 48em) {
    width: 100%;
    & > p {
      font-size: 1em;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrap>
      <FooterContainer>AAA</FooterContainer>
    </FooterWrap>
  );
};

export default Footer;
