import { IoArrowBackSharp } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const RegisterUser = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [image, setImage] = useState<File | null>(null);

    const handleClickBack = () => {
        navigate('/login')
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        if (confirmPassword && e.target.value !== confirmPassword) {
            setPasswordError('Las contraseñas no coinciden');
        } else {
            setPasswordError('');
        }
    }

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
        if (password && e.target.value !== password) {
            setPasswordError('Las contraseñas no coinciden');
        } else {
            setPasswordError('');
        }
    }
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <section className="flex">
            <div className="flex flex-col items-center w-full gap-10 p-4 bg-white">
                <div className="flex w-full ">
                    <button onClick={handleClickBack} className="w-[50px] hover:bg-gray-100 rounded-lg  p-4"><IoArrowBackSharp /></button>
                </div>
                <div className="w-[80%] min-[2000px]:w-[50%] flex flex-col justify-center text-center">
                    <h1 className="mb-4 text-2xl font-bold">¡Regístrate en BarberClick y únete a nuestra comunidad!</h1>
                    <p className="mb-6 text-center">Crea una cuenta para reservar y gestionar tus citas.</p>
                    <form onSubmit={handleSubmit} className="w-full">
                      <input
                        type="text"
                        placeholder="Nombre"
                        className="w-full px-4 py-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        autoComplete="username"
                    />
                    <input
                        type="email"
                        placeholder="Correo Electrónico"
                        className="w-full px-4 py-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        autoComplete="email"
                    />
                    <input
                        type="tel"
                        placeholder="Telefono"
                        className="w-full px-4 py-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        autoComplete="tel"
                    />

                    <div className="relative w-full mb-4">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Contraseña"
                            value={password}
                            onChange={handlePasswordChange}
                            autoComplete="new-password"
                            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button
                            type="button"
                            onClick={toggleShowPassword}
                            className="absolute inset-y-0 flex items-center text-blue-600 right-4"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />} 
                        </button>
                    </div>

                    <div className="relative w-full mb-4">
                        <input
                            type={showPassword ? "text" : "password"} 
                            placeholder="Confirmar Contraseña"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            autoComplete="new-password"
                            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button
                            type="button"
                            onClick={toggleShowPassword}
                            className="absolute inset-y-0 flex items-center text-blue-600 right-4"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    {passwordError && (
                        <p className="mb-4 text-red-500">{passwordError}</p>
                    )}
                    <div className="relative w-full mb-4">
                        <input
                            type="file"
                            id="fileInput"
                            onChange={handleImageChange}
                            className="hidden"
                        />
                        <label
                            htmlFor="fileInput"
                            className="flex items-center justify-between w-full px-4 py-3 bg-gray-100 border rounded-md cursor-pointer hover:bg-gray-200"
                        >
                            <span>{image ? image.name : "Seleccionar Imagen"}</span>
                            <span className="text-blue-600">Seleccionar</span>
                        </label>
                    </div>
                    <button type="submit" className="w-full py-3 mt-10 text-white transition-all duration-300 bg-black rounded-md hover:scale-105">
                        Crear
                    </button>
                    <div className="mt-6 text-center">
                        <p className="text-gray-600 text-[18px]">¿Ya tienes una cuenta?</p>
                        <button onClick={handleClickBack} className="text-blue-600 font-semibold text-[16px]">Inicia sesión</button>
                    </div>  
                    </form>
                </div>
            </div>

            <div className="w-full flex max-[768px]:hidden">
                <img
                    src="/bg-home.jpg"
                    alt="Person smiling"
                    className="object-cover w-full h-full lg:max-w-[1440px] lg:max-h-[900px]"
                />
            </div>
        </section>
    )
}

export default RegisterUser