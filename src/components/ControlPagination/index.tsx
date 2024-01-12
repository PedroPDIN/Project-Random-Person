'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PagePagination() {
  const [page, setPage] = useState<string>(localStorage.getItem("page") || "1");
  const router = useRouter();

  useEffect(() => { // necessário usar useEffect para evitar erro de pilhagem.
    router.push(`/users/?page=${page}`)
  }, [page]);
  
  const handleChange = (e: React.ChangeEvent<unknown>, value: number): void => {
    localStorage.setItem("page", value.toString());
    const currentPage: string = localStorage.getItem("page") as string;
    setPage(currentPage);
  };

  return (
    <Stack spacing={4} className="flex items-center justify-center pt-8">
      <Pagination
        count={10}
        page={+page}
        onChange={handleChange}
      />
    </Stack>
  )
}
