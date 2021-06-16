/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  padding: 2em;
  width: 100%;
  height: 200px;
  border-radius: 5px;
  display: flex;
  background-color: #F3F5F9;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: black;

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
  }

  & > p {
    padding-top: 0.5em;
    font-size: 0.85em;
    font-weight: 300;
    margin-top: 18px;
  }

  & > h1 {
    font-size: 1.1em;
    text-align: center;
  }

  @media (min-width: 38em) {
    max-height: min-content;
    & > h1 {
      font-size: 1em;
    }

    & > p {
      padding-top: 0.5em;
      font-size: 0.85em;
      font-weight: 300;
      margin-top: 18px;
    }
  }
`;

const PostWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

export default PostWrapper;
