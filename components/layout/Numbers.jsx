import React, { useState } from "react";
import styled from "@emotion/styled";

const Numbers = () => {
  const [numbers, setNumbers] = useState([30, 30, 500, 1000]);
  return (
    <NumbersContainer>
      <h1>
        We work <br /> with {numbers[0]} Brands
      </h1>
      <h1>
        We work <br /> with {numbers[2]} Clients
      </h1>
      <h1>
        We ship <br /> to {numbers[1]} countries
      </h1>
      <h1>
        {numbers[3]} <br /> SKUA
      </h1>
    </NumbersContainer>
  );
};

export default Numbers;

const NumbersContainer = styled.section`
  padding: 0 0 85px;
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  @media (min-width: 992px) {
    width: 83.3333333%;
    margin: 0 auto;
  }
  h1 {
    max-width: 85%;
    margin-top: 56px;
    @media (min-width: 768px) {
      flex: 0 0 45%;
      margin-top: 85px;
    }

    br {
      display: none;
      @media (min-width: 768px) and (max-width: 1199px) {
        display: block;
      }
    }
  }
`;
