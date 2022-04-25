import styled from "@emotion/styled";

export const Page = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: #03005f;
`;

// title
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
    padding-right: 30px;
  }

  @media screen and (max-width: 700px) {
    h1 {
      font-size: 40px;
    }
    p {
      font-size: 15px;
    }
  }

  @media screen and (max-width: 450px) {
    h1 {
      font-size: 30px;
    }
    p {
      font-size: 12px;
    }
  }
`;

// card
export const CardList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    height: 60vh;
  }
`;

export const PhotoCard = styled.div`
  background-color: white;
  position: relative;
  border-radius: 10px;
  padding: 60px 0 30px 0;
  width: 30vw;
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
    padding: 0 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    span {
      padding: 0 3px;
    }
  }

  @media screen and (max-width: 800px) {
    height: 18vh;
    width: 80vw;
    padding: 0;
    grid-template-columns: 1fr 2fr;

    div {
      justify-self: flex-start;

      p {
        justify-content: flex-start;
      }
    }
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

  @media screen and (max-width: 800px) {
    width: 14vw;
    margin: 0 8vw;
  }
`;

export const CardImg = styled.div`
  width: 30vw;
  height: 180px;

  background-image: url(${({ src }: { src: string }) => src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: 0.5s;

  &:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 800px) {
    height: 18vh;
  }
`;
