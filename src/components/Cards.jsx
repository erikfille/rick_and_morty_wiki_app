import Card from "./Card";
import styled from "styled-components";


const CardsContainer = styled.div`
  display: center;
  background: inherit;
  background: linear-gradient(113deg, rgba(19,18,38,0.25) 0%, rgba(19,18,38,0.25) 49%, rgba(242,68,114,0.25) 66%, rgba(19,18,38,0.25) 91%);
`;

export default function Cards(props) {

  let cardList = props.characters.map((c) => (
    <Card
      name={c.name}
      species={c.species}
      gender={c.gender}
      image={c.image}
      key={c.id}
      onClose={props.onClose}
    />
  ));

  return <CardsContainer>{cardList}</CardsContainer>;
}
