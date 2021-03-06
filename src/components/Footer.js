/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";
import Form from "./Form";

const FooterWrap = styled.footer`
  background: #F3F5F9;
  padding-top: -300px;
`;

const FooterForm = styled.div`
  width: 40%;
  @media (max-width: 1200px) {
    width: 60%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 512px) {
    width: 100%;
  }
`;

const Copyright = styled.span`
  display: block;
  text-align: center;
  padding: 40px 0 15px;
  font-size: 13.3px;
  color: #1F2933;
`;

const FooterFlex = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1200px) {
    padding: 0 15px;
  }
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
        © {new Date().getFullYear()} Reuse - Reusable code snippets. <br></br>
        Design and development:{" "}
        <a
          style={{ color: "#1F2933" }}
          target="_blank"
          href="https://nenadmarinkovic.com"
          rel="noreferrer"
        >
          nenadmarinkovic.com
        </a>
      </Copyright>
    </FooterWrap>
  );
};

export default Footer;
