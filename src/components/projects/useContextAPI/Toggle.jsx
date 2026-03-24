import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const BioContext = createContext();

export const ThemeHookProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const handleOnClick = () => {
    return setTheme((pretheme) => (pretheme === "dark" ? "light" : "dark"));
  };
  return (
    <BioContext.Provider value={{ theme, handleOnClick }}>
      {children}
    </BioContext.Provider>
  );
};

