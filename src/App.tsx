import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Business from "./components/business-page/BusinessLanding";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import { useLoadScript } from "@react-google-maps/api";
import Login from "./views/Login";
import BarberiaView from "./views/Barberia";
import RegisterUser from "./views/RegisterUser";
import BarberiasView from "./views/Barberias";
import RegisterBarber from "./views/RegisterBarber";

function App() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries: ["places"],
  });

  if (!isLoaded)
    return (
      <div className="flex justify-center items-center h-screen">
        <p>
          Loading
          <span className="animate-ping">...</span>
        </p>
      </div>
    );
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/barberias" element={<BarberiasView />} />
        <Route path="/barberias/:id" element={<BarberiaView />} />
        <Route path="/auth" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/business" element={<Business />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/registerBarber" element={<RegisterBarber />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
