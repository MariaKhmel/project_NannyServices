import { IoMdArrowRoundForward } from "react-icons/io";
import RegistrationForm from "../../components/Forms/RegistrationForm";
import LogInForm from "../../components/Forms/LogInForm";

const HomePage = ({
  isRegistrationModalShown,
  setIsRegistrationModalShown,
  setIsLogInModalShown,
  isLogInModalShown,
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
      {isLogInModalShown && (
        <LogInForm setIsLogInModalShown={setIsLogInModalShown} />
      )}
    </>
  );
};

export default HomePage;
