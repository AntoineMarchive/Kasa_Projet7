import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Banner } from '../../components/Banner';
import { Thumb } from '../../components/Thumb';
import './Home.scss';


export function Home() {
    return (
        <main>
            <h1>Page Home</h1>
            <Header></Header>
            <Banner></Banner>
            <Thumb></Thumb>
            <Footer></Footer>
        </main>
    )
};