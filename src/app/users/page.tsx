import { getUsersList } from "@/services/api/randomUser.api";
import { ProfilesUsers } from "@/components/ProfilesUsers";
import ControlPagination from "@/components/ControlPagination";

export default async function Users({ searchParams }: { searchParams: { page: string } }) {
  const { page } = searchParams;
  const LIMIT_LIST_USERS: number = 16;
  const usersList = await getUsersList(+page, LIMIT_LIST_USERS);

  return (
    <main className="flex items-center justify-center dark:bg-bgDarkMode transition ease-out w-full">
      <section className="p-8 max-micro-screen:p-2 max-micro-screen:flex max-micro-screen:flex-col max-micro-screen:items-center bg-white shadow-sm mt-32 border-solid border-[1px] border-borderColorPrimary rounded-sm dark:bg-colorSecondary">
          <ProfilesUsers
            data={usersList.data}
            page={+page}
            seed={ usersList.seed as string}
            limit={LIMIT_LIST_USERS}
            valueColumns={4}
          />
          <ControlPagination />
      </section>
    </main>
  )
};
