import { IDataPersonResult, IDataResponse } from "@/interfaces/IDataPerson"

export const getPersonInitial = async (): Promise<IDataPersonResult[]> => { 
  const response = await fetch('https://randomuser.me/api/?results=18');
  const dataApi = await response.json();
  const dataResults: IDataResponse[] = dataApi.results;

  const newData = dataResults.map((person) => ({
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
  }))

  return newData;
}
