import React from "react";
import styled from "@emotion/styled";
// import BlobShape from "./BlobShape";

const Blob = ({ full, children, text, top, left, position, first }) => {
  return (
    <BlobContainer first={first}>
      <BlobWrapper top={top} left={parseInt(left)}>
        {/* <BlobShape position={position} /> */}
      </BlobWrapper>
      <BlobContent full={full}>{text}</BlobContent>
      {children}
    </BlobContainer>
  );
};

export default Blob;

// Styled Components

const BlobContainer = styled.section`
  position: relative;
  padding: 145px 0;
  margin-top: ${(props) => (props.first ? "135px" : 0)};
`;

const BlobWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 90vw;
  width: 90vw;
  min-height: 500px;
  min-width: 500px;
  display: block;
  transform: translate(-${(props) => props.left}%, -${(props) => props.top}%);

  @media (min-width: 1200px) {
    max-width: 1200px;
    max-height: 1200px;
    transform: translate(
      ${(props) => (props.left > 50 ? "-100%" : "0")},
      -${(props) => props.top}%
    );
  }
`;
const BlobContent = styled.h1`
  font-family: "Poppins", sans-serif;
  color: white;
  position: relative;
  z-index: 1;
  margin: 0;
  padding: 0;
  max-width: ${(props) => (props.full ? "100%" : "75%")};
  /* text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.16); */
`;
