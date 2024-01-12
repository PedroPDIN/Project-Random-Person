import { IUserData, IDataResponse, IInfoResponse } from "@/interfaces/IDataUser";

const structureData = (data: IDataResponse[]) => {
  const newData = data.map((person) => ({
    gender: person.gender,
    name: `${person.name.first} ${person.name.last}`,
    street: person.location.street,
    city: person.location.city,
    state: person.location.state,
    country: person.location.country,
    coordinates: person.location.coordinates,
    email: person.email,
    dob: person.dob,
    phone: person.phone,
    cell: person.cell,
    picture: person.picture,
  }));

  return newData;
}

export const getPersonInitial = async (): Promise<IUserData[]> => { 
  const response = await fetch('https://randomuser.me/api/?results=18');
  const dataApi = await response.json();
  const dataResults: IDataResponse[] = dataApi.results;
  const structuredData = structureData(dataResults);
  return structuredData;
}

export const getUsersList = async (page: number, limit: number): Promise<IUserData[]> => {
  const responseInicial = await fetch(`https://randomuser.me/api/?page=1&results=${limit}`)
  const dataApi = await responseInicial.json();
  const dataUser: IDataResponse[] = dataApi.results;
  const dataInfo: IInfoResponse = dataApi.info;

  if (page === 1) {
    const structuredData = structureData(dataUser);
    return structuredData
  };
  
  const responseDataSeed = await fetch(`https://randomuser.me/api/?page=${page}&results=${limit}&seed=${dataInfo.seed}`);
  const dataApiSeed = await responseDataSeed.json();
  const dataUserSeed: IDataResponse[] = dataApiSeed.results;
  const structuredData = structureData(dataUserSeed);
  return structuredData;
}
