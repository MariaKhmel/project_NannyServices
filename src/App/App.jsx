import { Route, Routes } from "react-router-dom";
import AppBar from "../components/AppBar/AppBar";
import HomePage from "../pages/HomePage/HomePage";

function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
