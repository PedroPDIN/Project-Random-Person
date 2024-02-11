'use client'

import { IUserData } from "@/interfaces/IDataUser"
import Image from "next/image";
import { useMainContext } from "@/hooks/useMainContext";
import "@/styles/Slider.css";

interface Props {
  data: IUserData[];
};

export function Slider({ data }: Props) {
  const { themeGlobal } = useMainContext();

  return (
    <div
      id={themeGlobal === "light" ? "slide-container" : "slide-container-dark"}
      className="bg-white py-[20px] max-mobile:py-1 overflow-hidden whitespace-nowrap relative dark:bg-[#2c2e31]"
    >
      {data.map((person) => (
        <div
          key={person.name}
          id="slides-person"
          className="inline-block mx-4"
        >
          <Image
            src={person.picture.large}
            alt="thumbnail person"
            width={90}
            height={90}
            className="rounded-full hover:border-solid hover:border-[1px] hover:border-slate-300 p-1 transition ease-out max-mobile:w-[80px] max-mobile:h-[80px]"
          />
        </div>
      ))}
      {data.map((person) => (
        <div
          key={person.name}
          id="slides-person"
          className="cursor-pointer inline-block mx-4"
        >
          <Image
            src={person.picture.large}
            alt="thumbnail person"
            width={90}
            height={90}
            className="rounded-full hover:border-solid hover:border-[1px] hover:border-slate-300 p-1 transition ease-out"
          />
        </div>
      ))}
    </div>
  )
}