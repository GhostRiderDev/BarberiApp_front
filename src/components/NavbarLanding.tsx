import { useState, useEffect } from "react";

interface NavbarLandingProps {
  type: "transparente" | "opacity";
  theme?: "dark" | "light";
}

const NavbarLanding = ({ type, theme }: NavbarLandingProps) => {
  const [scrolling, setScrolling] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolling
          ? "bg-gray-800 shadow-md"
          : `${
              type === "transparente"
                ? "bg-transparent"
                : `${theme === "dark" ? "bg-gray-800" : "bg-white"}`
            }`
      }`}
    >
      <div className="flex justify-between w-full mx-auto px-4 md:max-w-[1400px] md:mx-auto">
        <div
          className={`flex items-center ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          <img src="./logodemo.png" alt="logo" className="h-16 -ml-3" />
          <a href="/" className="-ml-4 font-bold">
            BarberClick
          </a>
        </div>
        <div className="flex items-center">
          <button
            className={`"relative px-3 py-1 overflow-hidden ${
              theme === "light" ? "text-black" : "text-white"
            } border ${
              theme === "light" ? "border-black" : "border-white"
            } rounded-full group"`}
          >
            <span className="relative z-10">Iniciar sesión</span>
            <div className="absolute inset-0 w-full h-full transition-transform duration-300 ease-out origin-left transform scale-x-0 bg-[#d6d6d638] group-hover:scale-x-100"></div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarLanding;
