// import { findBarberiasByCityAndProvince } from "@/services/barberiaService";
import AutoCompleteAdress from "@/components/AutoCompleteAdress";
import BarberiasList from "@/components/BarberiasList";
import MapUbications from "@/components/MapUbications";
import {
  IBarberiasStore,
  ILocationStore,
  useBarberiasStore,
  useLocationStore,
} from "@/store/barberiasStore";

const BarberiasView = () => {
  const barberias = useBarberiasStore(
    (state: IBarberiasStore) => state.barberias
  );

  const address = useLocationStore(
    (state: ILocationStore) => state.location.address
  );

  return (
    <div className="p-1 md:p-2">
      <div className="w-full md:w-1/3 mx-auto">
        <AutoCompleteAdress />
      </div>
      {address.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4 relative mt-6">
          <div className="order-2 md:order-1">
            <BarberiasList barberias={barberias} />
          </div>
          <div className="h-[200px] md:h-screen flex justify-center md:sticky md:top-6 order-1 md:order-2">
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
