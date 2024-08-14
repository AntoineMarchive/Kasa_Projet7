import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Collapse } from '../../components/Collapse';
import { Banner } from '../../components/Banner';
import './About.scss'

export function About() {
    return (
        <main>
            <h1>Page About</h1>
            <Header></Header>
            <Banner></Banner>
            <Collapse></Collapse>
            <Footer></Footer>
        </main>
    )
}