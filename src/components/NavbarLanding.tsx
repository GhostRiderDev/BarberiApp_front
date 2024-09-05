import { useState, useEffect } from "react";

const NavbarLanding: React.FC = () => {
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolling ? "bg-gray-800" : "bg-transparent"
        }`}
    >
      <div className="flex justify-between w-full mx-auto px-4">
        <div className="flex text-white items-center">
          <img src="./logodemo.png" alt="logo" className="h-16 -ml-3" />
          <span className="-ml-4 font-bold">BarberClick</span>
        </div>
        <div className="flex items-center">
          <button className="px-3 py-1 border border-white text-white rounded-full">Iniciar sesion</button>
        </div>
      </div>
    </nav> 
  );
};

export default NavbarLanding;
