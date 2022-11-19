import React from "react";
import styled from "styled-components";
import {darkBlue, lightBlue, superLightBlue} from '../styles/GlobalStyles.js'


const CardContainer = styled.div`
  padding: 10px 0px 0px 0px;
  display: inline-block;
  position: center;
  border-radius: 30px;
  background: linear-gradient(145deg, ${lightBlue}, ${darkBlue});
  // box-shadow: 3px 3px 10px ${darkBlue}, -3px -3px 10px ${lightBlue};
  margin: 30px;
  transition: 0.75s;

  &:hover {
    border-radius: 30px;
    background: linear-gradient(145deg, #ffffff, #cacaca);
    box-shadow: 4px 4px 15px #5a5a5a, -4px -4px 15px #ffffff;
    scale: 103%;
    transition: 0.75s;

    & h2 {
      color: #0f0c1d;
    }

    & span {
      color: #0f0c1d;
    }

    & button {
      color: red;
      border: red solid 1px;
    }
  }

  & button {
    font-size: 16px;
    color: red;
    border: ${superLightBlue} solid 1px;
    font-weight: bold;
    transition: 0.5s;
    border-radius: 5px;
    background-color: transparent;
    margin-bottom: 5px;

    &:hover {
      font-size: 18px;
      border-radius: 5px;
      border: none;
      background-color: red;
      color: white;
    }
  }
`;

const Characteristics = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  scale: 85%;
  color: ${superLightBlue};

  & h2 {
    margin: 5px 20px;
  }

  & hr {
    margin: 5px 10px;
  }
`;

const Name = styled.h2`
  font-size: 24px;
  padding-bottom: 10px;
  color: white;
  margin: 10px 0px 0px 0px;
`;

const Species = styled.h2`
  font-size: 16px;
  padding: 5px;
`;

const Gender = styled.h2`
  font-size: 16px;
  padding: 5px;
`;

const Divisor = styled.hr`
  color: ${lightBlue};
  scale: 75%;
`;

export default function Card(props) {
  return (
    <CardContainer key={props.name}>
      <button onClick={() => props.onClose(props.name)}>X</button>
      <Divisor />
      <Name>{props.name}</Name>
      <img src={props.image} alt={props.name} />
      <Characteristics>
        <Species>{props.species}</Species>
        <hr />
        <Gender>{props.gender}</Gender>
      </Characteristics>
    </CardContainer>
  );
}