import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Banner } from '../../components/Banner';
import './Home.scss';


export function Home() {
    return (
        <main>
            <Header></Header>
            <Banner></Banner>
            <h1>Page Home</h1>
            <Footer></Footer>
        </main>
    )
};