import { IBarberia } from "@/interfaces/IBarberia";
import BarberCard from "./BarberCard";

const BarberiasList = ({ barberias }: { barberias: IBarberia[] }) => {
  if (barberias.length === 0) {
    return (
      <div className="flex justify-center items-center h-[75vh] mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-400 ">
          No hay barberias disponibles
        </h1>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap gap-8">
        {barberias !== undefined &&
          barberias.map((barberia: IBarberia) => (
            <BarberCard key={barberia.id} barberia={barberia} />
          ))}
      </div>
    </div>
  );
};

export default BarberiasList;
