import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import './Error.scss';

export function Error() {
  return (
    <main>
      <Header></Header>
      <div className="error">
        <p className="error__number">404</p>
        <p className="error__text">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <p className="error__link">Retourner sur la page d'accueil</p>
      </div>
      <Footer></Footer>
    </main>
  );
}
