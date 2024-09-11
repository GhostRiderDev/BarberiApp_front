import { IBarberia } from "@/interfaces/IBarberia";
import Rating from "./Rating";
import { IoLocationOutline, IoTicket } from "react-icons/io5";
import { FaEye } from "react-icons/fa6";

const BarberiasList = ({ barberias }: { barberias: IBarberia[] }) => {

  if(barberias.length === 0) {
    return (
      <div className="flex justify-center items-center h-[75vh] mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-400 ">No hay barberias disponibles</h1>
      </div>
    )
  }

  return (
    <div>
      <div className="flex flex-wrap gap-4">
        {barberias !== undefined &&
          barberias.map((barberia: IBarberia) => (
            <div className="w-11/12 md:w-[300px] h-[50vh]  rounded-xl shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 mx-auto md:mx-0">
              <img
                src={barberia.banner_url}
                alt={`Imagen de ${barberia.name}`}
                className="w-full h-[50%] object-cover rounded-t-lg"
              />
              <div className="flex h-[50%] gap-1 px-4 py-1 bg-[#cfcece30] rounded-b-xl  ">
                <div className="w-4/5 gap-2">
                  <h2 className="text-xl text-black font-semibold">
                    {barberia.name}
                  </h2>
                  <div className="flex items-center text-black">
                    <IoLocationOutline className="mr-2 text-red-600 text-xl" />
                    <span className="text-gray-500 font-light">
                      {barberia.ciudad}, {barberia.departamento}
                    </span>
                  </div>
                  <div className="flex flex-row gap-2 text-yellow-400">
                    4.5 <Rating rating={4.2} /> (100)
                  </div>
                  <div className="flex flex-row flex-wrap gap-2 ">
                    <div className="text-sm bg-white px-3 py-1 rounded-xl text-gray-800">
                      Cabello
                    </div>
                    <div className="text-sm bg-white px-3 py-1 rounded-xl text-gray-800">
                      Cejas
                    </div>
                    <div className="text-sm bg-white px-3 py-1 rounded-xl text-gray-800">
                      Barba
                    </div>
                  </div>
                </div>
                <div className="w-1/5 flex flex-col items-center justify-center gap-2">
                  <button className="bg-purple-700 text-white px-2 py-1 rounded-full w-[6vh] h-[6vh] flex items-center justify-center text-4xl hover:scale-125">
                    <FaEye />
                  </button>
                  <button className="bg-purple-700 text-white px-2 py-1 rounded-full w-[6vh] h-[6vh] flex items-center justify-center text-4xl hover:scale-125">
                    <IoTicket />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BarberiasList;
