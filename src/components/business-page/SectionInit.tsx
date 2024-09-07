const SectionInit = () => {
    return (
        <>

            <div className="pt-10 text-center flex items-center justify-center">
                <button className="h-[56px] text-xl text-white font-semibold bg-violet-600 rounded-lg w-[220px] block md:hidden">Registrate Gratis</button>
            </div>

            <div className="flex flex-col gap-6 pl-4 lg:pt-8">
                <div className="text-2xl font-semibold md:font-bold md:text-3xl lg:text-4xl">La solución n.º 1 para belleza y bienestar</div>
                <div className="text-xl">Una solución, un software. Los mejores profesionales del sector de belleza y bienestar ya confían en Fresha</div>
            </div>

            <div className="bg-slate-100 lg:w-[1000px]">
                <div className="m-4 grid grid-cols-2 gap-3 md:m-12 md:gap-12">
                    <div className="flex flex-col">
                        <div className="text-xl font-bold lg:text-3xl">Más de 110 000</div>
                        <div className="text-lg font-bold">negocios asociados</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-xl font-bold lg:text-3xl">Más de 450 000</div>
                        <div className="text-lg font-bold">estilistas y profesionales</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-xl font-bold lg:text-3xl">Más de 1 000 millones</div>
                        <div className="text-lg font-bold">de citas reservadas</div>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-xl font-bold lg:text-3xl">Más de 120 países</div>
                        <div className="text-lg font-bold">en los que Fresha está disponible</div>
                    </div>

                </div>
            </div>



        </>
    )
}
export default SectionInit;