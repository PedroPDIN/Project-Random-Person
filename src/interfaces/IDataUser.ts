export interface IDataResponse {
  gender: string;
  name: {
    first: string,
    last: string,
  };
  location: {
    street: {
      number: number,
      name: string,
    },
    city: string,
    state: string,
    country: string,
    coordinates: {
      latitude: string,
      longitude: string,
    },
  };
  email: string,
  dob: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  picture: {
    large: string,
    medium: string,
    thumbnail: string,
  }
};

export interface IUserData {
  gender: string;
  name: string;
  street: { number: number, name: string };
  city: string;
  state: string;
  country: string;
  coordinates: { latitude: string,longitude: string }
  email: string;
  dob: { date: string, age: number };
  phone: string;
  cell: string;
  picture: { large: string, medium: string, thumbnail: string};
};

export interface IInfoResponse {
  seed: string;
  results: string;
  page: number;
};
