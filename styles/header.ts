import styled from "@emotion/styled";

export const Header = styled.header`
  height: 80px;
  width: 100vw;
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: rgba(40, 40, 40, 0.5);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  div {
    display: flex;
    align-items: center;
    height: 80px;
    width: fit-content;
  }
`;

export const Logo = styled.img`
  height: 70%;
`;

export const Title = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  p {
    margin: 0;
  }
  .title {
    font-size: 20px;
    font-weight: bold;
  }
  .subTitle {
    font-size: 12px;
    color: #dedede;
    font-weight: 600;
  }
`;

export const Nav = styled.nav`
  width: fit-content;
  height: 100%;
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  margin-right: 50px;
  align-items: center;

  p {
    font-size: 16px;

    color: white;
    text-decoration: none;

    :hover {
      cursor: pointer;
      color: #4263eb;
    }
  }
`;
