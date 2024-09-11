import Services from "../components/Services";
import CardBarber from "../components/CardBarber";
import NavbarLanding from "../components/NavbarLanding";
import SearchBarber from "../components/search-barber/SearchBarber";
import Abaout from "@/components/Abaout";
import { createContext } from "react";

export const HomeContext = createContext({
  barberias: [],
});

const Home: React.FC = () => {
  return (
    <>
      <div className="w-full xl:w-full ">
        <NavbarLanding />
        <div className="bg-home2 gap-20 flex flex-col justify-center items-center w-full h-[50rem]">
          <HomeContext.Provider value={{ barberias: [] }}>
            <SearchBarber />
          </HomeContext.Provider>
          <div className="w-full h-[350px] justify-center lg:justify-start md:max-w-[1400px] md:mx-auto">
            <h1 className="mx-3 text-4xl font-bold text-center text-white md:text-start lg:mx-10">
              Recomendaciones
            </h1>
            <CardBarber />
          </div>
        </div>
        <Abaout />
        <Services />
      </div>
    </>
  );
};

export default Home;
