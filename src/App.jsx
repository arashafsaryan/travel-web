import { Navigate, Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home-page" />} />
        <Route path="/home-page" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
