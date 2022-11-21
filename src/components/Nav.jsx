import React from "react";
import SearchBar from './SearchBar.jsx'
import styled from "styled-components";

const NavDiv = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  background: linear-gradient(113deg, rgba(19,18,38,0.25) 0%, rgba(19,18,38,0.25) 49%, rgba(242,68,114,0.25) 66%, rgba(19,18,38,0.25) 91%);

  & div {
    width: 100vw;
    justify-content: right;
  }
`;

export default function Nav(props) {
  return (
      <NavDiv>
        <div>
          <SearchBar onSearch={props.onSearch} randomSearch={props.randomSearch} />
        </div>
      </NavDiv>
  );
}
