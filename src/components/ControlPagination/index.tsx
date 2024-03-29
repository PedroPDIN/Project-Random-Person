'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useMainContext } from '@/hooks/useMainContext';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "@/styles/PaginationColor.css";

export default function ControlPagination() {
  const [page, setPage] = useState<string>("1");
  const { themeGlobal } = useMainContext();
  const router = useRouter();

  useEffect(() => { // necessário usar useEffect para evitar erro de pilhagem.
    if (typeof window !== 'undefined') { // verifica se window está definido (indicando que está em um ambiente de navegador)
      const savedPage = localStorage.getItem("page")
      setPage(savedPage || "1");
    }
    router.push(`/users/?page=${page}`)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  
  const handleChange = (e: React.ChangeEvent<unknown>, value: number): void => {
    localStorage.setItem("page", value.toString());
    const currentPage: string = localStorage.getItem("page") as string;
    setPage(currentPage);
  };

  return (
    <Stack spacing={4} className="flex items-center justify-center pt-8 text-white">
      <Pagination
        count={10}
        page={+page}
        onChange={handleChange}
        color="primary"
        className={`${themeGlobal === "dark" && "button-color-mode-dark"}`}
      />
    </Stack>
  )
}
