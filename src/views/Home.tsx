import CardBarber from "../components/CardBarber";
import Services from "../components/Services";

const Home = () => {
import CardBarber from "../components/CardBarber";
import NavbarLanding from "../components/NavbarLanding";
import SearchBarber from "../components/search-barber/SearchBarber";

const Home: React.FC = () => {
  return (
    <div className="w-full xl:w-full min-h-[100vh]">
      <div className="bg-home bg-center bg-cover w-full h-[700px]">
        <h1 className="p-4 text-white text-4xl">Recomendaciones</h1>
        <CardBarber />
      </div>
      <Services />
    <div className="w-full xl:w-full h-[100vh]">
      {/* <NavbarLanding /> */}
      <div className="bg-home bg-center gap-20 flex flex-col justify-center items-center bg-cover w-full h-[700px]">
        <SearchBarber />
        <div className="w-full h-[350px] justify-center lg:justify-start">
          <h1 className="lg:mx-10 mx-3 text-white text-4xl  font-bold">Recomendaciones</h1>
          <CardBarber />
        </div>
      </div>
    </div>
  );
};

export default Home;
