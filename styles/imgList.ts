import styled from "@emotion/styled";

export const Page = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: #03005f;
`;
export const Explanation = styled.div`
  padding: 100px 0px 40px 40px;

  h1,
  p {
    margin: 0;
  }
  h1 {
    border-bottom: 3px solid aliceblue;
    font-size: 55px;
    color: aliceblue;
  }
  p {
    font-size: 20px;
    color: aliceblue;
    margin-top: 10px;
  }
`;

export const CardList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const PhotoCard = styled.div`
  background-color: white;
  position: relative;
  border-radius: 10px;
  padding: 60px 0 30px 0;
  filter: drop-shadow(0 0 5px #fff);

  display: grid;

  * {
    justify-self: center;
    margin: 0;
  }

  h1 {
    font-family: "Cafe24Ssurround";
    padding-top: 10px;
    padding-left: 10px;
    font-size: 20px;
    color: #202020;
  }

  p {
    font-family: "LeferiPoint-WhiteObliqueA";
    margin-top: 5px;
    color: #808080;
    font-weight: bold;
    font-size: 16px;
  }
`;

export const HoverImg = styled.div`
  transition: 0.3s;
  z-index: 3;
  width: 100px;
  pointer-events: none;
  height: 50px;
  opacity: ${({ isHidden }: { isHidden: boolean }) => (isHidden ? "0" : "1")};
  position: absolute;
  background-image: url("/img/hearts.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  top: 40%;
`;

export const CardImg = styled.div`
  width: 390px;
  height: 180px;

  background-image: url(${({ src }: { src: string }) => src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: 0.5s;

  &:hover {
    opacity: 0.7;
  }
`;
