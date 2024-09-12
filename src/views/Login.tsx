import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleClickBack = () => {
        navigate('/')
    }

    return (
        <section className="flex flex-col xl:flex-row h-[100vh]">
            <div className="w-full flex flex-col items-center gap-10 p-4 bg-white">
                <div className="w-full flex ">
                    <button onClick={handleClickBack} className="w-[50px] hover:bg-gray-100 rounded-lg  p-4"><IoArrowBackSharp /></button>
                </div>
                <div className="w-[80] flex flex-col justify-center items-center">
                    <h1 className="text-2xl font-bold mb-4">Bienvenido a BarberClick👋!</h1>
                    <p className="mb-6 text-center">Crea una cuenta o inicia sesión para reservar y gestionar tus citas.</p>
                    <button className="flex items-center justify-center w-full p-2 border rounded-md hover:bg-gray-100">
                        <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google Logo" className="mr-4 w-8" />
                        Continuar con Google
                    </button>
                    <div className="w-full flex flex-row items-center gap-2 mt-6 mb-6">
                        <span className="w-full flex border-b black" />
                        <span className="text-gray-400 -mt-1">o</span>
                        <span className="w-full border-b black" />
                    </div>
                    
                    <input
                        type="email"
                        placeholder="Correo Electrónico"
                        className="w-full px-4 py-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button className="w-full py-3 mt-10 bg-black text-white rounded-md hover:scale-105 transition-all duration-300">
                        Continuar
                    </button>
                    <div className="mt-6 text-center">
                        <p className="text-gray-600 text-[18px]">¿Quieres que más clientes descubran tu negocio?</p>
                        <button className="text-blue-600 font-semibold text-[16px]">Regístrate como empresa</button>
                    </div>
                </div>
            </div>

            <div className="w-full flex">
                <img
                    src="/bg-home.jpg"
                    alt="Person smiling"
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    )
}

export default Login;
