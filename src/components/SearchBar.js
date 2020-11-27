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
  padding: 0.7em;
  border-radius: 10px;
  border: 1.5px solid #eaeaea;
`;

const SearchBar = ({ category, handleSearchQuery }) => {
  return (
    <SearchBarContainer>
      <Input
        sx={{
          padding: "1em",
          border: "1px solid #eaeaea",
          background: "transparent",
          color: "black",
          outline: "none",
          width: "300px",
          fontFamily: "Proxima Nova",
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
