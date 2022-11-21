import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import GlobalStyles from "./styles/GlobalStyles";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  let noRepeat = (data) => {
    for (let char of characters) {
      if (char.name === data.name) {
        return true;
      }
    }
    return false;
  };

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (noRepeat(data)) {
          return window.alert("El personaje ya se ha buscado");
        } else {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        }
      });
  }

  function randomSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (noRepeat(data)) {
          return window.alert("El personaje ya se ha buscado");
        } else {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        }
      });
  }

  let onClose = (e) => {
    let filtrados = characters.filter((char) => char.id !== e);
    setCharacters(filtrados);
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      <GlobalStyles />
      <div>
        <Nav onSearch={onSearch} randomSearch={randomSearch} />
      </div>
      <hr />
      <div>
        <Cards characters={characters} onClose={onClose} />
      </div>
      <hr />
    </div>
  );
}

export default App;
