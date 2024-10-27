import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <NavLink to="/login"> Log In</NavLink>
      <NavLink to="/register"> Registration</NavLink>
    </div>
  );
};

export default AuthNav;
