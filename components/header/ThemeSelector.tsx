import { NextPage } from "next";
import { createRef, useEffect, useState } from "react";
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
  const dropdown = createRef<HTMLDivElement>();
  const [show, setShow] = useState(false);

  // dropdown?.current?.style.display = show ? "flex" : "none";
  useEffect(() => {
    dropdown?.current?.style.setProperty("display", show ? "flex" : "none");
  }, [show]);

  return (
    <HeaderThemeSelectorContainerStyle
      onClick={(e) => {
        setShow(!show);
      }}
    >
      <HeaderThemeSpanStyle>테마</HeaderThemeSpanStyle>
      <HeaderThemeTriSvgStyle height={13} width={16}>
        <HeaderThemePolygonStyle points="8,13 2,2 15,2" />
      </HeaderThemeTriSvgStyle>

      <HeaderThemeDropdownContainerStyle ref={dropdown}>
        <HeaderThemeDropdownItem>White</HeaderThemeDropdownItem>
        <HeaderThemeDropdownItem>Dark</HeaderThemeDropdownItem>
      </HeaderThemeDropdownContainerStyle>
    </HeaderThemeSelectorContainerStyle>
  );
};

export default ThemeSelector;
