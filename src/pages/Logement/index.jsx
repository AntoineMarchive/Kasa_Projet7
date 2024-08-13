import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Carrousel } from '../../components/Carrousel';
import { Thumb } from '../../components/Thumb';
import { Tag } from '../../components/Tag';
import './Logement.scss';

export function Logement() {
    return (
        <main>
            <h1>Page Logement</h1>
            <Header></Header>
            <Carrousel></Carrousel>
            <Tag></Tag>
            <Thumb></Thumb>
            <Footer></Footer>
        </main>
    )
}