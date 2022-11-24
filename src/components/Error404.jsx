import React from "react";
import styled from "styled-components";
import { darkBlue, lightBlue, superLightBlue, lightPink } from "../styles/GlobalStyles.js";

const ErrorDiv = styled.div`
  width: 50%;
  position: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: auto;
  text-align: left;


  & div {
    width: 50%;
    padding: 10px 0px 0px 0px;
    display: inline-block;
    position: center;
    margin: 30px;
  }

  & h1 {
    color: ${darkBlue};
    -webkit-text-stroke: 0.75px ${lightBlue};
    text-shadow: 2px 2px 10px ${lightBlue}, -2px -2px 10px ${superLightBlue};
    font-size: 50px;
    font-weight: bold;
    padding-bottom: 10px;
    margin: 5%;
  }

  & h2 {
    color: white;
    text-shadow: 1px 1px 15px ${darkBlue};
    font-size: 25px;
    font-weight: bold;
    margin: 2%;

    & b{
        color: ${superLightBlue}
    }
  }

  & img {
    width: 150%;
    height: auto;
    border-radius: 30px;
    box-shadow: 1px 1px 20px ${darkBlue}, -1px -1px 20px ${lightPink};
  }
`;

export default function Error404() {
  return (
    <ErrorDiv>
      <div>
        <h1>ERROR 404</h1>
        <h2>
          O Morty hizo algo estupido o tu pistola de portales no esta
          funcionando como debe... <br />
          <br />
          Sea como sea, parece que la dimensión a la que quieres llegar no
          existe.
        </h2>
      </div>
      <div>
        <img
          src="https://i.pinimg.com/736x/c0/b7/1c/c0b71c9352603ed7abad9fbde3480e28.jpg"
          alt="Error 404"
        />
        {/* <img
        src="https://external-preview.redd.it/oypRHXegDVsiUW6mLfBKOsbjG1B69delTMx7HgAk2Yk.jpg?auto=webp&s=f4c191cbcc2e72d53fe5571fa50396a6ff28d5fb"
        alt="Error 404"
      /> */}
      </div>
    </ErrorDiv>
  );
}
