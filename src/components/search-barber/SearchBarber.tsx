import AutoCompleteAdress from "@/components/AutoCompleteAdress";
const SearchBarber = () => {
  return (
    <div className="w-[360px] mt-16 max-[350px]:w-[95%] lg:w-[500px] gap-4 flex flex-col justify-center text-center items-center bg-[#d6d6d638] p-4 rounded-[20px] ">
      <h1 className="text-[23px] max-[500px]:text-[20px] lg:text-[30px] text-white font-bold">
        Reserva servicios de barberias
      </h1>
      <AutoCompleteAdress />
    </div>
  );
};

export default SearchBarber;
