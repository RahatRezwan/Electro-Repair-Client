import React, { createContext, useState } from "react";

export const SpinnerContext = createContext();
const HomeSpinner = ({ children }) => {
   const [spin, setSpin] = useState(false);
   return <SpinnerContext.Provider value={{ spin, setSpin }}>{children}</SpinnerContext.Provider>;
};

export default HomeSpinner;
