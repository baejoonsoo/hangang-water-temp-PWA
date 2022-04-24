import styled from "@emotion/styled";

export const Footer = styled.footer`
  background-color: #495057;
  display: flex;
  padding: 5px 30px;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
`;

export const DeveloperInfo = styled.div`
  border-top: 2px #fff solid;
  margin: 20px;
  padding-top: 10px;
  width: 100%;
  justify-content: flex-end;
  display: flex;
  color: #eee;

  align-items: flex-end;
  gap: 10px;
`;

export const DeveloperName = styled.p`
  font-size: 20px;
  margin: 0;
  font-weight: bolder;
`;

export const GithubIcon = styled.div`
  width: 35px;
  height: 35px;
  background-image: url("/img/github.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transition: 0.2s;

  :hover {
    transform: scale(1.1);
  }
`;

export const FacebookIcon = styled(GithubIcon)`
  background-image: url("/img/facebook.png");
`;
