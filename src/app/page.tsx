import { getPersonInitial } from "@/services/api/randomUser.api";
import { Slider } from "@/components/Slider";
import { ProfilesUsers } from "@/components/ProfilesUsers";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default async function Home() {
  const personList = await getPersonInitial();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col shadow-md mt-32 w-full">
        <Slider data={personList} />
      </div>

      <div className="flex flex-col items-center justify-center gap-6 p-8 bg-white shadow-sm mt-24 border-solid border-[1px] border-[rgba(0,0,0,.25)] rounded-sm">
        <ProfilesUsers data={personList} limit={3} valueColumns={3} />
        <ProfilesUsers
          data={personList}
          limit={3}
          positionInitial={4}
          positionEnd={6}
          valueColumns={3}
        />

        <Link
          href="/users"
          className="flex items-center justify-center text-[14px] text-white font-bold gap-1 bg-[#2c2e31] py-1 px-2 rounded-md shadow-md hover:bg-[#6e6e6e] cursor-pointer"
        >
          Ver mais
          <FaArrowRight />
        </Link>
      </div>
    </div>
  )
}
