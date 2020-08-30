/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2em auto;
`;

const Input = styled.input`
  padding: 0.4em;
  border-radius: 5px;
`;

const SearchBar = ({ category, handleSearchQuery }) => {
  return (
    <SearchBarContainer>
      <Input
        sx={{
          fontFamily: "body",
          padding: "1em",
          border: "1px solid #eaeaea",
          background: "transparent",
          color: "black",
          outline: "none",
          width: "300px",
        }}
        type="text"
        id={`${category}-answers`}
        placeholder="Search for items..."
        onChange={handleSearchQuery}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
