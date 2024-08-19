import { Carrousel } from "../../components/Carrousel";
import { Collapse } from "../../components/Collapse";
import { Tag } from "../../components/Tag";
import { Layout } from "../../components/Layout";
import "./Logement.scss";
import { useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export function Logement() {
  const { logementId } = useParams();
  const [logement, setLogement] = useState();

  useEffect(() => {
    async function fetchLogements() {
      const res = await fetch("/logements.json");
      const datas = await res.json();

      const foundLogement = datas.find((log) => {
        return log.id === logementId;
      })

      if(foundLogement) {
        setLogement(foundLogement);
      } else {
      }
  
    }
    fetchLogements();
  }, [logementId]);

  return (
    <Layout>
      <main>
        <h1>Page Logement {logementId}</h1>
      </main>
    </Layout>
  );
}