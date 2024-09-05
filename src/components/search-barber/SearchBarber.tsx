import { IoLocationOutline } from "react-icons/io5";


const SearchBarber = () => {
    return (
        <div className="w-[360px] lg:w-[500px] gap-4 flex flex-col justify-center items-center bg-[#d6d6d638] p-4 rounded-[20px] ">
            <h1 className="text-[23px] lg:text-[30px] text-white font-bold">Reserva servicios de barberias</h1>
            <button className="flex flex-row text-md items-center cursor-pointer duration-300 transition-all gap-2 px-6 bg-white p-2 rounded-[50px] ">
                <IoLocationOutline  />
                Seleccionar Ubicacion
                </button>
        </div>
    )
}

export default SearchBarber 
