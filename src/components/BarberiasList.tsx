import { IBarberia } from "@/interfaces/IBarberia";
import { FaStar } from "react-icons/fa6";

const BarberiasList = ({ barberias }: { barberias: IBarberia[] }) => {
  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {barberias !== undefined &&
          barberias.map((barberia: IBarberia) => (
            <li key={barberia.id}>
              <div className="bg-gray-100 bg-opacity-90 rounded-lg">
                <header>
                  <img
                    src={barberia.banner_url}
                    alt={barberia.name}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <h2 className="text-xl font-bold">{barberia.name}</h2>
                </header>
                <div className="flex items-center gap-2">
                  <p className="text-yellow-400 font-bold">4.5</p>
                  <ul className="flex">
                    <li>
                      <FaStar className="text-yellow-400" />
                    </li>
                    <li>
                      <FaStar className="text-yellow-400" />
                    </li>
                    <li>
                      <FaStar className="text-yellow-400" />
                    </li>
                    <li>
                      <FaStar className="text-yellow-400" />
                    </li>
                    <li>
                      <FaStar className="text-yellow-400" />
                    </li>
                  </ul>
                  <p >(100)</p>
                </div>
                <p className="text-gray-300 font-light">
                  {barberia.departamento}, {barberia.ciudad}
                </p>

                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2">
                  Ver más
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default BarberiasList;
