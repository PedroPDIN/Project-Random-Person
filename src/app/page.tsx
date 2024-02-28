import { getPersonInitial } from "@/services/api/randomUser.api";
import { Slider } from "@/components/Slider";
import { ProfilesUsers } from "@/components/ProfilesUsers";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default async function Home() {
  const LIMIT_USER = 18;
  const { data, page, seed, limit } = await getPersonInitial(LIMIT_USER);

  return (
    <main className="flex flex-col items-center justify-center dark:bg-bgDarkMode transition ease-out">
      <article className="flex flex-col shadow-md mt-32 w-full">
        <Slider data={data} />
      </article>

      <section className="flex flex-col items-center justify-center gap-6 p-8 max-mobile:p-4 bg-white dark:bg-bgDarkMode shadow-md mt-24 border-solid border-[1px] border-borderColorPrimary rounded-sm">
        <ProfilesUsers
          data={data.slice(0, 6)}
          page={page as number}
          seed={seed as string}
          limit={limit as number}
          valueColumns={3}
        />

        <Link
          href="/users"
          className="flex items-center justify-center text-[14px] text-white font-bold gap-1 bg-colorSecondary dark:bg-bgDarkMode py-1 px-2 rounded-md shadow-md hover:bg-hoverColorPrimary cursor-pointer"
        >
          Ver mais
          <FaArrowRight />
        </Link>
      </section>
    </main>
  )
}
