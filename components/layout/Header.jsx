import React, { useContext } from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Nav from "./Nav";
import Link from "next/link";
import { MainContext } from "../context/MainContext";
const Header = () => {
  const { setOpen, setBlurred } = useContext(MainContext);

  const handleStatus = () => {
    setOpen(true);
    setBlurred(true);
  };
  return (
    <header
      css={css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 30;
        padding: 32px 0;
        @media (min-width: 1200px) {
          padding: 41px 0;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 42px;
          margin: 0 auto;
        `}
      >
        <Link href="/">
          <a>
            <Logo src="/static/img/logo.png" alt="Intertel Logo" />
          </a>
        </Link>
        <Burger onClick={handleStatus}>
          <span></span>
          <span></span>
          <span></span>
        </Burger>
      </div>
      <Nav />
    </header>
  );
};

export default Header;

// Styled Components

const Burger = styled.div`
  width: 24px;
  height: 22px;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 31px;
    height: 28px;
  }
  span {
    width: 100%;
    height: 3px;
    border-radius: 4px;
    background-color: white;
    display: block;
    &:last-of-type {
      width: 50%;
    }
  }
`;

const Logo = styled.img`
  display: block;
  width: 122px;
  height: auto;
  @media (min-width: 768px) {
    width: 190px;
  }
`;
