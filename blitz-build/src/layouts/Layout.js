import React, { useContext } from "react";
import styled from "styled-components";

import Global from "./Global";
import Nav from "./Nav";
import Header from "./Header.jsx"






function Layout({ children, pathname }) {




const LandingPage = (component) => {
 if(pathname.includes('/landing')) {
   return (
     <div></div>
   )}
   else {
     return component
   }
 }


  return (
    <Container>
      <Global />
      {LandingPage(<Nav />)}  
      <Main>
      {LandingPage( <Header pathname = {pathname} />)} 
        <Content>{children}</Content>
        <Footer>
          <p>2019 © BlitzBuild, Inc. All Rights Reserved.</p>
        </Footer>
      </Main>
    </Container>
  );
}

export default Layout;


const Container = styled.div`
  max-width: 100%;
  display: flex;
`;


const Main = styled.div`
  display: flex;
  flex-direction: column;
  background: #ebe9e7;
  width: 100%;
`;



const Content = styled.div`
  background: #ffffff;
  height: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
`;

const Footer = styled.div`
  padding: 16px 32px;
  bottom: 0;
  background: white;

  p {
    color: #8a827d;
    font-family: "Roboto";
    font-size: 14px;
    line-height: 16px;
  }
`;
