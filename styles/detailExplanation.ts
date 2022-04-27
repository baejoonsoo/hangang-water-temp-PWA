import styled from '@emotion/styled';

export const Page = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: #03005f;

  div {
    padding-top: 10vh;
    height: 90vh;
  }
`;

export const HangangImg = styled.div`
  width: 40%;
  align-items: center;
  position: relative;
  display: flex;

  img {
    margin: 0 5%;
    width: 90%;
    border-radius: 5px;
    border: 3px solid #fff;
    position: absolute;
  }

  @media screen and (max-width: 600px) {
    img {
      display: none;
    }
  }
`;

export const ContextDiv = styled.div`
  width: 55%;
  flex-direction: column;
  display: flex;
  align-items: flex-end;
  align-content: center;
  justify-content: center;
  position: relative;
  @media screen and (max-width: 550px) {
    width: fit-content;
  }
`;

export const Content = styled.h3`
  color: #22b8cf;
  font-size: 26px;
  background-color: white;
  padding: 8px 30px;
  width: fit-content;
  border-radius: 40px;
  transition: 0.5s ease-in-out;
  white-space: nowrap;

  :hover {
    transform: scale(1.12);
  }

  @media (max-width: 550px) {
    font-size: 16px;
  }
`;
