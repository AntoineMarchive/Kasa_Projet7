import './Banner.scss';
import logo from "../../assets/homeBanner.png";

function Banner({ image, text }) {
    return (
        <div className="banner">
            <img className="banner__img" src={logo} alt="Bannière" />
            <div className="banner__darken"></div>
            <span className="banner__text">{text}</span>
        </div>
    )
}

export default Banner;