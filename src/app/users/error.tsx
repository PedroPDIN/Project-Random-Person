'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Error({
  error
}: {
  error: Error & { digest?: string }
}) {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="dark:bg-bgDarkMode h-[100vh] w-[100vw] flex justify-center items-center flex-col">
      <h2 className="text-2xl pb-4">Página não encontrada!</h2>
      <button
        onClick={() => router.push("/")}
        className="text-xl px-2 py-1 bg-gray-200 hover:bg-gray-400 hover:text-white dark:bg-colorSecondary dark:hover:text-black rounded-md shadow-md"
      >
        Início
      </button>
    </div>
  )
};
