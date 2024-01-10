'use client'

import { useMainContext } from "@/hooks/useMainContext";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";

export default function NavBar() {
  const { isOpenNavBar } = useMainContext();

  return (
    <nav className={`bg-[#2c2e31] p-6 fixed h-full z-10  ${!isOpenNavBar && 'invisible'}`}>
      <div className="flex flex-col h-full pt-8">

        <div className="p-2" >
          <ul className="text-[22px] font-bold text-white grid gap-1" >
            <li>
              <Link href="/" className="flex items-center grip gap-2 hover:bg-[#484b50] rounded-md p-2 transition">
                <AiFillHome className="mb-1" />
                <span className="text-xl">Pagina Inicial</span>
              </Link>
            </li>
  
            <li>
              <Link href="/search" className="flex items-center grip gap-2 hover:bg-[#484b50] rounded-md p-2 transition">
                <AiOutlineSearch className="mb-1" />
                <span className="text-xl">Procurar</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}