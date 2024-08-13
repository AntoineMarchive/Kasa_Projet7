import './Banner.scss';
import logo from "../../assets/homeBanner.png";

export function Banner() {
    return (
        <div className="banner">
            <img className="banner__img" src={logo} alt="Bannière" />
            <div className="banner__darken"></div>
            <span className="banner__text">Chez vous, partout et ailleurs</span>
        </div>
    )
}
