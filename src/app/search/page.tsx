import { getSearchUser } from "@/services/api/randomUser.api";
import { ProfilesUsers } from "@/components/ProfilesUsers";
import nationalitiesList from "@/utils/nationalities";

export default async function Search({
  searchParams
}: {
    searchParams: {
      nat: string, gender: string, results: string
    }
}) {
  const { data, page, seed } = await getSearchUser(searchParams.results, searchParams.nat, searchParams.gender);
  const genderUser: string = searchParams.gender === "female" ? "Feminino" : "Masculino";
  const nationalityUser: string = nationalitiesList
    .find((natUser) => natUser.abbreviated === searchParams.nat)?.name as string;

  return (
    <main className="mt-24 pb-0 flex flex-col items-center justify-center">
      <div className="ml-0 w-[70%] mb-8">
        <p className="font-normal text-[13px]">
          <span className="font-bold pr-1 text-[#83ba43]">Resultado da pequisa:</span>
          {`Gênero ${genderUser} - Nacionalidade ${nationalityUser} - Quantidade de usuários ${searchParams.results}.`}
        </p>
      </div>

      <hr />

      <div className="p-8 bg-white shadow-sm border-solid border-[1px] border-[rgba(0,0,0,.25)] rounded-sm">
        <ProfilesUsers
          data={data}
          page={page as number}
          limit={+searchParams.results}
          seed={seed as string}
          valueColumns={4}
          isSearch={true}
          nat={searchParams.nat}
          gender={searchParams.gender}
        />
      </div>
    </main>
  )
}
