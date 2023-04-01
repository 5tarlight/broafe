import { NextPage } from "next";
import {
  HeaderThemeDropdownContainerStyle,
  HeaderThemeDropdownItem,
  HeaderThemePolygonStyle,
  HeaderThemeSelectorContainerStyle,
  HeaderThemeSpanStyle,
  HeaderThemeTriSvgStyle,
} from "./Header.style";

interface Props {}

const ThemeSelector: NextPage<Props> = () => {
  return (
    <HeaderThemeSelectorContainerStyle>
      <HeaderThemeSpanStyle>테마</HeaderThemeSpanStyle>
      <HeaderThemeTriSvgStyle height={13} width={16}>
        <HeaderThemePolygonStyle points="8,13 2,2 15,2" />
      </HeaderThemeTriSvgStyle>

      <HeaderThemeDropdownContainerStyle>
        <HeaderThemeDropdownItem>White</HeaderThemeDropdownItem>
        <HeaderThemeDropdownItem>Dark</HeaderThemeDropdownItem>
      </HeaderThemeDropdownContainerStyle>
    </HeaderThemeSelectorContainerStyle>
  );
};

export default ThemeSelector;
