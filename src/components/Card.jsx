import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  padding: 10px 0px 0px 0px;
  display: inline-block;
  position: center;
  border-radius: 30px;
  background: linear-gradient(145deg, #283A7D, #0f0c1d);
  box-shadow: 6px 6px 22px #0f0c1d, -6px -6px 22px #283A7D;
  margin: 30px;
  transition: 0.75s;

  &:hover {
    border-radius: 30px;
    background: linear-gradient(145deg, #f0f0f0, #cacaca);
    box-shadow: 6px 6px 22px #5a5a5a, -6px -6px 22px #ffffff;
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
    border: #ebefff solid 1px;
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
  color: #ebefff;

  & h2 {
    margin: 5px 20px;
  }

  & hr {
    margin: 5px 10px;
  }
`;

const Name = styled.h2`
  font-size: 24px;
  padding: 5px;
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
  color: #ebefff;
  scale: 75%;
`;

export default function Card(props) {
  return (
    <CardContainer>
      <button onClick={props.onClose}>X</button>
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
