import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const BioContext = createContext();
export const BioProvider = ({children}) => {
  const myName = "Atul_kumar";
  const myAge = 26;
  console.log(children);
  return (
    <BioContext.Provider value={{ myName, myAge }}>
      {children}
    </BioContext.Provider>
  );
};


