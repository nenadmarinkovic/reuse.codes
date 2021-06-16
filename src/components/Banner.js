import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import { Link } from "gatsby";

const Header = styled.div`
  background: #24292E;
  color: white;
  height: 60px;
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1132px;
  margin: 0 auto;
  width: 100%;
  @media (max-width: 1200px) {
    padding: 0 15px;
  }
`;

const FlexHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainBanner = styled.div`
  background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='20' height='20' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(220, 33%, 96%, 1)'/><path d='M 10,-2.55e-7 V 20 Z M -1.1677362e-8,10 H 20 Z'  stroke-width='0.5' stroke='hsla(4, 0%, 100%, 0.87)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
  @media (max-width: 960px) {
    height: unset;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
`;

const Title = styled.div`
  font-size: 21px;
  color: white;
  letter-spacing: 1px;
`;

const TitleSub = styled.div`
  font-size: 14px;
  color: white;
  text-decoration: none;
  letter-spacing: 0.5px;
`;

const Text = styled.div`
  color: #24292E;
  text-align: center;
  padding: 135px 0;

  @media (max-width: 960px) {
    width: 100%;
    margin-top: 40px;
    padding: 75px 0;
  }

  @media (max-width: 960px) {
    text-align: center;
  }
`;

const H1 = styled.h1`
  font-weight: 800;
  font-size: 71px;
  color: #24292E;
  @media (max-width: 960px) {
    font-size: 51px;
  }
  @media (max-width: 512px) {
    font-size: 31px;
  }
`;

const H5 = styled.h5`
  margin-top: 20px;
  font-weight: 500;
  font-size: 28px;
  color: #24292E;
  line-height: 1.8;
  @media (max-width: 512px) {
    font-size: 18px;
  }
`;

const Button = styled.button`
  width: 260px;
  height: 60px;
  margin-top: 40px;
  background: #2EA44F;
  border: none;
  color: white;
  text-decoration: none;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  font-family: monospace;
  font-weight: bold;

  :hover {
    background-color: #299347;
  }

  @media (max-width: 512px) {
    width: 220px;
  }
`;

function Banner() {
  return (
    <div>
      <Header>
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
      </Header>
      <MainBanner>
        <Container>
          <Flex>
            <Text>
              <H1>Reusable code snippets</H1>
              <H5>
                Web application for managing code snippets. Reuse is free and
                open source, fast in every way that matters, and secure by
                default.
              </H5>
              <Link to="/library">
                <Button>Go to Library</Button>
              </Link>
            </Text>
          </Flex>
        </Container>
      </MainBanner>
    </div>
  );
}

export default Banner;
