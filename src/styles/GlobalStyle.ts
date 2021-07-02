import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.bw5};
    color: ${({ theme }) => theme.colors.bw1};
  }

  body,
  input,
  textarea,
  button {
    font: 400 16px "Roboto", sans-serif;
  }
`;

export default GlobalStyle;
