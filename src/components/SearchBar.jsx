import React from "react";
import styled from "styled-components";

const DivStyle = styled.div`
  padding-top: 15px;
  scale: 125%;

  button {
    font-weight: bold;
    padding: 3px 8px;
    color: #ebefff;
    border: none;
    margin-left: 5px;
    border-radius: 0px 5px 5px 0px;
    background: linear-gradient(145deg, #283A7D, #0f0c1d);
    box-shadow: 0px 0px 2px #0f0c1d, 0px 0px 2px #283A7D;
    z-index: 1;


    &:hover{
    color: #0f0c1d;
    border-radius: 0px 5px 5px 0px;
    background: linear-gradient(145deg, #f0f0f0, #cacaca);
    box-shadow: 0px 0px 2px #5a5a5a, 0px 0px 2px #ffffff;
    transition: 0.75s;
    }
  }

  input {
   border-radius: 5px 0px 0px 5px;
   background: linear-gradient(145deg, #f0f0f0, #cacaca);
   box-shadow: 0px 0px 2px #5a5a5a, 0px 0px 2px #ffffff;
   scale: 103%;
   z-index: 2;
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
}
