import "./Footer.scss";
import logo from "../../assets/footerLogo.png";

export function Footer() {
  return (
    <footer className="footer">
      <p>ici est le footer</p>
      <img
        className="footer__logo"
        src={logo}
        alt="Logo de l'agence immobilière Kasa"
      />
      <p className="footer__copyrightText">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
