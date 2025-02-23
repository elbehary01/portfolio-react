import React, { createContext } from "react";
import useTheme from "../hooks/useTheme";

export const PortfolioContext = createContext();

const PortfolioProvider = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  const values = {
    theme,
    toggleTheme,
  };
  return (
    <PortfolioContext.Provider value={values}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioProvider;
