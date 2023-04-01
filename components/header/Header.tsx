import { NextPage } from "next";
import Link from "next/link";
import {
  HeaderInputContainerStyle,
  HeaderLogoStyle,
  HeaderMenuStyle,
  HeaderStyle,
} from "./Header.style";
import HeaderInput from "./HeaderInput";
import ThemeSelector from "./ThemeSelector";

interface Props {}

const Header: NextPage<Props> = () => {
  return (
    <HeaderStyle>
      <HeaderLogoStyle>
        <Link href={"/"}>Boafe</Link>
      </HeaderLogoStyle>
      <HeaderInput />
      <HeaderMenuStyle>
        <ThemeSelector />
        <div>div1</div>
        <div>div2</div>
      </HeaderMenuStyle>
    </HeaderStyle>
  );
};

export default Header;
