const Footer = () => {
  return (
    <div className="mt-10 mb-5">
      <div className="flex flex-col items-center justify-center min-[800px]:flex-row md:justify-between md:items-center md:max-w-[1400px] md:mx-auto md:px-4">
        <div className="flex items-center ">
          <img src="/logodemo.png" alt="logo" className="h-16 -ml-3" />
          <span className="-ml-4 font-bold">BarberClick</span>
        </div>
        <div className="flex flex-col gap-2 md:flex-row">
          <button className="px-6 py-1 border border-[#878787] rounded-full">
            Terminos y Condiciones
          </button>
          <button className="px-3 py-1 border border-[#878787] rounded-full">
            Politica y Privacidad de Datos
          </button>
        </div>
        <div className="md:max-w-[10%] text-center">
          <span className="text-xs font-semibold">
            Copyrigth &copy; 2024 BarberClick
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
