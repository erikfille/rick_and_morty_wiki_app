import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";

const NavDiv = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  background: linear-gradient(
    113deg,
    rgba(19, 18, 38, 0.25) 0%,
    rgba(19, 18, 38, 0.25) 49%,
    rgba(242, 68, 114, 0.25) 66%,
    rgba(19, 18, 38, 0.25) 91%
  );
  justify-content: space-around;

  & div {
    justify-content: right;
  }
`;

export default function Nav(props) {
  return (
    <NavDiv>
      <Link to="/">
        <img src="" alt="RickAndMortyLogo" />
      </Link>
      <SearchBar onSearch={props.onSearch} randomSearch={props.randomSearch} />
      <Link to="/about">About</Link>
    </NavDiv>
  );
}
