import React from "react";
import styled from "@emotion/styled";
const Hero = ({ children, title }) => {
  return (
    <HeroWrapper>
      <div className="hero-header">
        {title ? <h2>{title}</h2> : null}
        <div className="hero-content">{children}</div>
      </div>

      <Scroll>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          id="Layer_2"
          x="0px"
          y="0px"
          viewBox="0 0 25.166666 37.8704414"
          enableBackground="new 0 0 25.166666 37.8704414"
        >
          <path
            className="stroke"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.75"
            strokeMiterlimit="10"
            d="M12.5833445 36.6204414h-0.0000229C6.3499947 36.6204414 1.25 31.5204487 1.25 25.2871208V12.5833216C1.25 6.3499947 6.3499951 1.25 12.5833216 1.25h0.0000229c6.2333269 0 11.3333216 5.0999947 11.3333216 11.3333216v12.7037992C23.916666 31.5204487 18.8166714 36.6204414 12.5833445 36.6204414z"
          ></path>
          <path
            className="scroller"
            fill="#ffffff"
            d="M13.0833359 19.2157116h-0.9192753c-1.0999985 0-1.9999971-0.8999996-1.9999971-1.9999981v-5.428606c0-1.0999994 0.8999987-1.9999981 1.9999971-1.9999981h0.9192753c1.0999985 0 1.9999981 0.8999987 1.9999981 1.9999981v5.428606C15.083334 18.315712 14.1833344 19.2157116 13.0833359 19.2157116z"
          ></path>
        </svg>
        <i className="icon icon-arrow-down"></i>
        <p>SCROLL DOWN</p>
      </Scroll>
    </HeroWrapper>
  );
};

export default Hero;

// Styled Component

const HeroWrapper = styled.section`
  height: 100vh;
  width: 100vw;
  position: relative;
  background-color: #017ca5;
  overflow: hidden;
  .hero-header {
    position: relative;
    z-index: 1;
    width: 82.63%;
    margin: 0 auto;
    max-width: 1360px;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }
  h2 + .hero-content {
    margin-top: 30px;
  }
`;

const Scroll = styled.div`
  position: absolute;
  left: 50%;
  bottom: 25px;
  transform: translateX(-50%);
  z-index: 2;
  svg {
    width: 25px;
    height: 35px;
    opacity: 1;
    transition: opacity 0.5s;
    display: block;
    margin: 0 auto 15px;
    @media (min-width: 768px) {
      width: 35px;
      height: auto;
    }
  }
  p {
    @media (min-width: 768px) {
      font-size: 21px;
      font-size: 2.1rem;
    }
  }
  .scroller {
    animation: updown 1s infinite;
  }

  @keyframes updown {
    0% {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
    50% {
      -webkit-transform: translate(0, 5px);
      transform: translate(0, 5px);
    }
    100% {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
  }
`;
