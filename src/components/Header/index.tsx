'use client'

import dynamic from "next/dynamic";
import { MdOutlineMenu } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { useMainContext } from "@/hooks/useMainContext";

const ToggleNoSSR = dynamic(() => import('@/components/Toggle'), { ssr: false });

export default function Header() {
  const { isOpenNavBar, toggleIsOpen, title } = useMainContext();

  return (
    <header className="bg-colorSecondary text-white relative h-20 max-micro-screen:h-40 max-micro-screen:shadow-lg z-50">
      <div className="flex justify-between items-center pt-8 px-20 max-mobile:px-12 max-micro-screen:px-6">
        <div>
          {isOpenNavBar ? (
            <button
              className="h-full flex items-center"
              onClick={toggleIsOpen}
            >
              <FaArrowLeft className="text-4xl hover:bg-hoverColorMenu rounded-md p-1 transition" />
            </button>
          ) : (
            <button
              className="h-full flex items-center"
              onClick={toggleIsOpen}
            >
                <MdOutlineMenu className="text-4xl hover:bg-hoverColorMenu rounded-md p-1 transition" />
            </button>
          )}
        </div>

        <div className="h-full z-0">
          <h1 className="text-3xl font-bold flex items-center text-center max-micro-screen:text-xl">{ title }</h1>
        </div>

        <div className="text-4xl max-mobile:text-3xl">
          <ToggleNoSSR />
        </div>
      </div>

      <div className="w-full py-8 bg-colorSecondary shadow-2xl max-micro-screen:py-0"></div>
    </header>
  )
}
