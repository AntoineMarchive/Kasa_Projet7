import { Header } from '../../components/Header';
import { Error } from '../../components/Error';
import { Footer } from '../../components/Footer';
import './Error.scss'

export function Error() {
    return (
        <main>
            <Header></Header>
            <h1>Page Error</h1>
            <Error></Error>
            <Footer></Footer>
        </main>
    )
}