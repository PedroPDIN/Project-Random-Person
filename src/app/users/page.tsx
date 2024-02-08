import { getUsersList } from "@/services/api/randomUser.api";
import { ProfilesUsers } from "@/components/ProfilesUsersPagination";
import ControlPagination from "@/components/ControlPagination";

export default async function Users({ searchParams }: { searchParams: { page: string } }) {
  const { page } = searchParams;
  const LIMIT_LIST_USERS: number = 16;
  const usersList = await getUsersList(+page, LIMIT_LIST_USERS);

  return (
    <div className="flex items-center justify-center">
      <div className="p-8 bg-white shadow-sm mt-24 border-solid border-[1px] border-[rgba(0,0,0,.25)] rounded-sm">
        <ProfilesUsers
          data={usersList.data}
          page={+page}
          seed={ usersList.seed as string}
          limit={LIMIT_LIST_USERS}
          valueColumns={4}
        />
        <ControlPagination />
      </div>
    </div>
  )
}