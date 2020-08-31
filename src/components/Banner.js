import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import { Link } from "gatsby";

const Header = styled.div`
  background: #111b29;
  color: white;
  height: 55px;
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
`;

const FlexHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainBanner = styled.div`
  height: 700px;
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
`;

const TitleSub = styled.div`
  font-size: 14px;
  color: white;
  text-decoration: none;
  background: #35b67e;
  padding: 10px;
  border-radius: 10px;
  font-family: monospace;
`;

const SVG = styled.svg`
  width: 50%;
  margin-top: 20px;
`;

const Text = styled.div`
  color: #1b2738;
  width: 45%;
`;

const H1 = styled.h1`
  font-weight: 800;
  font-size: 71px;
`;

const H5 = styled.h5`
  margin-top: 20px;
  font-weight: 500;
  font-size: 21px;
  line-height: 1.8;
`;

const Button = styled.button`
  width: 260px;
  height: 60px;
  margin-top: 40px;
  background: #35b67e;
  border: none;
  color: white;
  text-decoration: none;
  font-size: 16px;
  text-transform: uppercase;
  border-radius: 10px;
  cursor: pointer;
  font-family: monospace;
`;

const spin1 = keyframes`
from {
  transform: rotate(360deg) translateX(20px) rotate(-360deg);
}
to {
  transform: rotate(0deg) translateX(20px) rotate(0deg);
}
`;

const spin2 = keyframes`
from {
  transform: rotate(0deg) translateX(30px) rotate(0deg);
}
to {
  transform: rotate(360deg) translateX(30px) rotate(-360deg);
}
`;

const spin3 = keyframes`
from {
  transform: rotate(0deg) translateX(10px) rotate(0deg);
}
to {
  transform: rotate(360deg) translateX(10px) rotate(-360deg);
}
`;

const rotate = keyframes`
  to {
    transform: rotate(-5deg);
  }
`;

const rotateBlue = keyframes`
to {
  transform: rotate(5deg);
}
`;

const rotatesquare = keyframes`
from {
  transform: translateY(0);
}
to {
  transform: translateY(40px);
}`;

const Green = styled.path`
  animation: ${spin1} 4s linear infinite;
`;

const Green2 = styled.path`
  animation: ${spin3} 4s linear infinite;
`;
const Green3 = styled.path`
  animation: ${spin1} 4s linear infinite;
`;
const Triangle = styled.path`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120px;
  height: 120px;
  margin: -60px 0 0 -60px;
  animation: ${rotate} 4s alternate infinite;
`;

const Black = styled.rect`
  animation: ${rotatesquare} 5s infinite alternate;
`;

const Blue = styled.path`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120px;
  height: 120px;
  margin: -60px 0 0 -60px;
  animation: ${rotateBlue} 4s alternate infinite;
`;

const BlueCircle = styled.path`
  animation: ${spin2} 3s linear infinite;
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
              <Link style={{ color: "white", fontFamily: "monospace" }} to="/">
                Want to contribute?
              </Link>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </H5>
              <Link to="/library">
                <Button>Go to Library →</Button>
              </Link>
            </Text>
            <SVG
              width="765"
              height="678"
              viewBox="0 0 765 678"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="vector">
                <path
                  id="Vector"
                  d="M696.709 182.876C720.133 245.382 668.395 335.726 635.321 409.735C602.247 483.743 587.953 541.159 536.876 593.761C485.799 646.363 397.95 694.238 327.555 672.727C257.16 651.215 203.974 559.895 184.391 463.667C164.808 367.438 178.715 266.263 232.819 196.684C286.923 127.106 381.536 89.0589 478.127 87.3555C574.718 85.6522 673.314 120.379 696.709 182.876Z"
                  fill="#fff"
                />
                <Black
                  id="Black"
                  x="683"
                  y="122"
                  width="82"
                  height="82"
                  rx="10"
                  fill="#FEC16D"
                />
                <BlueCircle
                  id="Vector_2"
                  d="M532.14 640.399C628.667 640.399 706.917 563.71 706.917 469.109C706.917 374.509 628.667 297.82 532.14 297.82C435.614 297.82 357.364 374.509 357.364 469.109C357.364 563.71 435.614 640.399 532.14 640.399Z"
                  stroke="#5e95c6"
                  strokeWidth="15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Triangle
                  id="Triangle"
                  d="M287.947 45.6999C284.804 38.9888 275.708 37.9084 271.081 43.6964L9.69374 370.613C5.1531 376.292 7.99879 384.765 15.0469 386.551L485.378 505.776C493.558 507.85 500.47 499.484 496.891 491.842L287.947 45.6999Z"
                  stroke="#FEC16D"
                  strokeWidth="15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Blue
                  id="Blue"
                  d="M357.449 271.496C395.804 271.496 426.898 240.045 426.898 201.248C426.898 162.451 395.804 131 357.449 131C319.093 131 288 162.451 288 201.248C288 240.045 319.093 271.496 357.449 271.496Z"
                  fill="#5e95c6"
                />
                <Green
                  id="Green"
                  d="M572.884 55.8319C586.761 55.8319 598.011 44.4528 598.011 30.416C598.011 16.3791 586.761 5 572.884 5C559.007 5 547.757 16.3791 547.757 30.416C547.757 44.4528 559.007 55.8319 572.884 55.8319Z"
                  stroke="#35B67E"
                  strokeWidth="15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Green2
                  id="Green2"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M77.5753 402.325C77.5753 392.444 80.4721 382.785 85.8995 374.569C91.3268 366.352 99.0409 359.949 108.066 356.167C117.092 352.386 127.023 351.397 136.604 353.324C146.185 355.252 154.986 360.01 161.894 366.998C168.802 373.985 173.506 382.887 175.412 392.579C177.318 402.27 176.339 412.316 172.601 421.445C168.863 430.574 162.532 438.377 154.409 443.867C146.287 449.356 136.737 452.287 126.968 452.287C120.482 452.287 114.059 450.994 108.066 448.484C102.074 445.973 96.6286 442.293 92.0421 437.653C82.7792 428.284 77.5753 415.576 77.5753 402.325Z"
                  fill="#35B67E"
                />
                <Green3
                  id="Green3"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M357 589.961C357 580.08 359.897 570.42 365.324 562.204C370.752 553.988 378.466 547.585 387.491 543.803C396.516 540.022 406.448 539.032 416.029 540.96C425.61 542.888 434.411 547.646 441.319 554.633C448.226 561.62 452.931 570.523 454.836 580.214C456.742 589.906 455.764 599.951 452.026 609.08C448.287 618.21 441.956 626.013 433.834 631.502C425.711 636.992 416.162 639.922 406.393 639.922C399.906 639.922 393.484 638.63 387.491 636.119C381.498 633.608 376.053 629.928 371.467 625.289C362.204 615.919 357 603.212 357 589.961Z"
                  fill="#F16E6E"
                />
              </g>
            </SVG>
          </Flex>
        </Container>
      </MainBanner>
    </div>
  );
}

export default Banner;
