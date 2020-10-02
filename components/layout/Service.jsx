import React from "react";
import styled from "@emotion/styled";
const Service = ({ service }) => {
  const { title, content, icon } = service;
  return (
    <ServiceWrapper>
      <ImageWrapper>
        <img src={icon} alt={`${title} icon`} />
      </ImageWrapper>
      <div className="service-container">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </ServiceWrapper>
  );
};

export default Service;

const ServiceWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: space-between;
  @media (min-width: 768px) and (max-width: 991px) {
    flex-flow: column nowrap;
    justify-content: flex-start;
  }
  &:not(:first-of-type) {
    margin-top: 45px;
  }
  @media (min-width: 768px) {
    flex: 0 0 43%;
    &:first-of-type,
    &:nth-of-type(2) {
      margin-top: 0;
    }
  }
  img {
    flex: 0 0 85px;
    margin-right: 27px;

    @media (min-width: 768px) and (max-width: 991px) {
      margin: 0;
    }
  }
  .service-container {
    h2 {
      font-size: 22px;
      font-size: 2.2rem;
      @media (min-width: 768px) {
        margin-top: 30px;
        font-size: 28px;
        font-size: 2.8rem;
      }
      @media (min-width: 992px) {
        margin-top: 0;
      }
    }
    p {
      font-size: 15px;
      font-size: 1.5rem;
      line-height: 1.46;
      margin-top: 15px;
      @media (min-width: 768px) {
        font-size: 18px;
        font-size: 1.8rem;
      }
    }
  }
`;

const ImageWrapper = styled.div`
  @media (min-width: 768px) and (max-width: 991px) {
    min-height: 110px;
    display: flex;
    align-items: center;
  }
`;
