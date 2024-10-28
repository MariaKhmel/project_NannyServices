import { IoMdArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Make Life Easier for the Family:</h1>
      <p>Find Babysitters Online for All Occasions</p>
      <button type="button" onClick={navigate()}>
        Get started <IoMdArrowRoundForward />
      </button>
    </>
  );
};

export default HomePage;
