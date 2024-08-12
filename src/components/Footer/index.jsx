import './Footer.scss'
import logo from './assets/footer__logo.png'

export function Footer() {
    return (
        <footer className="footer">
            <img className="footer__logo" src={logo} alt="Logo de l'agence immobilière Kasa"/>
            <p className="footer__copyrightText">
                © 2020 Kasa. All rights reserved
            </p>
        </footer>
    )
}
