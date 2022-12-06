import React from "react";
import { useState } from "react";
import validation from "./validation";
import styled from "styled-components";
// import GlobalStyles from "../../styles/GlobalStyles";
import {
  darkBlue,
  lightBlue,
  superLightBlue,
} from "../../styles/GlobalStyles.js";

const StyledForm = styled.div`
  display: inline-block;
  position: center;
  border-radius: 30px;
  background: linear-gradient(145deg, ${lightBlue}, ${darkBlue});
  margin: 20px;
  color: white;
  width: 400px;

  & div {
    margin: 20px 10px;
  }

  & p {
    font-size: 10px;
    color: white;
  }

  & hr {
    width: 75%;
  }
  
  button {
    width: 25%;
    padding: 8px 8px;
    color: ${darkBlue};
    border: none;
    border-radius: 5px 5px 5px 5px;
    background: linear-gradient(145deg, ${lightBlue}, ${darkBlue});
    box-shadow: 0px 0px 2px ${darkBlue}, 0px 0px 2px ${lightBlue};
    background: linear-gradient(145deg, #f0f0f0, #cacaca);
    transition: 0.75s;
    margin-top: 5%;
    margin-bottom: 6%;
    

    &:hover {
      color: ${superLightBlue};
      border-radius: 5px 5px 5px 5px;
      background: linear-gradient(145deg, ${lightBlue}, ${darkBlue});
      box-shadow: 0px 0px 2px ${darkBlue}, 0px 0px 2px ${lightBlue};
      cursor: pointer;
    }
  }

  .danger {
    border: 1px solid red;
  }
`;

export default function Form(props) {
  const { login } = props;

  const [userData, setUserData] = useState({
    username: "mailfalso123@gmail.com",
    password: "ContraseñaFalsa123",
  });

  const [errors, setErrors] = useState({
    user: "",
    password: "",
  });

  function handleInputChange(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validation({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    login(userData);
  }

  return (
    <StyledForm>
      <h1>¡Bienvenido!</h1>
      <hr/>
      <h3>Ingresa tus datos para acceder</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            id="username"
            name="username"
            value={userData.user}
            onChange={handleInputChange}
            className={errors.username && "danger"}
            type="text"
          ></input>
          {errors.username && <p>{errors.username}</p>}
        </div>

        <div>
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            className={errors.password && "danger"}
            type="password"
          ></input>
          {errors.password && <p>{errors.password}</p>}
        </div>
        <hr />
        <button>Ingresar</button>
      </form>
    </StyledForm>
  );
}
