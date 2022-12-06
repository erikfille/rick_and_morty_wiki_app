import Card from ".././Card";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { orderCards, filterCards } from "../../redux/actions";

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

export default function Favorites(props) {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  function onSelect(e) {
    e.target.value === "Ascendente" && dispatch(orderCards(e.target.value));
    e.target.value === "Descendente" && dispatch(orderCards(e.target.value));
    e.target.value === "Male" && dispatch(filterCards(e.target.value));
    e.target.value === "Female" && dispatch(filterCards(e.target.value));
    e.target.value === "unknown" && dispatch(filterCards(e.target.value));
    e.target.value === "Genderless" && dispatch(filterCards(e.target.value));
  }


  let favs = myFavorites.map((c) => (
    <Card
      key={c.id}
      id={c.id}
      name={c.name}
      species={c.species}
      gender={c.gender}
      image={c.image}
    />
  ));

  return (
    <div>
      <div>
        <select onChange={onSelect}>
          <option value="Ascendente">
            Ascendente
          </option>
          <option value="Descendente">
            Descendente
          </option>
        </select>
        <select select onChange={onSelect}>
          <option value="Male">
            Male
          </option>
          <option value="Female">
            Female
          </option>
          <option value="Genderless">
            Genderless
          </option>
          <option value="unknown">
            unknown
          </option>
        </select>
      </div>
      <CardsContainer>{favs}</CardsContainer>
    </div>
  );
}

// let mapStateToProps = (state) => ({
//   myFavorites: state.myFavorites,
// });

// export default connect(mapStateToProps)(Favorites);
