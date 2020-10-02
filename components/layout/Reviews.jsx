import React from "react";
import Slider from "react-slick";
import styled from "@emotion/styled";

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliders = [
    {
      id: 0,
      content:
        "Impressive range of products with good prices. Honest and reliable company. Would not hesitate to deal with again",
      reviewer: "Sergio Pereira",
    },
    {
      id: 1,
      content:
        "Intertel is a young company but making big leaps in the industry. One to look out for!",
      reviewer: "Nitin Patel",
    },
    {
      id: 2,
      content:
        "Suppliers of a full range of genuine mobile accessories, parts and more. Providers of a top service for wholesale and retail customers",
      reviewer: "Richard Taylor",
    },
  ];

  return (
    <SlideWrapper>
      <Slider {...settings} arrows={false}>
        {sliders.map((review) => (
          <Slide key={review.id}>
            <h1>“{review.content}”</h1>
            <span>- {review.reviewer}</span>
          </Slide>
        ))}
      </Slider>
    </SlideWrapper>
  );
};

export default Reviews;

// Styled Components

const SlideWrapper = styled.div`
  padding-bottom: 100px;
  .slick-dots {
    bottom: -106px;
    li {
      width: 25px;
      height: 25px;
      button {
        width: 25px;
        height: 25px;
        &:before {
          font-size: 50px;
          color: white;
          width: 25px;
          height: 25px;
        }
      }
    }
  }
`;

const Slide = styled.div`
  h1,
  span {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }
  }
  span {

    margin-top: 40px;
    display: block;
    font-size:33px;
    font-size:3.3rem;
    line-height:40px;
    line-height:4rem;
    /* @media (min-width: 768px) {
      font-size: 32px;
      font-size: 3.2rem;
    }
    @media (min-width: 1200px) {
      font-size: 44px;
      font-size: 4.4rem;
    } */

`;
