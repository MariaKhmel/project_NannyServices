import { Route, Routes } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import HomePage from "../../pages/HomePage/HomePage";
import Nannies from "../../pages/Nannies/Nannies";

function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nannies" element={<Nannies />} />
      </Routes>
    </>
  );
}

export default App;
