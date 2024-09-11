import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

const NavbarLanding: React.FC = () => {
  const [scrolling, setScrolling] = useState<boolean>(false);
  const navigate = useNavigate();

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

          
  const handleClickLogo = () => {
    navigate('/');
  }

  const handleClickLogin = () => {
    navigate('/auth');
  }


  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolling ? "bg-gray-800 shadow-md" : "bg-transparent"
        }`}
    >
      <div className="flex justify-between w-full mx-auto px-4 md:max-w-[1400px] md:mx-auto">
        <div className="flex items-center text-white">
          <img src="./logodemo.png" alt="logo" className="h-16 -ml-3" />
          <button onClick={handleClickLogo} className="-ml-4 cursor-pointer font-bold">BarberClick</button>
          
        </div>
        <div className="flex items-center">
          <button onClick={handleClickLogin} className="relative px-3 py-1 overflow-hidden text-white border border-white rounded-full group">
            <span className="relative z-10">Iniciar sesión</span>
            <div className="absolute inset-0 w-full h-full transition-transform duration-300 ease-out origin-left transform scale-x-0 bg-[#d6d6d638] group-hover:scale-x-100"></div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarLanding;

