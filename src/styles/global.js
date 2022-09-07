import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
 
  html {
    @media(max-width: 1080px) {
      font-size: 93.75%; // valor em cima de 16px - 93.75% de 16px = 15px
    }
    @media(max-width: 720px) {
      font-size: 87.5%; // valor em cima de 16px - 87.5%% de 16px = 14px
    }
  }

  body {
    background: var(---background);
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  } 

  ul {
    list-style-type: none;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  } 
  button {
    cursor: pointer
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;