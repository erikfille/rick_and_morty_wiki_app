import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import { darkBlue, lightBlue, superLightBlue } from "../styles/GlobalStyles.js";
import Logo from '../assets/RickMortyLogo.png'

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

  button {
    padding: 3px 8px;
    color: ${darkBlue};
    border: none;
    margin-left: 5px;
    border-radius: 0px 5px 5px 0px;
    background: linear-gradient(145deg, ${lightBlue}, ${darkBlue});
    box-shadow: 0px 0px 2px ${darkBlue}, 0px 0px 2px ${lightBlue};
    border-radius: 0px 5px 5px 0px;
    background: linear-gradient(145deg, #f0f0f0, #cacaca);
    transition: 0.75s;

    &:hover {
      color: ${superLightBlue};
      border-radius: 0px 5px 5px 0px;
      background: linear-gradient(145deg, ${lightBlue}, ${darkBlue});
      box-shadow: 0px 0px 2px ${darkBlue}, 0px 0px 2px ${lightBlue};
      cursor: pointer;
    }
  }

  & a {
    color: white;
    text-decoration:none;
  }
`;

export default function Nav(props) {
  const { logout } = props
  return (
    <NavDiv>
      <Link to="/home">
        <img src={Logo} alt="RickAndMortyLogo" width="200px" />
      </Link>
      <Link to="/favorites">Favorites</Link>
      <SearchBar onSearch={props.onSearch} randomSearch={props.randomSearch} />
      <Link to="/about">About</Link>
      <button onClick={() => logout()}>Logout</button>
    </NavDiv>
  );
}