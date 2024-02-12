'use client'

import { ReactNode, useEffect } from "react";
import { useMainContext } from "@/hooks/useMainContext";

interface Props {
  children: ReactNode
}

export const ScrollEvent = ({ children }: Props) => {
  const { setIsOpenNavBar } = useMainContext();

  useEffect(() => {
    document.addEventListener('scroll', () => setIsOpenNavBar(false))
  }, [setIsOpenNavBar]);

  return (
    <>
      {children}
    </>
  )
}
