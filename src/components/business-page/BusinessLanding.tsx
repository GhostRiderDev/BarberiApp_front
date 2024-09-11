import NavbarLanding from "../NavbarLanding";
import CardBusinessInfo from "./CardBusinessInfo";
import SectionInit from "./SectionInit";

const Business = () => {
    return (
        <>
            <div className="w-full xl:w-full relative">
                <NavbarLanding />
                <div className="bg-home2 gap-20 flex flex-col w-full h-[450px] ">
                    <div className="flex flex-col gap-3 z-10 relative pt-[80px]">
                        <div className="text-3xl text-center text-white font-bold lg:text-5xl">El mejor software para barberias y spas</div>
                        <div className="text-2xl text-white text-center m-2 font-semibold lg:text-2xl">Un software de reservas sencillo, flexible y potente para tu negocio. ¡Y totalmente gratis!</div>
                        <div className="pt-2 text-center hidden md:block">
                            <button className="h-[56px] text-xl text-white font-semibold bg-violet-600 rounded-lg w-[220px] ">Registrate Gratis</button>
                        </div>

                    </div>
                    <div className="flex justify-center absolute top-[260px] w-full z-0">
                        <img className="block md:hidden " src="/business.png" alt="" />
                    </div>
                </div>

                <div className="h-[310px] hidden md:block">
                </div>
                <div className="absolute top-[340px] right-[90px] hidden md:block lg:right-[260px]  ">
                    <img className="h-[420px] w-[660px] rounded-xl lg:w-[800px]" src="https://img.freepik.com/vector-gratis/aplicacion-reserva-peluqueria_23-2148570793.jpg?t=st=1725672506~exp=1725676106~hmac=49a8f03a40cd59d79bed19a3683145bcc875c5839acf203ef39e27540fa9fd43&w=740" alt="" />

                </div>



                <div className=" z-10 relative bg-slate-50 flex flex-col justify-center gap-10 lg:flex-row ">
                    <SectionInit />
                </div>
                <div className="flex flex-col ">
                    <CardBusinessInfo />
                </div>

            </div>
        </>
    )

}
export default Business;