'use client'

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface Props {
  countPage: number;
  nat: string;
  gender: string;
  resultsValue: string;
}

export default function ControlPaginationSearch({countPage, nat, gender, resultsValue}: Props) {
  const [pageSearch, setPageSearch] = useState<string>("1");
  const router = useRouter();
  
  useEffect(() => { // necessário usar useEffect para evitar erro de pilhagem.
    if (typeof window !== 'undefined') { // verifica se window está definido (indicando que está em um ambiente de navegador)
      const savedPage = localStorage.getItem("page-search");
    setPageSearch(savedPage || "1");
  }
  router.push(`/search/?nat=${nat}&gender=${gender}&results=${resultsValue}&page=${pageSearch}`)
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [pageSearch]);

  const handleChange = (e: React.ChangeEvent<unknown>, value: number): void => {
    localStorage.setItem("reset-page-search", "0");
    localStorage.setItem("page-search", value.toString());
    const currentPage: string = localStorage.getItem("page-search") as string;
    setPageSearch(currentPage);
  };

  const isResetPage: boolean = localStorage.getItem("reset-page-search") !== "0";
  
  return (
    <Stack spacing={4} className="flex items-center justify-center pt-8">
      <Pagination
        count={countPage}
        page={!isResetPage ? +pageSearch : 1}
        onChange={handleChange}
      />
    </Stack>
  )
}