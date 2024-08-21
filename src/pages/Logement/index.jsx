import { Carrousel } from "../../components/Carrousel";
import { Collapse } from "../../components/Collapse";
import { Tag } from "../../components/Tag";
import { Layout } from "../../components/Layout";
import "./Logement.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function Logement() {
  const { logementId } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    async function fetchLogements() {
      const res = await fetch("/logements.json");
      const datas = await res.json();

      const foundLogement = datas.find((log) => {
        return log.id === logementId;
      });

      if (foundLogement) {
        setLogement(foundLogement);
      } else {
        console.error("Logement non trouvé");
      }
    }
    fetchLogements();
  }, [logementId]);

  return (
    <Layout>
      <main>
        <h1>Page Logement {logementId}</h1>
        <div className="logement-container">
          <Carrousel />
          <div className="logement-container-additionelle">
            <div className="logement-container-additionelle-info">
              <h2 className="logement-container-additionelle-info__title">
                {logement.title}
              </h2>
              <p className="logement-container-additionelle-info__location">
                {logement.location}
              </p>
              <div className="tag">
                {logement.tags.map((tag) => {
                  <tag key={tag} label={tag} />;
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="collapse-container">
          <Collapse title="Description" className="collapse">
            <p>{logement.description}</p>
          </Collapse>
          <Collapse title="Equipements" className="collapse">
            <ul>
              {logement.equipments.map((equipment, index) => {
                <li key={index}>{equipment}</li>;
              })}
            </ul>
          </Collapse>
        </div>
      </main>
    </Layout>
  );
}
