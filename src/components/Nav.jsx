import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
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
      <NavLink to="/">
        <img src="" alt="RickAndMortyLogo" />
      </NavLink>
      <SearchBar onSearch={props.onSearch} randomSearch={props.randomSearch} />
      <NavLink to="/about">About</NavLink>
    </NavDiv>
  );
}