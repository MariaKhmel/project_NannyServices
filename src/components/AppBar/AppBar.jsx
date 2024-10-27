import { NavLink } from "react-router-dom";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import css from "./AppBar.module.css";

const AppBar = () => {
  return (
    <header className={css.header}>
      <NavLink to="/" className={css.logo}>
        Nanny.Services
      </NavLink>
      <nav className={css.nav}>
        <Navigation />
        <AuthNav />
      </nav>
    </header>
  );
};

export default AppBar;
