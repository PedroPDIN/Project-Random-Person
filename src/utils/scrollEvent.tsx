'use client'

import { ReactNode, useEffect } from "react";
import { useMainContext } from "@/hooks/useMainContext";

interface Props {
  children: ReactNode
}

export const ScrollEvent = ({ children }: Props) => {
  const { toggleIsOpen } = useMainContext();

  useEffect(() => {
    document.addEventListener('scroll', toggleIsOpen)
  }, []);

  return (
    <>
      {children}
    </>
  )
}
