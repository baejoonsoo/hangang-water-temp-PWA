import * as S from "../styles/footer";

const Footer = () => {
  return (
    <S.Footer>
      <S.DeveloperInfo>
        <S.DeveloperName>BaeJoonSoo</S.DeveloperName>
        <a href="http://github.com/baejoonsoo">
          <S.GithubIcon />
        </a>
        <a href="https://www.facebook.com/baejonsoo/">
          <S.FacebookIcon />
        </a>
      </S.DeveloperInfo>
    </S.Footer>
  );
};

export default Footer;
