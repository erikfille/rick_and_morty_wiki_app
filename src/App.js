import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";
import Error404 from "./components/Error404.jsx";

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
      <Nav onSearch={onSearch} randomSearch={randomSearch} />
      <hr />
      <Routes>
        <Route path="/" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/About" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <hr />
    </div>
  );
}

export default App;
