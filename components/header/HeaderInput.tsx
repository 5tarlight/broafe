import { NextPage } from "next";
import {
  HeaderInputContainerStyle,
  HeaderInputStyle,
  HeaderSearchBtnStyle,
  HeaderSearchSplitter,
} from "./Header.style";

interface Props {}

const HeaderInput: NextPage<Props> = () => {
  return (
    <HeaderInputContainerStyle>
      <HeaderInputStyle placeholder="검색" />
      <HeaderSearchSplitter />
      <HeaderSearchBtnStyle>검색</HeaderSearchBtnStyle>
    </HeaderInputContainerStyle>
  );
};

export default HeaderInput;
