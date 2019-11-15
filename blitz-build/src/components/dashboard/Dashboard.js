import React from "react";
import styled from "styled-components";

// import NavBar from "../NavBar";
import Global from "./Global";
import TaskCard2 from './TaskCard2';

function Dashboard() {
  return (
    <Container>
      <Global />
      <Nav />
      <Main>
        <Header />
        <Content>
          <TaskCard2 />
        </Content>
        <Footer>
          <p>2019 © BlitzBuild, Inc. All Rights Reserved.</p>
        </Footer>
      </Main>
    </Container>
  );
}

export default Dashboard;

const Container = styled.div`
  max-height: 100vh;
  display: flex;
`;

const Nav = styled.div`
  min-width: 296px;
  height: 100vh;
  background: #3f3a36;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  background: #ebe9e7;
  width: 100%;
`;

const Header = styled.div`
  background: #fff;
  width: 100%;
  height: 96px;
`;

const Content = styled.div`
  background: #ebe9e7;
  height: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
`;

const Footer = styled.div`
  padding: 16px 32px;
  position: fixed;
  bottom: 0;
  
  p {
    color: #8a827d;
    font-family: "Roboto";
    font-size: 14px;
    line-height: 16px;
  }
`;
