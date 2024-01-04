import { MdOutlineMenu } from "react-icons/md";

export default function Header() {
  return (
    <header className="bg-[#2c2e31] text-white relative h-20">
      <div className="flex">
        <div className="z-10 h-full absolute flex items-center left-14" >
          <MdOutlineMenu className="text-5xl" />
        </div>

        <div className="w-full h-full flex justify-center absolute z-0">
          <h1 className="text-3xl font-bold flex items-center text-center">Random Users</h1>
        </div>
      </div>
      <div className="p-14 bg-[#2c2e31]"></div>
    </header>
  )
}