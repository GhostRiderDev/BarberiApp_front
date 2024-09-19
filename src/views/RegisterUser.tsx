import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { createContext, useState } from "react";
import ContactInfoForm from "@/components/ContactInfoForm";
import AdditionalInfoForm from "@/components/AdditionalInforForm";
import { GoogleLogin } from "@react-oauth/google";
import ResumeRegister from "@/components/ResumeRegister";

export enum Role {
  USER = "USER",
  COMPANY = "ADMIN",
}

interface IUserData {
  name: string;
  email: string;
  phone: string;
  role: Role;
  password: string;
}

export const DataUserContext = createContext({
  userData: {
    name: "",
    email: "",
    phone: "",
    role: Role.USER,
    password: "",
  },
  setUserData: (data: IUserData) => {
    console.log(data);
  },
});
const RegisterUser = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    role: Role.USER,
    password: "",
  });

  const [pages] = useState([
    <ContactInfoForm page={page} pagesLength={3} setPage={setPage} />,
    <AdditionalInfoForm setPage={setPage} pagesLength={3} />,
    <ResumeRegister />,
  ]);

  const handleClickBack = () => {
    navigate("/auth");
  };

  const isBasicUserDataEmpty = () => {
    return (
      userData.name === "" || userData.email === "" || userData.phone === ""
    );
  };

  const isAddtionaUserDataEmpty = () => {
    return userData.password === "";
  };

  return (
    <section className="flex h-svh">
      <div className="flex flex-col items-center w-full gap-10 p-4 bg-white">
        <div className="flex w-full justify-between gap10">
          <button
            onClick={handleClickBack}
            className="w-[50px] hover:bg-gray-100 rounded-lg  flex justify-center items-center p-2 text-xl"
          >
            <IoArrowBackSharp />
          </button>
          <h1 className="w-3/4 text-2xl font-bold  text-balance">
            ¡Regístrate en BarberClick y únete a nuestra comunidad!
          </h1>
        </div>

        <div className="w-full md:w-[80%]  min-[2000px]:w-[50%] flex flex-col justify-center text-center ">
          <div className="mb-4 px-0 md:px-10  mx-auto w-full ">
            <ul className="items-center w-full flex gap-4   mx-0  md:mx-auto ">
              {[
                "Información de contacto",
                "Información adicional",
                "Resumen",
              ].map((item, index) => (
                <li
                  className="flex items-center text-gray-500  space-x-1  cursor-pointer"
                  key={index}
                  onClick={() => {
                    if (page === 1 && !isBasicUserDataEmpty()) setPage(2);
                    if (page === 2 && !isAddtionaUserDataEmpty()) setPage(3);
                  }}
                >
                  <span
                    className={`
                    flex items-center justify-center w-8 h-8 border  rounded-full shrink-0 
                    ${
                      page === index + 1
                        ? "bg-blue-500 text-white border-blue-500"
                        : "border-gray-500"
                    }
                    `}
                  >
                    {index + 1}
                  </span>
                  <span>
                    <h3
                      className={`
                      font-normal md:font-medium leading-tight text-sm md:text-base 
                      ${page === index + 1 ? "text-blue-500" : "text-gray-500"}
                      `}
                    >
                      {item}
                    </h3>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-max mx-auto rounded-md">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
              locale="es"
            />
          </div>
          <div className="w-full flex flex-row items-center gap-2 mt-3 mb-3">
            <span className="w-full flex border-b black" />
            <span className="text-gray-400 -mt-1">o</span>
            <span className="w-full border-b black" />
          </div>
          <DataUserContext.Provider value={{ userData, setUserData }}>
            {pages[page - 1]}
          </DataUserContext.Provider>
          <div className="flex gap-4"></div>
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-[18px]">¿Ya tienes una cuenta?</p>
            <button
              onClick={handleClickBack}
              className="text-blue-600 font-semibold text-[16px]"
            >
              Inicia sesión
            </button>
          </div>
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
  );
};

export default RegisterUser;
