export interface IDataType {
  isOpenNavBar: boolean;
  setIsOpenNavBar: React.Dispatch<React.SetStateAction<boolean>>,
  toggleIsOpen: () => void;
  title: string;
  nat: string;
  setNat: React.Dispatch<React.SetStateAction<string>>;
  gender: 'female' | 'male' | '';
  setGender: React.Dispatch<React.SetStateAction<'female' | 'male' | ''>>
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
}