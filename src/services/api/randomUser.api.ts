import { IUserData, IDataResponse, IInfoResponse } from "@/interfaces/IDataUser";

type UsersList = {
  data: IUserData[],
  page?: number,
  seed?: string,
  limit?: number,
}

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

export const getPersonInitial = async (limitUser: number): Promise<UsersList> => { 
  const response = await fetch(`https://randomuser.me/api/?results=${limitUser}`);
  const dataApi = await response.json();
  const dataInfo: IInfoResponse = dataApi.info;
  const dataResults: IDataResponse[] = dataApi.results;
  const structuredData = structureData(dataResults);
  return {
    data: structuredData,
    page: dataInfo.page,
    seed: dataInfo.seed,
    limit: limitUser,
  };
}

export const getUsersList = async (page: number, limit: number): Promise<UsersList> => {
  const responseInicial = await fetch(`https://randomuser.me/api/?page=1&results=${limit}`)
  const dataApi = await responseInicial.json();
  const dataUser: IDataResponse[] = dataApi.results;
  const dataInfo: IInfoResponse = dataApi.info;

  if (page === 1) {
    const structuredData = structureData(dataUser);
    return { data: structuredData, seed: dataInfo.seed }
  };
  
  const responseDataSeed = await fetch(`https://randomuser.me/api/?page=${page}&results=${limit}&seed=${dataInfo.seed}`);
  
  const dataApiSeed = await responseDataSeed.json();
  const dataUserSeed: IDataResponse[] = dataApiSeed.results;
  const structuredData = structureData(dataUserSeed);
  return { data: structuredData, seed: dataInfo.seed }
}


export const getFilterUserApi = async (
  name: string,
  page: string,
  limit: string,
  seed: string): Promise<IUserData> => {
  const responseAllList = await fetch(`https://randomuser.me/api/?page=${page}&results=${limit}&seed=${seed}`);
  const dataAllList = await responseAllList.json();
  const dataUsers: IDataResponse[] = dataAllList.results;
  const structuredData = structureData(dataUsers);

  const user = structuredData.find(
    (user) => user.name.split(" ").join("-").toLowerCase() === decodeURIComponent(name).toLowerCase()
  );
  
  return user as IUserData;
}

export const getSearchUser = async (limit: string, nat: string, gender: string): Promise<UsersList> => {
  const responseSearchList = await fetch(`https://randomuser.me/api/?results=${limit}&nat=${nat}&gender=${gender}`);
  const dataSearch = await responseSearchList.json();
  const dataSearchUser: IDataResponse[] = dataSearch.results;
  const dataSearchInfo: IInfoResponse = dataSearch.info;
  const structuredData = structureData(dataSearchUser);
  return { data: structuredData, page: dataSearchInfo.page, seed: dataSearchInfo.seed };
}
