import { IoMdArrowRoundForward } from "react-icons/io";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

const HomePage = ({ isModalShown, setIsModalShown }) => {
  return (
    <>
      <h1>Make Life Easier for the Family:</h1>
      <p>Find Babysitters Online for All Occasions</p>
      <button type="button" onClick={() => setIsModalShown(true)}>
        Get started <IoMdArrowRoundForward />
      </button>
      {isModalShown && <RegistrationForm setIsModalShown={setIsModalShown} />}
    </>
  );
};

export default HomePage;
