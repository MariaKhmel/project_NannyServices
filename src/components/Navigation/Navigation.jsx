import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  const buildClasses = (...classes) =>
    classes.filter((className) => Boolean(className)).join(" ");

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <NavLink to="/" className={css.navLink}>
        Home
      </NavLink>
      <NavLink
        to="/nannies"
        className={({ isActive }) =>
          buildClasses(css.navLink, isActive && css.active)
        }
      >
        Nannies
      </NavLink>
    </div>
  );
};

export default Navigation;
