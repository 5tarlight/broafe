import { NextPage } from "next";
import Link from "next/link";
import {
  HeaderInputContainerStyle,
  HeaderLogoStyle,
  HeaderMenuStyle,
  HeaderStyle,
} from "./Header.style";
import HeaderInput from "./HeaderInput";

interface Props {}

const Header: NextPage<Props> = () => {
  return (
    <HeaderStyle>
      <HeaderLogoStyle>
        <Link href={"/"}>Boafe</Link>
      </HeaderLogoStyle>
      <HeaderInput />
      <HeaderMenuStyle>
        <div>div1</div>
        <div>div2</div>
      </HeaderMenuStyle>
    </HeaderStyle>
  );
};

export default Header;
