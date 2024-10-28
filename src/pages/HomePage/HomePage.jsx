import { useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import Registration from "../../components/Registration/Registration";

const HomePage = () => {
  const [isModalShown, setIsModalShown] = useState(false);

  return (
    <>
      <h1>Make Life Easier for the Family:</h1>
      <p>Find Babysitters Online for All Occasions</p>
      <button type="button" onClick={() => setIsModalShown(true)}>
        Get started <IoMdArrowRoundForward />
      </button>
      {isModalShown && <Registration />}
    </>
  );
};

export default HomePage;
