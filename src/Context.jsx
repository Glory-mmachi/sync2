import  { useState, useContext, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [show, setShow] = useState(false);
  return (
    <AppContext.Provider
      value={{
      show,setShow
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppProvider };

export const useGlobalContext = () => {
  return useContext(AppContext);
};
