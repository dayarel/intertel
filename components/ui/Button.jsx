import React from "react";
import { css } from "@emotion/core";
import Link from "next/link";

const Button = ({ center, link, content }) => {
  return (
    <Link href={`/${link}`}>
      <a
        css={css`
          position: relative;
          border: 1px solid white;
          border-radius: 3px;
          display: block;
          height: 55px;
          text-align: center;
          text-decoration: none;
          margin-top: 60px;
          padding: 0;
          transition: all 0.2s ease-in-out;
          color: #fff !important;
          line-height: 55px;
          font-size: 15px;

          &:hover {
            background-color: white;
            color: #031759 !important;
          }
          @media (min-width: 768px) {
            max-width: 320px;
            font-size: 17px;
            font-size: 1.7rem;
          }
        `}
        className={`btn ${center ? "center" : null}`}
      >
        {content}
      </a>
    </Link>
  );
};

export default Button;
