import styled from "@emotion/styled";

export const Page = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #03005f;
`;
export const HangangImg = styled.div`
  background-image: url("/img/hangangSymbol.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: -15vh;
`;

export const MSG = styled.h1`
  position: absolute;
  font-size: 40px;
  color: #fff;
  bottom: -45px;

  @media screen and (max-width: 500px) {
    font-size: 30px;
    bottom: -35px;
  }
`;
