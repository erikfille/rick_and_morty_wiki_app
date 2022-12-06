import { FAV, UNFAV, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case FAV:
      let favs = [...state.allCharacters];
      favs.push(payload);
      return {
        ...state,
        myFavorites: favs,
        allCharacters: favs,
      };

    case UNFAV:
      let unFav = state.myFavorites.filter((c) => c.id !== payload);
      return {
        ...state,
        myFavorites: unFav,
      };

    case FILTER:
      let filtered = [...state.allCharacters].filter(
        (c) => c.gender === payload
      );
      return {
        ...state,
        myFavorites: filtered,
      };

    case ORDER:
      let ordered = [...state.allCharacters].sort((a, b) => {
      if(payload === "Ascendente") {
        if (a.id > b.id) return 1;
        if (a.id < b.id) return -1;
      }
      if(payload === "Descendente") {
        if (a.id > b.id) return -1;
        if (a.id < b.id) return 1;
      }
      });

      return {
        ...state,
        myFavorites: ordered,
      };

    default:
      return state;
  }
}
