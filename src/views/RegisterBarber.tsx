import { useRef } from "react";
import NavbarBarber from "@/components/NavbarBarber";
import FromRegisterBarber from "@/components/FromRegisterBarber";
const RegisterBarber = () => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="h-full w-full bg-gray-50 ">
      <NavbarBarber formRef={formRef} />
      <FromRegisterBarber formRef={formRef} />
    </div>
  );
};

export default RegisterBarber;
