const Footer = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between md:items-center md:max-w-[1000px] md:mx-auto md:px-4">
        <div className="flex items-center ">
          <img src="./logodemo.png" alt="logo" className="h-16 -ml-3" />
          <span className="-ml-4 font-bold">BarberClick</span>
        </div>
        <div className="flex flex-col gap-1 md:flex-row">
          <button className="px-3 py-1 border border-[#878787] rounded-full">
            Terminos y Condiciones
          </button>
          <button className="px-3 py-1 border border-[#878787] rounded-full">
            Politica y Privacidad de Datos
          </button>
        </div>
        <div>
          <span className="font-semibold">
            Copyrigth &copy; 2024 BarberClick
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
