import css from "./MakeAppointmentModal.module.css";
import "../../index.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const MakeAppointmentModal = ({ showModal }) => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    address: "",
    phone: "",
    age: "",
    date: "",
    email: "",
    parentName: "",
    comment: "",
  });

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      showModal(false);
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
      address: "",
      phone: "",
      age: "",
      date: "",
      email: "",
      parentName: "",
      comment: "",
    });
    showModal(false);
    navigate("/nannies");
  };

  const handleFormValuesChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const onCloseBtn = () => {
    showModal(false);
    navigate("/nannies");
  };

  const onOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      showModal(false);
      navigate("/nannies");
    }
  };

  return (
    <div className={css.overlay} onClick={onOverlayClick}>
      <form className={css.form} onSubmit={handleFormSubmit}>
        <button type="button" className={css.closeBtn} onClick={onCloseBtn}>
          x
        </button>
        <h2>Make an appointment with a babysitter</h2>
        <p>
          Arranging a meeting with a caregiver for your child is the first step
          to creating a safe and comfortable environment. Fill out the form
          below so we can match you with the perfect care partner.
        </p>
        <div className={css.container}>
          <input
            placeholder="Address"
            className={css.input}
            name="address"
            value={formValues.address}
            onChange={handleFormValuesChange}
          />
          <input
            placeholder="+380"
            className={css.input}
            name="phone"
            value={formValues.phone}
            onChange={handleFormValuesChange}
          />
          <input
            placeholder="Child's age"
            className={css.input}
            name="age"
            value={formValues.age}
            onChange={handleFormValuesChange}
          />
          <input
            type="date"
            placeholder="00:00"
            className={css.input}
            name="date"
            value={formValues.date}
            onChange={handleFormValuesChange}
          />
          <input
            placeholder="Email"
            className={css.input}
            name="email"
            value={formValues.email}
            onChange={handleFormValuesChange}
          />
          <input
            placeholder="Father's or mother's name"
            className={css.input}
            name="parentName"
            value={formValues.parentName}
            onChange={handleFormValuesChange}
          />
          <textarea
            placeholder="Comment"
            rows={3}
            style={{ resize: "none" }}
            name="comment"
            value={formValues.comment}
            onChange={handleFormValuesChange}
          />

          <button type="submit" className="formBtn">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default MakeAppointmentModal;
