'use client'

import { useMainContext } from "@/hooks/useMainContext";
import { AiFillHome } from "react-icons/ai";
import { FaDiagramPredecessor } from "react-icons/fa6";
import Link from "next/link";

export default function NavBar() {
  const { isOpenNavBar, toggleIsOpen } = useMainContext();
  
  const handleClick = (): void => {
    localStorage.removeItem("page");
    toggleIsOpen();
  };

  return (
    <nav className={`bg-[#2c2e31] p-6 absolute h-[100vh] z-40  ${!isOpenNavBar && 'invisible'}`}>
      <div className="flex flex-col h-full pt-20 tablet:max-laptop:pt-16 mobile:max-tablet:pt-14 micro-screen:max-mobile:pt-10 max-micro-screen:pt-2">
        <div className="p-2" >
          <ul className="text-[20px] font-bold text-white grid" >
            <li>
              <Link
                href="/"
                onClick={handleClick}
                className="flex items-center grip gap-2 hover:bg-[#484b50] rounded-md p-2 transition">
                <AiFillHome className="mb-1" />
                <span className="text-[18px]">
                  Pagina Inicial
                </span>
              </Link>
            </li>
  
            <li>
              <Link
                href="https://randomuser.me/documentation"
                className="flex items-center grip gap-2 hover:bg-[#484b50] rounded-md p-2 transition w-full"
              >
                <FaDiagramPredecessor className="mb-1" />
                <span className="text-[18px]">
                  Sobre <span className="text-[#83ba43]">API</span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
