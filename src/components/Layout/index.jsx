import { Header } from '../Header';
import { Footer } from '../Footer';

export function Layout ({ Children }) {

    return(
        <>
        <Header />
            {Children}
        <Footer />
        </>
    )
}