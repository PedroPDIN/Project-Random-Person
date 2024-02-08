'use client'

import { createContext, useState, ReactNode } from "react";
import { IDataType } from "@/interfaces/IDataTypesContext";

interface Props {
  children: ReactNode;
};

// context
const MainContext = createContext({} as IDataType);

// provider
export function MainProvider({ children }: Props) {
  const [isOpenNavBar, setIsOpenNavBar] = useState<boolean>(false);
  const [gender, setGender] = useState<'female' | 'male' | ''>('');
  const [nat, setNat] = useState<string>('');
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [title] = useState<string>("Random Person");

  const toggleIsOpen = () => setIsOpenNavBar(!isOpenNavBar);

  const contextValue = {
    isOpenNavBar,
    setIsOpenNavBar,
    toggleIsOpen,
    title,
    gender,
    setGender,
    nat,
    setNat,
    isOpenModal,
    setIsOpenModal,
  };

  return (
    <MainContext.Provider value={contextValue} >
      {children}
    </MainContext.Provider>
  )
}

export default MainContext;