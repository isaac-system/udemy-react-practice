import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

const SearchInput = styled.input`
  background-color: white;
  border: 0;
  font-size: 18px;
  width: 100%;
  height: 40px;
  padding: 0 15px;

  &:focus {
    outline: none;
  }
`;

const SearchBox = styled.div`
  display: flex;
  padding: 0 20px;
  align-items: center;
  background: white;
  border-radius: 20px;
`;

const ExpensesSearch = (props) => {
  const onChagneInput = (event) => {
    props.onSearchTitle(event.target.value);
  };

  return (
    <SearchBox>
      <BsSearch color="black" />
      <SearchInput onChange={onChagneInput} />
    </SearchBox>
  );
};

export default ExpensesSearch;
