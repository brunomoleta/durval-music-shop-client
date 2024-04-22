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
import { FormUser } from "../../../../styled-components/Modal.styles.tsx";
import Button from "../../../Button";

function SearchFormHeader() {
  const id = React.useId();
  const navigate = useNavigate();
  const inputId = `${id}-searchInput`
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
        <Label htmlFor={inputId}>BUSCAR:</Label>
        <SearchBar
          id={inputId}
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          name={`${id}-search`}
        />
        <Button
          id={`${id}-searchButton`}
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
        </Button>
      </FormUser>
    </SearchWrapper>
  );
}

export default SearchFormHeader;
