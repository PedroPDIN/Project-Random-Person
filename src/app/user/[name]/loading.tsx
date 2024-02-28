export default function UserLoading() {
  return (
    <div className="bg-gray-200 dark:bg-bgDarkMode w-full h-full flex flex-col items-center justify-center pt-28 transition ease-out">
      <div className="bg-gray-400 dark:bg-colorSecondary animate-pulse border-solid border-[1px] border-borderColorPrimary rounded-md shadow-md w-[50%] max-large-screen:w-[60%] tablet:max-laptop:w-[70%] mobile:max-tablet:w-[80%] micro-screen:max-mobile:w-[80%] max-micro-screen:w-[80%] mb-6 h-[332px]"></div>
      <div className="bg-gray-400 dark:bg-colorSecondary animate-pulse border-solid border-[1px] border-borderColorPrimary rounded-md shadow-md w-[50%] max-large-screen:w-[60%] tablet:max-laptop:w-[70%] mobile:max-tablet:w-[80%] micro-screen:max-mobile:w-[80%] max-micro-screen:w-[80%] mb-6 h-[144px]"></div>
      <div className="bg-gray-400 dark:bg-colorSecondary animate-pulse border-solid border-[1px] border-borderColorPrimary rounded-md shadow-md w-[50%] max-large-screen:w-[60%] tablet:max-laptop:w-[70%] mobile:max-tablet:w-[80%] micro-screen:max-mobile:w-[80%] max-micro-screen:w-[80%] mb-6 h-[380px]"></div>
      <article className="w-[50%] max-large-screen:w-[60%] tablet:max-laptop:w-[70%] mobile:max-tablet:w-[80%] micro-screen:max-mobile:w-[80%] max-micro-screen:w-[80%]">
        <span className="text-[13px] flex items-center font-bold whitespace-normal">
          &#128680; &#128680; As informações de localização são randômicas, ou seja, aleatórias. Com isso, as coordenadas da localização no mapa são imprevistas e até mesmo descontínuas.
        </span>
      </article>
    </div>
  )
};
