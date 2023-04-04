import { DefaultTheme } from "styled-components";

export interface Theme extends DefaultTheme {
  colors: {
    text: string;
    background: string;

    pri0: string;
    pri1: string;

    dark0: string;
    dark1: string;
    dark2: string;
    dark3: string;
    dark4: string;
    dark5: string;
    dark6: string;
  };

  /**
   * This function donesn't create color which is fit to dark or white theme.
   * It will simply reverse everything.
   * This process is recommended for only white-black convertion or
   * code fo `r`, `g`, `b` is all same. It not, this may cause unexpected color.
   *
   * @param color Original color which will be reversed. With `#abcdef`.
   * @returns Reversed hex color code. `#543210`
   */
  reverse: (color: string) => string;
}

export interface ThemeGroup {
  white: Theme;
  black: Theme;
}

export const reverse = (color: string): string => {
  const r = (0xff - parseInt(color.slice(1, 3), 16)).toString(16);
  const g = (0xff - parseInt(color.slice(3, 5), 16)).toString(16);
  const b = (0xff - parseInt(color.slice(5, 7), 16)).toString(16);

  if (!(r === b && b === g)) {
    console.warn(
      "Color reversing is only recommended for converting white to black or black to white."
    );
  }
  return "#" + r + g + b;
};

export const theme: ThemeGroup = {
  white: {
    colors: {
      text: "#000000",
      background: "#ffffff",
      pri0: "#cc73ff",
      pri1: "#ba67eb",
      dark0: "#e3e3e3",
      dark1: "#d4d4d4",
      dark2: "#c2c2c2",
      dark4: "#9e9e9e",
      dark3: "#999999",
      dark5: "#737373",
      dark6: "#4d4d4d",
    },

    reverse,
  },
  // TODO : Dark theme!
  black: {
    colors: {
      text: "#ffffff",
      background: "#000000",
      pri0: "#c751e8",
      pri1: "#b640d6",
      dark0: "#e3e3e3",
      dark1: "#d4d4d4",
      dark2: "#c2c2c2",
      dark3: "#999999",
      dark4: "#9e9e9e",
      dark5: "#737373",
      dark6: "#4d4d4d",
    },

    reverse,
  },
};
