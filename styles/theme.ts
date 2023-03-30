import { DefaultTheme } from "styled-components";

export interface Theme extends DefaultTheme {
  colors: {
    text: string;
  };
}

export interface ThemeGroup {
  white: Theme;
  black: Theme;
}

export const theme: ThemeGroup = {
  white: {
    colors: {
      text: "#000000",
    },
  },
  black: {
    colors: {
      text: "#ffffff",
    },
  },
};
