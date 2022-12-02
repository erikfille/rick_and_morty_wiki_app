export const FAV = 'FAV'
export const UNFAV = 'UNFAV'

export function fav(character) {
  return {
    type: FAV,
    payload: character,
  };
}

export function unFav(id) {
  return {
    type: UNFAV,
    payload: id,
  };
}
