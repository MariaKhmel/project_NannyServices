import { Route, Routes, useLocation } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import HomePage from "../../pages/HomePage/HomePage";
import Nannies from "../../pages/Nannies/Nannies";
import { useEffect, useState } from "react";
import Favotites from "../../pages/Favotites/Favotites";
import { identifySelectedCard } from "../../helpers/favorites/identifySelectedCard";
import { removeSelectedCard } from "../../helpers/favorites/removeSelectedCard";
function App() {
  const location = useLocation();

  const [isRegistrationModalShown, setIsRegistrationModalShown] =
    useState(false);
  const [isLogInModalShown, setIsLogInModalShown] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [modalType, setModalType] = useState(null);

  // useEffect(() => {
  //   if (location.pathname === "/register") {
  //     setModalType("register");
  //   } else if (location.pathname === "login") {
  //     setModalType("login");
  //   } else {
  //     setModalType(null);
  //   }
  // }, location.pathname);

  const setFavoriteCard = (name) => {
    const selectedCard = identifySelectedCard(name);
    const nannyName = selectedCard.name;
    if (favorites.find((el) => el.name === nannyName)) {
      setFavorites((prevFavorites) =>
        removeSelectedCard(prevFavorites, nannyName)
      );
      return;
    }
    setFavorites((prevFavorites) => [...prevFavorites, selectedCard]);
  };

  return (
    <>
      <AppBar />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage modalType={modalType} setModalType={setModalType} />
          }
        />
        <Route
          path="/nannies"
          element={<Nannies setFavoriteCard={setFavoriteCard} />}
        />
        <Route
          path="/favorites"
          element={
            <Favotites
              favorites={favorites}
              setFavoriteCard={setFavoriteCard}
            />
          }
        />
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
