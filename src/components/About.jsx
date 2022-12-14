import React from "react";
import styled from "styled-components";
import { darkBlue, lightBlue, superLightBlue } from "../styles/GlobalStyles.js";

const AboutContainer = styled.div`
  padding: auto;
  padding-bottom: 0px;
  display: inline-block;
  position: center;
  border-radius: 2rem;
  background: linear-gradient(145deg, ${lightBlue}, ${darkBlue});
  margin: auto;
  color: white;
  width: 20vw;
  transition: 0.75s;

  & h1 {
    font-size: 2rem;
    padding: 2%;
    margin: 10px 0px 0px 0px;
  }

  & p {
    color: ${superLightBlue};
    flex-direction: column;
    text-align: left;
    padding: 1% 7%;
    margin: 3% 9%;
    text-shadow: 1px 1px 7px ${darkBlue};

    & b {
      color: ${superLightBlue};
    }
  }

  & hr {
    color: ${lightBlue};
    scale: 75%;
  }

  &:hover {
    border-radius: 30px;
    background: linear-gradient(145deg, #ffffff, #cacaca);
    box-shadow: 4px 4px 15px #5a5a5a, -4px -4px 15px #ffffff;
    scale: 102%;
    transition: 0.75s;

    & h1 {
      color: #0f0c1d;
    }

    & p {
      color: #0f0c1d;
    }

    & b {
      color: #0f0c1d;
    }

    & h2 {
      color: #0f0c1d;
    }

    & span {
      color: #0f0c1d;
    }
  }
`;

const AboutMe = styled.div`
  display: flex;
  flex-direction: column;

  & h1 {
    color: ${superLightBlue};
    text-shadow: 1px 1px 7px ${darkBlue};
  }

  & div {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

const Characteristics = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  scale: 105%;
  color: ${superLightBlue};

  & h2 {
    margin: 5px 20px;
  }

  & hr {
    margin: 5px 10px;
  }
`;

export default function About() {
  return (
    <AboutMe>
      <AboutContainer>
        <div>
          <h1>Creado por Erik Filleaudeau</h1>
        </div>
        <hr />
          <img
            src="https://media-exp1.licdn.com/dms/image/D4D03AQFYLr0OiTvgRA/profile-displayphoto-shrink_800_800/0/1668778968006?e=1675296000&v=beta&t=RvOWg7p8d8VFd4n8XXKySaXq2O36bMP9PSHfZjb5dY0"
            alt="Foto de Erik"
            width="100%"
            height= "auto"
          />
        <hr />
        <Characteristics>
          <span>Developer</span>
          <hr />
          <span>Hombre</span> 
        </Characteristics>
        <div>
          <p>
            <b>Dise??ador Gr??fico</b> y <b>Editor de Video</b> con base en la
            ciudad de La Plata, con <b> amplia experiencia</b> y{" "}
            <b> conocimientos</b> en dichas ??reas.
          </p>

          <p>
            Estos conocimientos y experiencia, mas el constante aprendizaje y
            ajuste de <b>habilidades blandas</b>, y una gran capacidad para la{" "}
            <b>organizaci??n</b>, <b>comunicaci??n</b> y <b>aprendizaje r??pido</b>{" "}
            a trav??s de la investigaci??n, las que me han permitido alcanzar el
            rango de <b>director creativo</b> en proyectos con{" "}
            <b>equipos de trabajo multidisciplinarios</b>.
          </p>
        </div>
      </AboutContainer>
    </AboutMe>
  );
}
