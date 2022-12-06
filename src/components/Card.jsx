import React, { useEffect } from "react";
import styled from "styled-components";
import { darkBlue, lightBlue, superLightBlue } from "../styles/GlobalStyles.js";
import { Link } from "react-router-dom";
import { fav, unFav } from "../redux/actions";
import { connect } from "react-redux";

const CardContainer = styled.div`
  padding: 10px 0px 0px 0px;
  display: inline-block;
  position: center;
  border-radius: 30px;
  background: linear-gradient(145deg, ${lightBlue}, ${darkBlue});
  margin: 30px;
  transition: 0.75s;
  text-decoration: none;
  

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

    &.fav {
      border: none;
      transition: all 0.75s;
      background-color: transparent;
    }
  }



  .fav {
    border: none;
    transition: all 0.75s;
    background-color: transparent;
    z-index: 10;

    &:hover {
      font-size: 18px;
      border-radius: 5px;
    }
  }

  & a {
    text-decoration: none;
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

export function Card(props) {
  const { id, fav, unFav, myFavorites } = props;

  const [isFav, setIsFav] = React.useState(false);

  let handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      unFav(id);
    } else {
      setIsFav(true);
      fav(props);
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, id]);

  return (
    <CardContainer key={props.name}>
      <button onClick={() => props.onClose(props.id)}>X</button>
      {isFav ? (
        <button onClick={handleFavorite} className="fav">
          ❤️
        </button>
      ) : (
        <button onClick={handleFavorite} className="fav">
          🤍
        </button>
      )}
      <Divisor />
      <Link to={`/detail/${id}`}>
        <Name>{props.name}</Name>
      </Link>
      <img src={props.image} alt={props.id} />
      <Characteristics>
        <Species>{props.species}</Species>
        <hr />
        <Gender>{props.gender}</Gender>
      </Characteristics>
    </CardContainer>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    fav: function (props) {
      dispatch(fav(props));
    },
    unFav: function (id) {
      dispatch(unFav(id));
    },
  };
}

let mapStateToProps = (state) => ({
  myFavorites: state.myFavorites,
});

export default connect(mapStateToProps, { fav, unFav })(Card);
