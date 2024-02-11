import Image from "next/image";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiCellphoneFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { PiGenderFemaleBold, PiGenderMaleBold } from "react-icons/pi";

interface Props {
  picture: string;
  name: string;
  gender: string;
  age: number;
  phone: string;
  cell: string;
  email: string;
}

export default function InfoUser({ picture, name, gender, age, phone, cell, email }: Props) {
  return (
    <div className="flex justify-around items-center bg-white border-solid border-2 border-[rgba(0,0,0,.25)] rounded-md shadow-lg px-4 py-12 dark:bg-[#2c2e31] transition ease-out">
      <div className="flex flex-col justify-center">
        <Image
          src={ picture }
          alt={`${name} profile`}
          width={190}
          height={190}
          className="rounded-full p-1 border-solid border-2 border-[rgba(0,0,0,.25)] z-10 bg-white"
        />

        <p className="flex flex-col text-center font-bold text-xl">
          <span className="text-[#999]">Olá, meu nome é</span>
          {name}
        </p>
      </div>

      <div className="border-separate border-2 border-[rgba(0,0,0,.25)] h-[200px] rounded-full dark:border-white"></div>

      <div className="grid gap-3">
        <div className="grid gap-1">
          <h3 className="pb-1 font-bold">Sobre</h3>
          <span className="flex items-center font-bold">
            {
              gender === 'female' ?
                <PiGenderFemaleBold className="text-xl" /> :
                <PiGenderMaleBold className="text-xl" />
            }
            Gênero:
            <span className="font-normal capitalize pl-2">{gender}</span>
          </span>

          <span className="flex items-center font-bold">
            <IoPerson className="text-xl" />Idade:
            <span className="font-normal pl-2">{age}</span>
          </span>
        </div>

        <hr />

        <div className="grid gap-1">
          <h3 className="pb-1 font-bold">Contato</h3>
          <span className="flex items-center font-bold">
            <BsFillTelephoneFill className="text-xl" /> Telefone:
            <span className="font-normal pl-2">{phone}</span>
          </span>

          <span className="flex items-center font-bold">
            <RiCellphoneFill className="text-xl" /> Celular:
            <span className="font-normal pl-2">{cell}</span>
          </span>

          <span className="flex items-center font-bold">
            <MdEmail className="text-xl" /> Email:
            <span className="font-normal pl-2">{email}</span>
          </span>
        </div>
      </div>
    </div>
  )
}