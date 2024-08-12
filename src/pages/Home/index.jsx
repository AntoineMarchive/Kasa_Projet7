import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { carrousel } from '../../components/Carrousel';
import './Home.scss';


export function Home() {
    return (
        <main>
            <Header></Header>
            <Carrousel></Carrousel>
            <h1>Page Home</h1>
            <Footer></Footer>
        </main>
    )
};