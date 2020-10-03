import React from "react";
import styled from "@emotion/styled";
const SectionHeader = ({ svg, title, children }) => {
  return (
    <SectionHeading>
      {svg ? (
        <SectionImg src={`/static/img/${svg}.svg`} alt={`${svg} Image`} />
      ) : null}

      <div className="header-content">
        {title ? <h1>{title}</h1> : null}
        <div>{children}</div>
      </div>
    </SectionHeading>
  );
};

export default SectionHeader;

// Styled Components

const SectionHeading = styled.div`
  .header-content {
    margin-top: 20px;
    @media (min-width: 992px) {
      display: flex;
    }
    h1 {
      @media (min-width: 992px) {
        flex: 4;
      }
      @media (min-width: 1200px) {
        flex: 3;
      }
    }
    & > div {
      margin-top: 25px;
      @media (min-width: 768px) {
        margin-top: 55px;
      }
      @media (min-width: 992px) {
        flex: 8;
        margin-top: 0;
        margin-left: 50px;
      }
      @media (min-width: 1200px) {
        flex: 9;
        margin-left: 95px;
      }
      p + p {
        margin-top: 35px;
      }
    }
  }
`;

const SectionImg = styled.img`
  margin-bottom: 55px;
  display: block;
  max-width: 100%;
  @media (min-width: 768px) {
    margin-bottom: 75px;
  }
  @media (min-width: 1200px) {
    width: 60%;
    margin: 0 auto 125px;
  }
`;
