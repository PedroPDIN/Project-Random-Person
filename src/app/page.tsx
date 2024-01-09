import Image from "next/image";
import { getPersonInitial } from "@/services/api";
import { Slider } from "@/components/Slider";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";




export default async function Home() {
  const personList = await getPersonInitial();

  return (
    <main className="flex flex-col items-center justify-center h-[100vh]">
      <div className="flex flex-col shadow-inner mt-[-30px] mb-20">
        <Slider data={personList} />
      </div>

      <div className="flex items-center justify-center gap-4 border-solid border-4 border-lime-500">
        {personList.slice(0, 3).map((person) => (
          <div
            key={person.name}
            className="bg-white shadow-inner rounded-md flex flex-col items-center px-4 pb-4 space-y-4 cursor-pointer w-[250px] relative overflow-hidden transition ease-out border-solid border-4 border-red-500"
          >
            <div className="bg-[#2c2e31] w-full h-[32%] absolute z-0 pt-4"></div>

            <Image
              src={person.picture.large}
              alt="profile-person"
              width={140}
              height={140}
              className="rounded-full p-1 border-solid border-2 border-[rgba(0,0,0,.25)] z-10 bg-white"

            />

            <h2 className="font-bold">{person.name}</h2>

            <div className="flex text-3xl gap-4 text-[#2c2e31] " >
              <MdEmail
                data-tooltip-target="tooltip-default"
                className="hover:text-[#4e5157] transition ease-out"
              />
              <FaMapLocationDot arial-label={`${person.city} - ${person.country}`} className="hover:text-[#4e5157] transition ease-out" />
              <BsFillTelephoneFill arial-label={person.cell} className="hover:text-[#4e5157] transition ease-out" />
            </div>
          </div>
        ))}

      </div>
    </main>
  )
}
