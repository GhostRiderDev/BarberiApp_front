import { useRegisterPassword } from "@/hooks/useRegisterPassword";
import { DataUserContext, Role } from "@/views/RegisterUser";
import { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

interface ContactInfoFormProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  pagesLength: number;
}

const AdditionalInfoForm = ({ setPage }: ContactInfoFormProps) => {
  const {
    password,
    confirmPassword,
    passwordError,
    showPassword,
    handlePasswordChange,
    handleConfirmPasswordChange,
    toggleShowPassword,
  } = useRegisterPassword();
  const userDataContext = useContext(DataUserContext);
  const [role, setRole] = useState(userDataContext.userData.role || Role.USER);

  return (
    <div>
      <header>
        <h2 className="text-gray-500 text-md font-normal mb-2">
          Selecciona como deseas registrarte
        </h2>
      </header>
      <div className="flex justify-evenly md:gap-4 mb-4 mx-auto w-4/5 md:w-1/2 ">
        <div
          className={`p-2 bg-gray-100 rounded-md flex flex-col justify-center items-center hover:bg-gray-200 w-[30vw] h-[30vw]   md:w-[8vw] md:h-[8vw] border-2 ${
            role === Role.USER ? "border-blue-400" : ""
          }`}
          onClick={() => setRole(Role.USER)}
        >
          <input type="radio" name="role" className="hidden" />
          <label>
            <div>
              <img
                src="/client-icon.png"
                alt="client icon"
                className="h-15 drop-shadow-2xl"
              />
              <h4 className="text-lg font-semibold">Cliente</h4>
            </div>
          </label>
        </div>
        <div
          className={`p-2 bg-gray-100 rounded-md flex flex-col justify-center items-center hover:bg-gray-200 w-[30vw] h-[30vw]   md:w-[8vw] md:h-[8vw] border-2 ${
            role !== Role.USER ? "border-blue-400" : ""
          }`}
          onClick={() => setRole(Role.COMPANY)}
        >
          <input
            type="radio"
            name="role"
            value="COMPANY"
            id="company"
            className="hidden"
          />
          <label htmlFor="company">
            <div>
              <img src="/barbershop.png" alt="company" className="h-15" />
              <h4 className="text-lg font-semibold">Barberia</h4>
            </div>
          </label>
        </div>
      </div>
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

      <div className="relative w-full ">
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
      {<p className=" text-red-500 h-2 ">{passwordError}</p>}
      <div className="flex gap-4  mx-auto mt-4 items-center justify-center">
        <button
          className={`py-3 w-1/3  text-white transition-all duration-300 bg-black rounded-md hover:scale-105`}
          onClick={() => setPage(1)}
        >
          Atras
        </button>
        <button
          className=" py-3  w-1/3 text-white transition-all duration-300 bg-black rounded-md hover:scale-105"
          onClick={() => {
            userDataContext.setUserData({
              ...userDataContext.userData,
              role,
              password,
            });
            setPage(3);
          }}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default AdditionalInfoForm;
