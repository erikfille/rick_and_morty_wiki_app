import React from "react";
import styled from "styled-components";
import {darkBlue, lightBlue, superLightBlue} from '../styles/GlobalStyles.js'


const DivStyle = styled.div`
  padding-top: 15px;
  scale: 125%;

  button {
    padding: 3px 8px;
    color: ${superLightBlue};
    border: none;
    margin-left: 5px;
    border-radius: 0px 5px 5px 0px;
    background: linear-gradient(145deg, ${lightBlue}, ${darkBlue});
    box-shadow: 0px 0px 2px ${darkBlue}, 0px 0px 2px ${lightBlue};

    &:hover{
    font-weight: bold;

    // color: ${darkBlue};
    // border-radius: 0px 5px 5px 0px;
    // background: linear-gradient(145deg, #f0f0f0, #cacaca);
    // box-shadow: 0px 0px 2px #5a5a5a, 0px 0px 2px #ffffff;
    // transition: 0.75s;
    }
  }

  input {
   border-radius: 5px 0px 0px 5px;
   background: linear-gradient(145deg, #f0f0f0, #cacaca);
  //  box-shadow: 0px 0px 2px #5a5a5a, 0px 0px 2px #ffffff;
   scale: 103%;
  }
`;

export default function SearchBar(props) {
  return (
    <DivStyle>
      <input type="search" />
      <button onClick={() => props.onSearch("Futuro ID del personaje")}>
        Agregar
      </button>
    </DivStyle>
  );
};