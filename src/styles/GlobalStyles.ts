import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500;600;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body, #root {
    height: 100%;
  }
  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Ubuntu', sans-serif;
  }
  :root {
    --background: #282a36;
    --background2: #21222c;
    --current: #343746;
    --selection: #44475a;
    --gray: #9E9E9E;
    --light-gray: #c9d1d9;
    --foreground: #f8f8f2;
    --comment: #6272a4;
    --cyan: #8be9fd;
    --green: #50fa7b;
    --orange: #ffb86c;
    --pink: #ff79c6;
    --purple: #bd93f9;
    --red: #ff5555;
    --yellow: #f1fa8c;
  }
`