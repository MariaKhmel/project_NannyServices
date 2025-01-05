import { useEffect, useState } from "react";
import css from "./Forms.module.css";
import "../../index.css";
import { useNavigate } from "react-router-dom";

const RegistrationForm = ({ setIsRegistrationModalShown }) => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsRegistrationModalShown(false);
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
      name: "",
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
    setIsRegistrationModalShown(false);
    navigate("/");
  };

  const onOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsRegistrationModalShown(false);
      navigate("/");
    }
  };

  return (
    <div className={css.modalOverlay} onClick={onOverlayClick}>
      <div className={css.modal}>
        <button className={css.closeBtn} onClick={onCloseBtn}>
          X
        </button>
        <h2>Registration</h2>
        <p>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </p>
        <form onSubmit={handleFormSubmit} className={css.registrationForm}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formValues.name}
            onChange={handleFormValuesChange}
          />
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
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
export default RegistrationForm;
