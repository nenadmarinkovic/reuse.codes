/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";
import Form from "./Form";

const FooterWrap = styled.footer`
  background: #5e95c6;
  padding-top: -300px;
`;

const FooterForm = styled.div`
  width: 40%;
`;

const Copyright = styled.span`
  display: block;
  text-align: center;
  padding: 40px 0 15px;
  font-size: 13.3px;
  color: white;
`;

const FooterFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FooterContainer = styled.div`
  max-width: 1132px;
  margin: 0 auto;
  width: 100%;
  padding-top: 3rem;

  & > p {
    font-size: 0.7em;
  }

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
      <FooterContainer>
        <FooterFlex>
          <FooterForm>
            <Form />
          </FooterForm>
        </FooterFlex>
      </FooterContainer>
      <Copyright>
        © {new Date().getFullYear()} Reuse. All rights reserved. <br></br>
        Please check out more projects on nenadmarinkovic.com
      </Copyright>
    </FooterWrap>
  );
};

export default Footer;
