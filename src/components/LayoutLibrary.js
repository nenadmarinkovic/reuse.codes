/** @jsx jsx */
import { jsx } from "../context";
import React from "react";
import styled from "@emotion/styled";
import { useSiteMetadata } from "../useSiteMetadata";
import { Header } from "./Header";
import Footer from "./Footer";
import { Link } from "gatsby";
import styles from "../styles/styles.css";

const LayoutContainer = styled.div`
  @media (min-width: 48em) {
    max-width: 1132px;
    margin: 0 auto;
    width: 100%;
    min-height: 80vh;
    padding-bottom: 200px;
  }
`;

const FlexHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1200px) {
    padding: 0 15px;
  }
`;

const TitleSub = styled.div`
  font-size: 14px;
  color: white;
  text-decoration: none;
  letter-spacing: 0.5px;
`;

const TopHeader = styled.div`
  background: #24292E;
  color: white;
  height: 55px;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  z-index: 10;
`;

const Container = styled.div`
  max-width: 1132px;
  margin: 0 auto;
  width: 100%;
`;

const MainContent = styled.div`
  height: 100%;
  flex: 1 0 auto;
  padding-bottom: 2em;
  @media (max-width: 1200px) {
    padding: 0 15px 60px 15px;
  }
`;

const Title = styled.div`
  font-size: 21px;
  color: white;
  letter-spacing: 1px;
`;

export const LayoutLibrary = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
 <>
      <TopHeader>
        <Container>
          <FlexHeader>
            <Title>
              <Link style={{ color: "white" }} to="/">
                Reuse
              </Link>
            </Title>
            <TitleSub>
              <a
                style={{ color: "white" }}
                target="_blank"
                href="https://github.com/nenadmarinkovic/reuse.codes"
                rel="noreferrer noopener"
              >
                Want to contribute?
              </a>
            </TitleSub>
          </FlexHeader>
        </Container>
      </TopHeader>
      <LayoutContainer>
        <React.Fragment>
          <MainContent>
            <Header siteTitle={title} siteDescription={description} />
            {children}
          </MainContent>
        </React.Fragment>
      </LayoutContainer>
      <Footer />
   </>
  );
};
