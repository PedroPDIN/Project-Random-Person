'use client'

import { useMainContext } from "@/hooks/useMainContext"
import Link from "next/link";
import Image from "next/image";

interface Props {
  avatarUser: string;
  urlUser: string;
}

export function Footer({ avatarUser, urlUser }: Props) {
  const { title } = useMainContext();

  return (
    <div className="bg-[#2c2e31] h-[18rem] absolute bottom-0 w-full">
      <h1 className="text-center text-4xl max-mobile:text-2xl font-bold text-white py-8">{title}</h1>

      <div className="flex justify-around">
        <div className="flex flex-col gap-1">
          <h2 className="text-white text-center">Developed</h2>
          <Link href={ urlUser }>
            <Image
              src={avatarUser}
              alt="profile-user-github"
              width={80}
              height={80}
              className="rounded-full grayscale hover:grayscale-0 transition-all ease-out duration-2000"
            />
          </Link>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-white">Copyright Notice</h3>
          <p className="text-[12px] text-[#a3a3a5] font-bold w-[260px] whitespace-normal">
            Os dados disponíveis nesta aplicação são fornecidos pela API <a href="https://randomuser.me/" className="text-[#83ba43]">randomuser.me</a> e estão sujeitos aos termos e condições da API. Esta API é pública, e o uso dos dados é permitido.
          </p>
        </div>
      </div>
    </div>
  )
}