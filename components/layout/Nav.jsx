import React, { useContext } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { MainContext } from "../context/MainContext";

const Nav = () => {
  const { open, setOpen, setBlurred } = useContext(MainContext);
  const handleStatus = () => {
    setOpen(false);
    setBlurred(false);
  };
  return (
    <Wrapper className={open ? "open" : "closed"}>
      <Close onClick={handleStatus}>
        <div className="close-menu"></div>
      </Close>
      <NavWrapper>
        <ul>
          <li>
            <Link href="/our-brands">
              <a>Our Brands</a>
            </Link>
          </li>
          <li>
            <Link href="/about-us">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/trade-form">
              <a>Trade Form</a>
            </Link>
          </li>
        </ul>
        <NavBottom>
          <p>+44 1254 485 414</p>
          <a href="mailto:info@telecoms-international.com">
            info@telecoms-international.com
          </a>
        </NavBottom>
      </NavWrapper>
    </Wrapper>
  );
};

export default Nav;

// Styled Components

const Wrapper = styled.div`
  padding: 148px 37px 42px;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 40;
  background: linear-gradient(
    180deg,
    rgba(3, 23, 89, 1) 0%,
    rgba(3, 23, 89, 1) 35%,
    rgba(1, 133, 171, 1) 100%
  );
  transition: right 0.55s ease-in;
  &.open {
    right: 0;
  }
  &.closed {
    right: -100%;
  }
  @media (min-width: 768px) {
    width: 455px;
    padding: 148px 62px 42px;
  }
  @media (min-width: 992px) {
    width: 635px;
  }
`;

const NavWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: 100%;
  ul {
    li {
      margin-top: 15px;
      list-style-type: none;
      @media (min-width: 768px) {
        font-size: 38px;
        font-size: 3.8rem;
      }
      &:nth-of-type(1) {
        margin-top: 0;
      }
      a {
        font-size: 28px;
        font-size: 2.8rem;
        text-decoration: none;
        font-family: "Poppins", sans-serif;
        color: white;
        @media (min-width: 768px) {
          font-size: 35px;
          font-size: 3.5rem;
        }
      }
    }
  }
`;

const Close = styled.button`
  position: absolute;
  right: 42px;
  top: 30px;
  width: 25px;
  height: 25px;
  display: block;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline: none;
  @media (min-width: 768px) {
    width: 31px;
    height: 31px;
  }
  @media (min-width: 1200px) {
    top: 41px;
  }
  .close-menu {
    position: relative;
    width: 100%;
    height: 100%;
    &:before,
    &:after {
      position: absolute;
      content: "";
      height: 27px;
      width: 2px;
      background-color: white;
      @media (min-width: 768px) {
        height: 33px;
        width: 3px;
      }
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
`;
const NavBottom = styled.div`
  p,
  a {
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-size: 1.6rem;
    line-height: 25px;
    line-height: 2.5rem;
    @media (min-width: 768px) {
      font-size: 18px;
      font-size: 1.8rem;
      line-height: 44px;
      line-height: 4.4rem;
    }
  }
`;
