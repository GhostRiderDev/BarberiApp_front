
const Abaout = () => {
    const handleInfo = () => {
        window.location.href = "/business";
    }

    return (
        <>
            <div className="bg-gray-100 py-8 flex flex-col md:flex-row md:gap-10">
                <div className="flex flex-col gap-6 m-[34px] md:w-[550px] ">
                    <div className="text-black text-3xl font-bold">BarberClik para
                        tu negocio</div>
                    <div className="text-lg font-sans md:text-2xl">Potencie su negocio de forma gratuita con la mejor plataforma de reservas para servicios de barberias.</div>
                    <div className="">
                        <button onClick={handleInfo} className="bg-slate-800 text-white font-bold rounded-[30px] p-4 text-lg lg:mt-6">Mas Informacion</button>

                    </div>

                </div>
                <div className="lg:m-[34px]">
                    <img src="https://img.freepik.com/vector-premium/concepto-aplicacion-reserva-peluqueria_23-2148570794.jpg" alt="" />
                </div>


            </div>
        </>
    )

}
export default Abaout;
