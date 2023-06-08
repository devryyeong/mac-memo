import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"

export const GlobalStyle = createGlobalStyle`
${reset}
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    font-family: 'Noto Sans KR', sans-serif;
  }
`;
