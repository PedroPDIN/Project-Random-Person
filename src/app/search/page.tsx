import { getSearchUser } from "@/services/api/randomUser.api";
import { ProfilesUsers } from "@/components/ProfilesUsersPagination";

export default async function Search({
  searchParams
}: { searchParams: { nat: string, gender: string, results: string } }) {
  const { data, page, seed } = await getSearchUser(+searchParams.results, searchParams.nat, searchParams.gender);
  // console.log(data)

  return (
    <main className="mt-28">
      <div>
        <ProfilesUsers
          data={data}
          page={page as number}
          limit={+searchParams.results}
          seed={seed as string}
          valueColumns={4}
        />
      </div>
    </main>
  )
}
