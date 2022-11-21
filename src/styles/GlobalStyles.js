import { createGlobalStyle } from "styled-components";

let darkBlue = '#131226'
let lightBlue = '#5D5ABF'
let darkPink = '#F24472'
let lightPink = '#D973B5'
let superLightBlue = '#ebefff'

const GlobalStyles = createGlobalStyle`


body {
    /* background-image: url("https://www.todofondos.net/wp-content/uploads/1920x1080-Rick-y-Morty-Wallpaper-HD.-Papel-tapiz-de-encabezado.-Cielos-nocturnos-Rick.jpg"); */
    background-image: url("https://wallpaperaccess.com/full/372562.jpg");
    background-size: cover;
    background-attachment: fixed;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
`;

export default GlobalStyles;

export {darkBlue, darkPink, lightBlue, lightPink, superLightBlue}