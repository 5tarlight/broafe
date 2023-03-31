import { DefaultTheme } from "styled-components";

export interface Theme extends DefaultTheme {
  colors: {
    text: string;
    base: string;

    pri0: string;
    pri1: string;

    dark0: string;
    dark1: string;
    dark2: string;
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
      base: "#ffffff",
      pri0: "#cc73ff",
      pri1: "#ba67eb",
      dark0: "#e3e3e3",
      dark1: "#d4d4d4",
      dark2: "#c2c2c2",
    },
  },
  // TODO : Dark theme!
  black: {
    colors: {
      text: "#ffffff",
      base: "#000000",
      pri0: "#c751e8",
      pri1: "#b640d6",
      dark0: "#e3e3e3",
      dark1: "#d4d4d4",
      dark2: "#c2c2c2",
    },
  },
};
