//import { Header } from '../../components/Header';
//import { Footer } from '../../components/Footer';
import { Collapse } from "../../components/Collapse";
import { Banner } from "../../components/Banner";
import { Layout } from "../../components/Layout";
import "./About.scss";

export function About() {
  return (
    <Layout>
      <main>
        <Banner></Banner>
        <Collapse></Collapse>
        <Collapse></Collapse>
        <Collapse></Collapse>
        <Collapse></Collapse>
      </main>
    </Layout>
  );
}
