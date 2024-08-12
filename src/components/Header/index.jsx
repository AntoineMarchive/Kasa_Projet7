import './Header.scss';
import logo from '../../assets/logo.svg';

export function Header () {
    return (
        <header className="header">
            <figure className="header__fig">
                <img src={logo} alt="Logo de l'agence immobilière Kasa"/>
            </figure>
            <Nav />
        </header>
    )
}
