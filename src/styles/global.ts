import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme['blue']};
  }

  body {
    background-color: ${props => props.theme['base-background']};
    color: ${props => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem 'Nunito', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 12px;               /* Largura da barra de rolagem */
  }

  ::-webkit-scrollbar-track {
    background: #071422;        /* Cor do fundo da barra de rolagem */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #1C2F41;  /* Cor da barra de rolagem */
    border-radius: 6px;         /* Arredondar as bordas */
    border: 3px solid #071422;  /* Espaço ao redor do thumb */
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #3A536B;  /* Cor ao passar o mouse sobre a barra */
  }

  /* Estilizando a scrollbar no Firefox */
  html {
    scrollbar-width: thin;           /* Define a largura da scrollbar como fina */
    scrollbar-color: #1C2F41 #071422; /* Cor do thumb e do track (background) */
  }
`;