import { Suspense } from "react";
import UserLoading from "./loading";

export default function UserLayout({ children }: { children: React.ReactNode}) {
  return (
    <Suspense fallback={<UserLoading />}>
      { children }
    </Suspense>
  )
}