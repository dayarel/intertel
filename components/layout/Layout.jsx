import React from "react";
import { Global, css } from "@emotion/core";
import Head from "next/head";
import Header from "./Header";
import MainProvider from "../context/MainContext";
import ContextWrapper from "./ContextWrapper";

const Layout = (props) => {
  return (
    <MainProvider>
      <Global
        styles={css`
          :root {
            --darkblue: #031759;
            --lightblue: #00f5ff;
            --greenish: #03b3bd;
            --blueish: #032761;
            --teal: #02c1cb;
          }
          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body {
            font-size: 16px;
            font-size: 1.6rem;
            line-height: 1.5;
            height: 100%;
            background-repeat: no-repeat;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: "Poppins", sans-serif;
            color: white;
            margin: 0;
            line-height: 1.5;
            color: white;
          }
          h1,
          h3 {
            font-size: 33px;
            font-size: 3.3rem;
            line-height: 40px;
            line-height: 4rem;
          }
          h2 {
            font-size: 22px;
            font-size: 2.2rem;
            line-height: 22px;
            line-height: 2.2rem;
          }
          p,
          li,
          a,
          span {
            font-family: "Rubik", sans-serif;
            color: white;
            font-weight: 300;
          }
          p {
            margin: 0;
            font-size: 14px;
            font-size: 1.4rem;
          }
          ::placeholder {
            color: white;
            text-align: center;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          a {
            text-decoration: none;
          }
          .overlay {
            position: fixed;
            height: 100vh;
            width: 100vw;
            top: 0;
            left: 0;
            z-index: 20;
            &:after {
              content: "";
              display: block;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: #0a0a0a;
              opacity: 0;
              pointer-events: all;
            }
            &.overlay-active {
              pointer-events: none;
              &:after {
                animation-fill-mode: forwards;
                animation-duration: 0.3s;
                animation-delay: 0.43s;
                animation-name: menu-overlay-fadein;
                animation-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
              }
            }
          }
          @keyframes menu-overlay-fadein {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 0.5;
              overflow: hidden;
            }
          }
        `}
      />
      <Head>
        <title>
          Intertel Ltd UK | Original Accessories from the Best Brands!
        </title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&family=Rubik:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"
        ></link>
      </Head>
      <ContextWrapper>
        <Header />
        {props.children}
      </ContextWrapper>
    </MainProvider>
  );
};

export default Layout;
