import { Route, Routes, useLocation } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import HomePage from "../../pages/HomePage/HomePage";
import Nannies from "../../pages/Nannies/Nannies";
import { useEffect, useState } from "react";

function App() {
  const [isModalShown, setIsModalShown] = useState(false);

  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === "/register") {
      setIsModalShown(true);
    }
  }, [location.pathname]);
  return (
    <>
      <AppBar />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              setIsModalShown={setIsModalShown}
              isModalShown={isModalShown}
            />
          }
        />
        <Route path="/nannies" element={<Nannies />} />
        <Route path="/login" />
        <Route
          path="/register"
          element={
            <HomePage
              setIsModalShown={setIsModalShown}
              isModalShown={isModalShown}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
