import * as S from "../styles/header";
import { Link } from "react-scroll";

interface props {
  station: string;
}

const Header = ({ station }: props) => {
  return (
    <S.Header>
      <div>
        <S.Logo src="/img/Logo.svg" />
        <S.Title>
          <p className="title">지금 한강은</p>
          <p className="subTitle">{station && `${station} 한강물 온도`}</p>
        </S.Title>
      </div>
      <S.Nav>
        <Link to="temp" spy={true} smooth={true}>
          <p>temp</p>
        </Link>
        <Link to="tag" spy={true} smooth={true}>
          <p>tag</p>
        </Link>
        <Link to="explanation" spy={true} smooth={true}>
          <p>explanation</p>
        </Link>
        <Link to="symbol" spy={true} smooth={true}>
          <p>symbol</p>
        </Link>
        <Link to="footer" spy={true} smooth={true}>
          <p>developer</p>
        </Link>
      </S.Nav>
    </S.Header>
  );
};

export default Header;
