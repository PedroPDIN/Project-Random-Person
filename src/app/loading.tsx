export default function HomeLoading() {
  return (
    <div className="flex flex-col pt-32 w-full h-full items-center justify-center bg-white dark:bg-bgDarkMode">
      <div
        className="flex items-center justify-center w-full bg-gray-200 py-[20px] max-mobile:py-1 overflow-hidden whitespace-nowrap relative dark:bg-colorSecondary animate-pulse shadow-md"
      >
        <div className=" flex mx-4 bg-gray-500 w-[80px] h-[80px] rounded-full max-mobile:w-[60px] max-mobile:h-[60px]"></div>
        <div className=" flex mx-4 bg-gray-500 w-[80px] h-[80px] rounded-full max-mobile:w-[60px] max-mobile:h-[60px]"></div>
        <div className=" flex mx-4 bg-gray-500 w-[80px] h-[80px] rounded-full max-mobile:w-[60px] max-mobile:h-[60px]"></div>
        <div className=" flex mx-4 bg-gray-500 w-[80px] h-[80px] rounded-full max-mobile:w-[60px] max-mobile:h-[60px]"></div>
        <div className=" flex mx-4 bg-gray-500 w-[80px] h-[80px] rounded-full max-mobile:w-[60px] max-mobile:h-[60px] max-micro-screen:hidden"></div>
        <div className=" flex mx-4 bg-gray-500 w-[80px] h-[80px] rounded-full max-mobile:w-[60px] max-mobile:h-[60px] micro-screen:max-mobile:hidden max-micro-screen:hidden"></div>
        <div className=" flex mx-4 bg-gray-500 w-[80px] h-[80px] rounded-full max-mobile:w-[60px] max-mobile:h-[60px] mobile:max-tablet:hidden micro-screen:max-mobile:hidden max-micro-screen:hidden"></div>
        <div className=" flex mx-4 bg-gray-500 w-[80px] h-[80px] rounded-full max-mobile:w-[60px] max-mobile:h-[60px] tablet:max-laptop:hidden mobile:max-tablet:hidden micro-screen:max-mobile:hidden max-micro-screen:hidden"></div>
        <div className=" flex mx-4 bg-gray-500 w-[80px] h-[80px] rounded-full max-mobile:w-[60px] max-mobile:h-[60px] tablet:max-laptop:hidden mobile:max-tablet:hidden micro-screen:max-mobile:hidden max-micro-screen:hidden"></div>
        <div className=" flex mx-4 bg-gray-500 w-[80px] h-[80px] rounded-full max-mobile:w-[60px] max-mobile:h-[60px] tablet:max-laptop:hidden mobile:max-tablet:hidden micro-screen:max-mobile:hidden max-micro-screen:hidden"></div>
      </div>

      <div className="bg-gray-200 dark:bg-[#2c2e31] mt-24 animate-pulse border-solid border-[1px] border-borderColorPrimary rounded-sm w-[70%] h-[40rem] shadow-md"></div>
    </div>
  )
};
