import styled from "styled-components";

export const Header = styled.div`
  background-color: #222629;
  justify-content: center;
  line-height: 50px;
  position: fixed;
  display: flex;
  height: 60px;
  color: white;
  width: 100%;
`;

export const HeaderContent = styled.div`
  width: 70%;
  display: flex;
  * {
    margin: 5px;
  }
  @media (max-width: 680px) {
    width: 92%;
  }
`;

export const Main = styled.div`
  justify-content: center;
  padding-top: 80px;
  display: flex;
  width: 100%;
`;

export const MainContent = styled.div`
  width: 70%;
`;
