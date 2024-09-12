import { BsFillCalendar2CheckFill } from "react-icons/bs";
import { TbTransactionDollar } from "react-icons/tb";
import { MdInventory } from "react-icons/md";
import { ImStatsDots } from "react-icons/im";





interface IsInfo {
    icon: JSX.Element,
    title: string,
    description: string
}
const infoData: IsInfo[] = [
    {
        icon: <BsFillCalendar2CheckFill />,
        title: "Gestion de citas",
        description: "Un software para salones elegante y fácil de usar, compatible con todos los dispositivos para programar y gestionar citas sin problemas."
    },
    {
        icon: <TbTransactionDollar />,
        title: "Pagos",
        description: "Procesa de forma segura los pagos de tus clientes a través de enlaces, tarjetas guardadas y los datáfonos de Fresha para ofrecer una experiencia de pago perfecta."
    },
    {
        icon: <MdInventory />,
        title: "Inventario",
        description: "Gestiona tu inventario de productos y servicios, realiza un seguimiento de las existencias y recibe notificaciones cuando los productos se estén agotando."
    },
    {
        icon: <ImStatsDots />,
        title: "Informes y estadísticas",
        description: "Obtén información valiosa sobre tu negocio con informes detallados sobre ventas, clientes, servicios y personal para tomar decisiones informadas."
    }


]
const CardBusinessInfo = () => {

    return (
        <>
            <div className="flex flex-col font-medium gap-6 pt-10 m-6">
                <div className="text-2xl font-bold text-center lg:text-3xl">Una solución completa para gestionar y hacer crecer tu negocio</div>
                <div className="text-lg text-center m-2 lg:text-xl">Incluye todas las herramientas que necesitas para aumentar las ventas, gestionar tu calendario y fidelizar clientes para que te puedas dedicar a lo que mejor sabes hacer.</div>

                <div className="grid grid-cols-1 md:grid-cols-2 ">
                    {infoData.map((info, index) => (
                        <div key={index} className="bg-slate-100 flex flex-col gap-2 m-4 p-4 border rounded-lg shadow-md  ">
                            <div className="text-[40px] mb-2 text-violet-700">{info.icon}</div>
                            <div className="text-2xl font-bold">{info.title}</div>
                            <div className="text-lg">{info.description}</div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}
export default CardBusinessInfo;