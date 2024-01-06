'use client'

import { createContext, useState, ReactNode } from "react";
import { IDataType } from "@/interfaces/IDataTypes";

interface Props {
  children: ReactNode;
};

// context
const MainContext = createContext({} as IDataType);

// provider
export function MainProvider({ children }: Props) {
  const [isOpenNavBar, setIsOpenNavBar] = useState<boolean>(false);

  const toggleIsOpen = () => setIsOpenNavBar(!isOpenNavBar)

  const contextValue = {
    isOpenNavBar,
    toggleIsOpen,
  };

  return (
    <MainContext.Provider value={contextValue} >
      {children}
    </MainContext.Provider>
  )
}

export default MainContext;