import css from "./Registration.module.css";

const SignInForm = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    console.log({ name, email, password });
    form.reset();
  };
  return (
    <div className={css.modalOverlay}>
      <div className={css.modal}>
        <h2>Registration</h2>
        <p>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </p>
        <form onSubmit={handleFormSubmit}>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button type="sumbit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};
export default SignInForm;
