import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import css from "./Forms.module.css";
import "../../index.css";

const LogInForm = ({ setIsLogInModalShown }) => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsLogInModalShown(false);
      navigate("/");
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    setFormValues({
      email: "",
      password: "",
    });
    navigate("/nannies");
  };

  const handleFormValuesChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const onCloseBtn = () => {
    setIsLogInModalShown(false);
    navigate("/");
  };

  const onOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsLogInModalShown(false);
      navigate("/");
    }
  };

  return (
    <div className={css.modalOverlay} onClick={onOverlayClick}>
      <div className={css.modal}>
        <button className={css.closeBtn} onClick={onCloseBtn}>
          X
        </button>
        <h2>Log In</h2>
        <p>
          Welcome back! Please enter your credentials to access your account and
          continue your babysitter search.
        </p>
        <form onSubmit={handleFormSubmit} className={css.registrationForm}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleFormValuesChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleFormValuesChange}
          />
          <button type="submit" className="formBtn">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogInForm;
