import { IoMdArrowRoundForward } from "react-icons/io";
import RegistrationForm from "../../components/Forms/RegistrationForm";

const HomePage = ({
  isRegistrationModalShown,
  setIsRegistrationModalShown,
}) => {
  return (
    <>
      <h1>Make Life Easier for the Family:</h1>
      <p>Find Babysitters Online for All Occasions</p>
      <button type="button" onClick={() => setIsRegistrationModalShown(true)}>
        Get started <IoMdArrowRoundForward />
      </button>
      {isRegistrationModalShown && (
        <RegistrationForm
          setIsRegistrationModalShown={setIsRegistrationModalShown}
        />
      )}
    </>
  );
};

export default HomePage;
