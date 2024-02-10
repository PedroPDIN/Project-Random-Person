'use client'

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMainContext } from "@/hooks/useMainContext";
import { IoMdClose } from "react-icons/io";
import nationalitiesList from "@/utils/nationalities";
import "@/styles/SearchModal.css";

export default function SearchModal() {
  const [amountValue, setAmountValue] = useState<string>("");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [anotherAmount, setAnotherAmount] = useState<boolean>(false);
  const [nat, setNat] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const { isOpenModal, setIsOpenModal, toggleIsOpen } = useMainContext();
  const router = useRouter();

  useEffect(() => {
    setAnotherAmount(customAmount !== "");
  }, [customAmount]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const target = e.target;
    if (target.name === "nationalities") setNat(target.value);
    if (target.name === "gender") setGender(target.value);
  };

  const handleChangeAmount = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>): void => {
    const value: string = e.target.value;

    if (value === "others") {
      setAmountValue("");
      setAnotherAmount(true);
    } else {
      setAmountValue(value);
      setCustomAmount("");
      setAnotherAmount(false);
    }
  };

  const onClickEvent = (): void => {
    const resultsValue = amountValue === "" ? customAmount : amountValue;

    if (+customAmount < 0 || +customAmount > 500) { 
      alert("Valor da quantidade de usuários não é compatível.");
    } else {
      setCustomAmount("");
      setIsOpenModal(false);
      toggleIsOpen();
      router.push(`/search/?nat=${nat}&gender=${gender}&results=${resultsValue}&page=1`);
      localStorage.setItem("reset-page-search", "1")
      localStorage.setItem("page-search", "1")
    };
  };

  return (
    <div
      className={`z-50 fixed bg-[#2c2e31] w-full h-full flex items-center justify-center ${!isOpenModal && "invisible"}`}
      style={{ backgroundColor: "rgba(44, 46, 49, 0.9)" }}
    >
      <div className="bg-white rounded-md flex flex-col p-6 w-[30%] shadow-md">
        <div className="flex items-center justify-between pb-4">
          <h1 className="font-bold text-xl whitespace-nowrap">Selecione as opções a seguir</h1>
          <button
            type="button"
            className="rounded-md hover:bg-[#2c2e31]"
            onClick={() => setIsOpenModal(false)}
          >
            <IoMdClose className="font-bold text-3xl hover:text-white" />
          </button>
        </div>

        <hr />

        <div className="flex flex-col pt-4">
          <label htmlFor="" className="font-bold pb-1">Quantidade de usuários:</label>
          <select
            name="results"
            value={amountValue}
            onChange={handleChangeAmount}
            className="p-1 mb-4 rounded-sm"
          >
            <option value="18" selected>Selecione</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="others">Outro</option>
          </select>

          {anotherAmount && (
            <div className="whitespace-nowrap">
              <label htmlFor="" className="font-bold pb-1 pr-1">Digite a quantidade:</label>
              <input
                type="number"
                placeholder="limite 500"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="remove-arrow p-1 mb-4 w-[40%]"
              />
            </div>
          )}

          <label htmlFor="" className="font-bold pb-1">Nacionalidade: </label>
          <select
            name="nationalities"
            value={nat}
            onChange={handleChange}
            className="p-1 mb-4 rounded-sm"
          >
            <option value="all" selected>Selecione</option>
            {nationalitiesList.map((nationality) => (
              <option key={nationality.name} value={nationality.abbreviated}>
                {nationality.name}
              </option>
            ))}
          </select>

          <label htmlFor="" className="font-bold pb-1">Gênero:</label>
          <select
            name="gender"
            value={gender}
            onChange={handleChange}
            className="p-1 mb-4 rounded-sm"
          >
            <option value="none" selected>Selecione</option>
            <option value="female">Feminino</option>
            <option value="male">Masculino</option>
          </select>
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            onClick={onClickEvent}
            className="text-white bg-[#2c2e31] rounded-md py-1 w-[50%]"
          >
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
}
