import { FAV, UNFAV } from "./actions";

const initialState = {
  myFavorites: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case FAV:
      let favs = [...state.myFavorites];
      favs.push(payload);
      return {
        ...state,
        myFavorites: favs,
      };
    case UNFAV:
      let unFav = state.myFavorites.filter((c) => c.id !== payload);
      return {
        ...state,
        myFavorites: unFav,
      };
    default:
      return state;
  }
}
