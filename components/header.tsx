import * as S from "../styles/header";
import { Link } from "react-scroll";
import { useRef, useState } from "react";

interface props {
  station: string;
}

const Header = ({ station }: props) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const menuIconClick = () => {
    setMenuOpen((pre) => !pre);
  };

  const menuClick = () => {
    setMenuOpen(false);
  };

  return (
    <S.Header>
      <div className="logoDiv">
        <div className="logo">
          <S.Logo src="/img/Logo.svg" />
          <S.Title>
            <p className="title">지금 한강은</p>
            <p className="subTitle">{station && `${station} 한강물 온도`}</p>
          </S.Title>
        </div>
        <S.MobileMenu onClick={menuIconClick} />
      </div>
      <S.Nav isOpen={menuOpen}>
        <Link to="temp" spy={true} smooth={true} onClick={menuClick}>
          <p>temp</p>
        </Link>
        <Link to="tag" spy={true} smooth={true} onClick={menuClick}>
          <p>tag</p>
        </Link>
        <Link to="explanation" spy={true} smooth={true} onClick={menuClick}>
          <p>explanation</p>
        </Link>
        <Link to="symbol" spy={true} smooth={true} onClick={menuClick}>
          <p>symbol</p>
        </Link>
        <Link to="footer" spy={true} smooth={true} onClick={menuClick}>
          <p>developer</p>
        </Link>
      </S.Nav>
    </S.Header>
  );
};

export default Header;
