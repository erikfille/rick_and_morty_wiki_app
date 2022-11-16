import Card from "./Card";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: center;

  & div {
    margin: 30px;
    transition: 0.75s;
    background: linear-gradient(145deg, #f0f0f0, #cacaca);
    box-shadow: 6px 6px 22px #5a5a5a, -6px -6px 22px #ffffff;

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

    &:hover {
      border-radius: 30px;
      background: linear-gradient(145deg, #283A7D, #0f0c1d);
      box-shadow: 6px 6px 22px #0f0c1d, -6px -6px 22px #283A7D;
      scale: 103%;
      transition: 0.75s;

      & h2 {
        color: #ebefff;
      }

      & span h2 {
        color: #ebefff;
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
  }
`;

export default function Cards(props) {
  const { characters } = props;

  let cardList = characters.map((c) => (
    <Card
      name={c.name}
      species={c.species}
      gender={c.gender}
      image={c.image}
      key={c.name}
      onClose={() => alert("Emulamos que se cierra la card")}
    />
  ));

  return <CardsContainer>{cardList}</CardsContainer>;
}
