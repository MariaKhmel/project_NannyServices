import { Route, Routes, useLocation } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import HomePage from "../../pages/HomePage/HomePage";
import Nannies from "../../pages/Nannies/Nannies";
import { useEffect, useState } from "react";
import Favotites from "../../pages/Favotites/Favotites";

function App() {
  const [isRegistrationModalShown, setIsRegistrationModalShown] =
    useState(false);
  const [isLogInModalShown, setIsLogInModalShown] = useState(false);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/register") {
      setIsRegistrationModalShown(true);
    }
    if (location.pathname === "/login") {
      setIsLogInModalShown(true);
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
              setIsRegistrationModalShown={setIsRegistrationModalShown}
              isRegistrationModalShown={isRegistrationModalShown}
            />
          }
        />
        <Route path="/nannies" element={<Nannies />} />
        <Route path="/favorites" element={<Favotites />} />
        <Route
          path="/login"
          element={
            <HomePage
              isLogInModalShown={isLogInModalShown}
              setIsLogInModalShown={setIsLogInModalShown}
            />
          }
        />
        <Route
          path="/register"
          element={
            <HomePage
              setIsRegistrationModalShown={setIsRegistrationModalShown}
              isRegistrationModalShown={isRegistrationModalShown}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
