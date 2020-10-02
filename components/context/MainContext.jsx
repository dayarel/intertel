import React, { createContext, useState } from "react";

export const MainContext = createContext();

const MainProvider = (props) => {
  const [blurred, setBlurred] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <MainContext.Provider value={{ blurred, open, setBlurred, setOpen }}>
      {props.children}
    </MainContext.Provider>
  );
};

export default MainProvider;
