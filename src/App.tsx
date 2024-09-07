import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Footer from "./components/Footer";
import Business from "./components/business-page/BusinessLanding";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/business-page" element={<Business />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
