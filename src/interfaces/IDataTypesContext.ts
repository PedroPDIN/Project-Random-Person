export interface IDataType {
  isOpenNavBar: boolean;
  setIsOpenNavBar: React.Dispatch<React.SetStateAction<boolean>>,
  toggleIsOpen: () => void;
  title: string;
  themeGlobal: string;
  setThemeGlobal: React.Dispatch<React.SetStateAction<string>>,
}