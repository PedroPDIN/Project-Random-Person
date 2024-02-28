import { Suspense } from "react";
import UsersLoading from "./loading";

export default function UsersLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<UsersLoading />}>
      {children}
    </Suspense>
  )
}