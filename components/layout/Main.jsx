import React from "react";
import Footer from "./Footer";
import styled from "@emotion/styled";
const Main = ({ children }) => {
  return (
    <MainWrapper>
      <main>{children}</main>
      <Footer />
    </MainWrapper>
  );
};

export default Main;

// Styled component

const MainWrapper = styled.div`
  background: linear-gradient(
    180deg,
    rgba(1, 124, 165, 1) 0%,
    rgba(3, 23, 89, 1) 15%,
    rgba(3, 23, 89, 1) 35%,
    rgba(1, 124, 165, 1) 100%
  );
  overflow-x: hidden;
  main {
    width: 82.63%;
    margin: 0 auto;
    max-width: 1140px;
  }
`;
