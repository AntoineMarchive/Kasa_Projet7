import "./Header.scss";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";


export function Header() {
  return (
    <header className="header">
      <figure className="header__fig">
        <img src={logo} alt="Logo de l'agence immobilière Kasa" />
      </figure>
      <div className="header__nav">
      <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/a-propos"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              A propos
            </NavLink>
          </li>
          </ul>
      </div>
    </header>
  );
}
