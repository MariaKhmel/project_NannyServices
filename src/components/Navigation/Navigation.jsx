import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/nannies">Nannies</NavLink>
    </div>
  );
};

export default Navigation;
