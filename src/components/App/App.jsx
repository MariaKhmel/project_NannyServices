import { Route, Routes, useLocation } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import HomePage from "../../pages/HomePage/HomePage";
import Nannies from "../../pages/Nannies/Nannies";
import { useEffect, useState } from "react";
import LogInForm from "../Forms/LogInForm";

function App() {
  const [isRegistrationModalShown, setIsRegistrationModalShown] =
    useState(false);

  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === "/register") {
      setIsRegistrationModalShown(true);
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
        <Route path="/login" element={<LogInForm />} />
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
