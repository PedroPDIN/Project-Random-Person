import { useContext } from "react";
import { IDataType } from "@/interfaces/IDataTypes";
import MainContext from "@/store/context/Main.context";

export const useMainContext = (): IDataType => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("erro no Contexto.");
  }

  console.log(context.isOpenNavBar)
  return context;
};
