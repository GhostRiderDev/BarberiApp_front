// import { findBarberiasByCityAndProvince } from "@/services/barberiaService";
import AutoCompleteAdress from "@/components/AutoCompleteAdress";
import BarberiasList from "@/components/BarberiasList";
import MapUbications from "@/components/MapUbications";
import { IBarberiasStore, useBarberiasStore } from "@/store/barberiasStore";

const BarberiasView = () => {
  const barberias = useBarberiasStore(
    (state: IBarberiasStore) => state.barberias
  );

  return (
    <div className="p-2">
      <h1>Barberias</h1>
      <AutoCompleteAdress />
      <div className="grid grid-cols-2 gap-4 relative mt-6">
        <BarberiasList barberias={barberias} />
        <div className="h-screen flex justify-center  mt-6 sticky top-6 ">
          <MapUbications />
        </div>
      </div>
    </div>
  );
};

export default BarberiasView;
