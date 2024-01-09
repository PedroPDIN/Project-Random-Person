import { getPersonInitial } from "@/services/api";
import { Slider } from "@/components/Slider";
import { ProfilesUsers } from "@/components/ProfilesUsers";
import { FaArrowRight } from "react-icons/fa";

export default async function Home() {
  const personList = await getPersonInitial();

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="flex flex-col shadow-md mt-32">
        <Slider data={personList} />
      </div>

      <div className="flex flex-col items-center justify-center gap-6 p-6 bg-white shadow-sm mt-24 border-solid border-[1px] border-[rgba(0,0,0,.25)] rounded-sm">
        <ProfilesUsers data={personList} limit={3} />
        <ProfilesUsers data={personList} limit={3} positionInitial={4} positionEnd={6} />

        <span className="flex items-center justify-center text-[14px] font-bold gap-1 bg-[rgba(0,0,0,.25)] py-1 px-2 rounded-md shadow-md hover:text-[#4e5157] cursor-pointer">
          Ver mais
          <FaArrowRight />
        </span>
      </div>
    </main>
  )
}
