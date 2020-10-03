import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
const Footer = () => {
  const logos = [
    {
      name: "Facebook",
      icon: "/static/img/facebook.svg",
      url: "https://www.facebook.com/#",
    },
    {
      name: "Twitter",
      icon: "/static/img/twitter.svg",
      url: "http://twitter.com",
    },
    {
      name: "Google",
      icon: "/static/img/g+.svg",
      url: "http:google.com",
    },
  ];
  return (
    <FooterDiv>
      <Left>
        <h2>Contact</h2>
        <div>
          <p>Intertel Ltd, Unit 1</p>
          <p>Old St. Lukes School</p>
          <p>Duckworth Street</p>
          <p>Blackburn, Lancashire</p>
          <p>BB2 2JQ, United Kingdom</p>
        </div>
        <div className="contact-info">
          <p>+44 1254 485 414</p>
          <a href="mailto:info@telecoms-international.com">
            info@telecoms-international.com
          </a>
        </div>
      </Left>

      <Right>
        <div>
          <h2>Info</h2>
          <ul>
            <li>
              <Link href="/our-services">
                <a>Our Services</a>
              </Link>
            </li>
            <li>
              <Link href="about-use">
                <a>We are Intertel</a>
              </Link>
            </li>
          </ul>

          <ul className="social">
            {logos.map((logo) => (
              <li
                key={logo.name}
                css={css`
                  margin-top: 0;
                  display: inline-block;
                  background-image: url(${logo.icon});
                  width: 16px;
                  height: 16px;
                  background-size: cover;
                `}
              >
                <a href={logo.url} target="_blank" rel="noreferrer">
                  {logo.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p>
          Design copyright{" "}
          <a href="https://shohaibiqbal.design/" target="_blank">
            Shohaib Iqbal
          </a>
        </p>
      </Right>
    </FooterDiv>
  );
};

export default Footer;

// Styled Components

const FooterDiv = styled.footer`
  width: 82.63%;
  margin: 95px auto 0;
  max-width: 1140px;
  h2,
  p,
  a {
    font-size: 18px;
    font-size: 1.8rem;
    @media (min-width: 992px) {
      font-size: 26px;
      font-size: 2.6rem;
    }
  }
  a {
    color: white;
    display: block;
  }
  h2 + div {
    margin-top: 29px;
  }
  padding-bottom: 45px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;
const Left = styled.div`
  @media (min-width: 768px) {
    flex: 0 0 50%;
  }
  .contact-info {
    margin-top: 45px;
    a {
      text-decoration: underline;
    }
  }
  div > * {
    margin-top: 13px;
  }
`;
const Right = styled.div`
  margin-top: 65px;
  @media (min-width: 766px) {
    margin-top: 0;
    flex: 0 0 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  li:not(first-of-type) {
    margin-top: 13px;
    a {
      text-decoration: underline;
    }
  }
  ul.social {
    width: 95px;
    display: flex;
    align-items: center;
    margin-top: 25px;
    justify-content: space-between;
    li {
      a {
        text-indent: -9999px;
        display: block;
      }
    }
  }
  p {
    margin-top: 100px;
    font-size: 15px;
    font-size: 1.5rem;
    font-family: "Rubik", sans-serif;
    font-weight: 400;
    @media (min-width: 992px) {
      font-size: 21px;
      font-size: 2.1rem;
    }
    @media (min-width: 1200px) {
      font-size: 23px;
      font-size: 2.3rem;
    }
    a {
      font-size: 15px;
      font-size: 1.5rem;
      font-family: "Rubik", sans-serif;
      font-weight: 400;
      display: inline;
      @media (min-width: 1200px) {
        font-size: 23px;
        font-size: 2.3rem;
      }
    }
  }
`;
