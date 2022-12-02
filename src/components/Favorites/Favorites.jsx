import Card from ".././Card";
import styled from "styled-components";
import { connect } from "react-redux";

const CardsContainer = styled.div`
  display: center;
  background: inherit;
  background: linear-gradient(
    113deg,
    rgba(19, 18, 38, 0.25) 0%,
    rgba(19, 18, 38, 0.25) 49%,
    rgba(242, 68, 114, 0.25) 66%,
    rgba(19, 18, 38, 0.25) 91%
  );
`;

export function Favorites(props) {
  let favs = props.myFavorites.map((c) => (
    <Card
      key={c.id}
      id={c.id}
      name={c.name}
      species={c.species}
      gender={c.gender}
      image={c.image}
    />
  ));
  return <CardsContainer>{favs}</CardsContainer>;
}

let mapStateToProps = (state) => ({
  myFavorites: state.myFavorites,
});

export default connect(mapStateToProps)(Favorites);
