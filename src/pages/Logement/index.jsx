import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Carrousel } from "../../components/Carrousel";
import { Collapse } from "../../components/Collapse";
import { Tag } from "../../components/Tag";
import "./Logement.scss";
import { useParams } from "react-router-dom";

export function Logement() {
  const { logementId } = useParams();
  return (
    <main>
      <h1>Page Logement {logementId}</h1>
      <Header></Header>
      <Carrousel></Carrousel>
      <Tag></Tag>
      <Tag></Tag>
      <Tag></Tag>
      <Collapse></Collapse>
      <Collapse></Collapse>
      <Footer></Footer>
    </main>
  );
}

