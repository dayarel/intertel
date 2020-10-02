import React from "react";
import styled from "@emotion/styled";
const Section = ({ children, first }) => {
  return <MainSection first={first}>{children}</MainSection>;
};

export default Section;

// Styled Components

const MainSection = styled.section`
  padding: 65px 0;
  margin-top: ${(props) => (props.first ? "225px" : "0")};
  @media (min-width: 1200px) {
    padding: 155px 0;
  }

  a:not(.center) {
    @media (min-width: 768px) {
      margin: 65px 0 0;
    }
  }
`;
