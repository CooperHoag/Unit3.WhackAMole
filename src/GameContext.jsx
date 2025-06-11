import { createContext, useContext, useState } from "react";

// create the context
const GameContext = createContext();

// 
export const GameProvider = ({ children }) => {


  const values = { };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}

// component using the custom hook
export function useGame() {
  const context = useContext(GameContext);

  if(!context){
    throw Error("useTheme is not available outside of ThemeContext");
    // idk if this is actually needed or not
  }

  return context;
}