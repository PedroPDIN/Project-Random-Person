'use client'

import { MdOutlineMenu } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { useMainContext } from "@/hooks/useMainContext";

export default function Header() {
  const { isOpenNavBar, toggleIsOpen, title } = useMainContext();

  return (
    <header className="bg-[#2c2e31] text-white relative h-20 z-0">
      <div className="flex">
        {isOpenNavBar ? (
          <button
            className="z-10 h-full absolute flex items-center left-14"
            onClick={toggleIsOpen}
          >
            <FaArrowLeft className="text-4xl hover:bg-[#484b50] rounded-md p-1 transition" />
          </button>
        ) : (
          <button
            className="z-10 h-full absolute flex items-center left-14"
            onClick={toggleIsOpen}
          >
              <MdOutlineMenu className="text-4xl hover:bg-[#484b50] rounded-md p-1 transition" />
          </button>
        )}

        <div className="w-full h-full flex justify-center absolute z-0">
          <h1 className="text-3xl font-bold flex items-center text-center">{ title }</h1>
        </div>
      </div>
      <div className="p-16 bg-[#2c2e31] shadow-2xl"></div>
    </header>
  )
}