import { IDataPersonResult } from "@/interfaces/IDataPerson"
import Image from "next/image";
import "@/styles/Slider.css";

interface Props {
  data: IDataPersonResult[];
}

export function Slider({ data }: Props) {
  return (
    <div
      id="slide-container"
      className="bg-white py-[20px] overflow-hidden whitespace-nowrap relative"
    >
      {data.map((person) => (
        <div
          key={person.name}
          id="slides-person"
          className="hover:bg-slate-300 p-1 rounded-md cursor-pointer inline-block mx-4"
        >
          <Image
            src={person.picture.large}
            alt="thumbnail person"
            width={90}
            height={90}
            className="rounded-full"
          />
        </div>
      ))}
      {data.map((person) => (
        <div
          key={person.name}
          id="slides-person"
          className="hover:bg-slate-300 p-1 rounded-md cursor-pointer inline-block mx-4"
        >
          <Image
            src={person.picture.large}
            alt="thumbnail person"
            width={90}
            height={90}
            className="rounded-full"
          />
        </div>
      ))}
    </div>
  )
}