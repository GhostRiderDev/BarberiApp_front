import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
