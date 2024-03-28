import {
  Label,
  SearchBar,
  SearchWrapper,
} from "../../../../styled-components/Header.styles.tsx";
import { Search } from "react-feather";
import React from "react";
import { useProductContext } from "../../../../providers/hooks";
import { IFullProductContext } from "../../../../types/product";
import { useNavigate } from "react-router-dom";
import { SendBtn } from "../../../../styled-components/Button.styles.ts";
import { FormUser } from "../../../../styled-components/Modal.styles.tsx";

function SearchFormHeader() {
  const id = React.useId();
  const navigate = useNavigate();

  const { searchProduct, searchValue, setSearchValue } =
    useProductContext() as IFullProductContext;

  const handleSubmit = () => {
    const search = searchValue.toLowerCase();
    navigate(`/catalog/${search}`);
    searchProduct(search);
  };

  return (
    <SearchWrapper>
      <FormUser
        style={{ width: "100%", position: "relative" }}
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <Label htmlFor={`${id}-search`}>BUSCAR:</Label>
        <SearchBar
          id={`${id}-search`}
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          name={`${id}-search`}
        />
        <SendBtn
          type="submit"
          style={{
            marginTop: "0",
            height: "90%",
            maxWidth: "50px",
            position: "absolute",
            right: "1%",
            top: "2.225px",
          }}
          onClick={() => handleSubmit()}
        >
          <Search />
        </SendBtn>
      </FormUser>
    </SearchWrapper>
  );
}

export default SearchFormHeader;
