import styled from "styled-components";
import { darkBlue, lightBlue, superLightBlue } from "../styles/GlobalStyles.js";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const DetailContainer = styled.div`
  padding: 10px 0px 0px 0px;
  display: inline-block;
  position: center;
  border-radius: 30px;
  background: linear-gradient(145deg, ${lightBlue}, ${darkBlue});
  margin: 30px;
  color: white;
  transition: 0.75s;

  & h1 {
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 10px;
    margin: 10px 0px 0px 0px;
  }

  & h2 {
    font-size: 20px;
    font-weight: bold;
    margin: 2%;
  }

  & span {
    font-size: 18px;
    margin: 2%;
  }

  & hr {
    width: 75%;
    margin: 5% auto;
  }

  & img {
    width: 100%;
    height: auto;
  }

  &:hover {
    border-radius: 30px;
    background: linear-gradient(145deg, #ffffff, #cacaca);
    box-shadow: 4px 4px 15px #5a5a5a, -4px -4px 15px #ffffff;
    scale: 103%;
    transition: 0.75s;

    & h1 {
      color: #0f0c1d;
    }

    & h2 {
      color: #0f0c1d;
    }

    & span {
      color: #0f0c1d;
    }

    & button {
      color: ${darkBlue};
      border: ${darkBlue} 1px solid;
    }
  }

  & button {
    font-size: 16px;
    color: ${superLightBlue};
    border: ${superLightBlue} solid 1px;
    font-weight: bold;
    transition: 0.5s;
    border-radius: 5px;
    background-color: transparent;
    margin-bottom: 5%;

    &:hover {
      font-size: 16px;
      border-radius: 5px;
      border: none;
      background-color: ${darkBlue};
      color: ${superLightBlue};
    }
  }
`;

const AliveDot = styled.span`
  color: green;
  font-style: normal;

  &:hover {
    color: green;
  }
`;

const DeathCross = styled.span`
  font-size: 30px;
  color: red;
  font-style: normal;
  text-shadow: 0px 0px 2px ${lightBlue};
`;

export default function Detail() {
  const { detailId } = useParams();

  const [character, setCharacter] = useState({
    name: "",
    status: "",
    species: "",
    gender: "",
    origin: {},
    image: "",
  });

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        console.log(char);
        if (char.name) {
          setCharacter(char);
          console.log("mounted")
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    setTimeout(() => {
      if (detailId === undefined) {
        return setCharacter({});
      } else {
        return "";
      }
    }, 5000);
  }, [detailId]);

  return (
    <DetailContainer>
      <div>
        <h1> Nombre: </h1>
        <span>{character.name}</span>
        <hr />
        <div>
          <img src={character.image} alt={character.name} />
        </div>
        <hr />
        <h2> Status: </h2>
        {character.status === "Alive" ? (
          <AliveDot>⯄ Alive</AliveDot>
        ) : (
          <DeathCross>🕱 Dead</DeathCross>
        )}
        <hr />
        <h2> Specie: </h2>
        <span>{character.species}</span>

        <h2> Gender: </h2>
        <span>{character.gender}</span>
        <h2> Origin: </h2>
        <span>{character.origin.name}</span>
      </div>
      <hr />
      <Link to="/">
        <button>Home Dimension</button>
      </Link>
    </DetailContainer>
  );
}
