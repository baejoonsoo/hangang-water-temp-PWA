import styled from "@emotion/styled";

export const Page = styled.main`
  height: auto;
  background-color: #03005f;
`;

export const TempData = styled.div`
  width: auto;
  position: absolute;
  top: 0;
  left: 0;
  margin: 250px 50px 0px 50px;

  & p {
    color: white;
  }

  & .topText {
    font-weight: bold;
    font-size: 25px;
    margin: 0;
  }

  & .temp {
    margin: 0;
    font-size: 70px;
    font-weight: bolder;
    width: 400px;
    border-bottom: #f0f0f0 0.5px solid;
  }

  .time {
    display: flex;
    justify-content: end;
  }

  .time p {
    justify-self: end;
  }
`;

export const HangangTempData = styled.div`
  position: relative;
`;

export const HangangImg = styled.div`
  height: 100vh;
  background-image: url("/img/backgroundHangang.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: end;
  filter: brightness(60%);
`;

export const Loading = styled.img`
  height: 50px;
`;
