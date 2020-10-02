import React, { useContext } from "react";
import { MainContext } from "../context/MainContext";
const ContextWrapper = (props) => {
  const { blurred } = useContext(MainContext);
  return (
    <>
      <div className={`overlay ${blurred ? "blurred" : null}`}></div>
      {props.children}
    </>
  );
};

export default ContextWrapper;
