import React from "react";
import { Global, css } from "@emotion/core";
import Head from "next/head";
import MainProvider from "../context/MainContext";
import ContextWrapper from "./ContextWrapper";
const Layout = () => {
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
        `}
      />
      <ContextWrapper>{props.children}</ContextWrapper>
    </MainProvider>
  );
};

export default Layout;
