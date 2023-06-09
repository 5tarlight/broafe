import { createGlobalStyle } from "styled-components";
import { Theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }: { theme: Theme }) => theme.colors.text};
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font: inherit;
    vertical-align: baseline;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export default GlobalStyle;
