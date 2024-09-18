import { registerAdmin, registerUser } from "@/services/registerService";
import { DataUserContext, Role } from "@/views/RegisterUser";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ResumeRegister = () => {
  const { userData } = useContext(DataUserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [hasRegistered, setHasRegistered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const register = async () => {
      if (userData.role === Role.USER && !hasRegistered) {
        const isSignupProcessComplete = await registerUser({
          name: userData.name,
          email: userData.email,
          phone: userData.phone,
          password: userData.password,
        });
        console.log(isSignupProcessComplete);
        navigate("/dashboard/user");
      }

      if (userData.role === Role.COMPANY && !hasRegistered) {
        const isSignupProcessComplete = await registerAdmin({
          name: userData.name,
          email: userData.email,
          phone: userData.phone,
          password: userData.password,
        });
        console.log(isSignupProcessComplete);
        navigate("/dashboard/barberia");
      }
      setIsLoading(false);
      setHasRegistered(true);
      Swal.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "Usuario registrado con éxito",
      });
    };

    register();
  }, [userData, hasRegistered]);

  return (
    <div>
      {isLoading && (
        <div className="flex items-center justify-center h-96">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
    </div>
  );
};

export default ResumeRegister;
