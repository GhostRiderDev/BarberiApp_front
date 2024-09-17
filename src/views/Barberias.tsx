import AutoCompleteAdress from "@/components/AutoCompleteAdress";
import BarberiasList from "@/components/BarberiasList";
import MapUbications from "@/components/MapUbications";
import NavbarLanding from "@/components/NavbarLanding";
import { useAddress } from "@/hooks/useAddress";
import { useBarberias } from "@/hooks/useBarberias";

const BarberiasView = () => {
  const address = useAddress();
  const barberias = useBarberias();

  return (
    <div className="p-1 md:p-2  h-full">
      <div className="z-0 hidden md:block">
        <NavbarLanding type="opacity" theme="light" />
      </div>
      <div className=" w-full md:w-1/3 mx-auto z-50 relative flex items-center justify-center mt-2">
        <AutoCompleteAdress />
      </div>
      {address.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4 relative mt-6 h-full">
          <div className="order-2 md:order-1">
            <BarberiasList barberias={barberias} />
          </div>
          <div className="h-[200px] md:min-h-screen flex justify-center md:sticky md:top-6 order-1 md:order-2">
            <MapUbications />
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-[80vh] mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-400 ">
            Por favor, ingrese una dirección
          </h1>
        </div>
      )}
    </div>
  );
};

export default BarberiasView;
