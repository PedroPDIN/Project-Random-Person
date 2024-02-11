import { getFilterUserApi } from "@/services/api/randomUser.api";
import MapUser from "@/components/MapUser";
import InfoUser from "@/components/InfoUser";
import LocationUser from "@/components/LocationUser";

interface ContextParams {
  params: {
    name: string,
  },
  searchParams: {
    limit: string,
    page: string;
    seed: string,
  },
};

export default async function User(context: ContextParams) {
  const { params, searchParams } = context;
  const { page, limit, seed } = searchParams;
  const { name } = params;
  const  dataUser = await getFilterUserApi(name, page, limit, seed);

  const position = {
    latitude: dataUser.coordinates.latitude,
    longitude: dataUser.coordinates.longitude,
  };

  return (
    <main className="pt-28 flex flex-col items-center justify-center dark:bg-[#1b1f23] transition ease-out">
      <div className="w-[50%] mobile:max-tablet:w-[80%] micro-screen:max-mobile:w-[80%] max-micro-screen:w-[80%] mb-6">
        <InfoUser
          picture={dataUser.picture.large}
          name={dataUser.name}
          gender={dataUser.gender}
          age={dataUser.dob.age}
          phone={dataUser.phone}
          cell={dataUser.cell}
          email={dataUser.email}
        />
      </div>

      <div className="w-[50%] mb-6 mobile:max-tablet:w-[80%] micro-screen:max-mobile:w-[80%] max-micro-screen:w-[80%]">
        <LocationUser
          country={dataUser.country}
          state={dataUser.state}
          city={dataUser.city}
        />
      </div>
      
      <div className="w-[50%] mobile:max-tablet:w-[80%] micro-screen:max-mobile:w-[80%] max-micro-screen:w-[80%] h-[24rem] rounded-md overflow-hidden bg-white border-solid border-2 border-[rgba(0,0,0,.25)] shadow-lg mb-2">
          <MapUser
          position={position}
          street={dataUser.street}
          country={dataUser.country}
          state={dataUser.state}
          city={dataUser.city}
          />
      </div>

      <div className="w-[50%] mobile:max-tablet:w-[80%] micro-screen:max-mobile:w-[80%] max-micro-screen:w-[80%]">
        <span className="text-[13px] flex items-center font-bold whitespace-normal">
          &#128680; &#128680; As informações de localização são randômicas, ou seja, aleatórias. Com isso, as coordenadas da localização no mapa são imprevistas e até mesmo descontínuas.
        </span>
      </div>
    </main>
  )
}