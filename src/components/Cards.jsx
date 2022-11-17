import Card from "./Card";
import styled from "styled-components";
import {darkBlue, lightBlue, superLightBlue} from '../styles/GlobalStyles.js'


const CardsContainer = styled.div`
  display: center;
  background: inherit;
  background: linear-gradient(113deg, rgba(19,18,38,0.25) 0%, rgba(19,18,38,0.25) 49%, rgba(242,68,114,0.25) 66%, rgba(19,18,38,0.25) 91%);

  & div {
    isolation: isolate;
    margin: 30px;
    transition: 0.75s;
    background: linear-gradient(145deg, #ffffff, #cacaca);
    // box-shadow: 3px 3px 10px #5a5a5a, -3px -3px 10px #ffffff;

    & h2 {
      color: ${darkBlue};
    }

    & span {
      color: ${darkBlue};
    }

    & button {
        color: red;
        border: red solid 1px;
    }

    &:hover {
      border-radius: 30px;
      background: linear-gradient(145deg, ${lightBlue}, ${darkBlue});
      box-shadow: 4px 4px 15px ${darkBlue}, -4px -4px 15px ${lightBlue};
      scale: 103%;
      transition: 0.75s;

      & h2 {
        color: ${superLightBlue};
      }

      & span h2 {
        color: ${superLightBlue};
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
      onClose={props.onClose}
    />
  ));

  return <CardsContainer>{cardList}</CardsContainer>;
}
