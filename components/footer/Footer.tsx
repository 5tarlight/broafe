import { NextPage } from "next";
import { FooterCopyrightStyle, FooterStyle } from "./Footer.style";

interface Props {}

const Footer: NextPage<Props> = () => {
  const year = new Date().getFullYear();

  return (
    <FooterStyle>
      <FooterCopyrightStyle>&copy; {year} YEAHx4.</FooterCopyrightStyle>
    </FooterStyle>
  );
};

export default Footer;
