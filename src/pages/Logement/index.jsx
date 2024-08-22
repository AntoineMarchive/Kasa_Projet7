import { Carrousel } from "../../components/Carrousel";
import { Collapse } from "../../components/Collapse";
import { Tag } from "../../components/Tag";
import { Layout } from "../../components/Layout";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Logement.scss";

export function Logement() {
  const { logementId } = useParams();
  const [logement, setLogement] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchLogements() {
      const res = await fetch("/logements.json");
      const datas = await res.json();

      const foundLogement = datas.find((log) => log.id === logementId);

      if (foundLogement) {
        setLogement(foundLogement);
      } else {
        console.error("Logement non trouvé");
        navigate("/logement-non-trouvé");
      }
    }
    fetchLogements();
  }, [logementId, navigate]);

  if (!logement) {
    return <p>Chargement...</p>; // Pour gérer le cas où logement est null
  }

  return (
    <Layout>
      <main>
        <Carrousel></Carrousel>
        <div className="logement-container">
          <div className="logement-container-additionelle">
            <div className="logement-container-additionelle-info">
              <h2 className="logement-container-additionelle-info__title">
                {logement.title}
              </h2>
              <p className="logement-container-additionelle-info__location">
                {logement.location}
              </p>
              <div className="tag">
                {logement.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="additional-info">
          <div className="host-info">
            <div className="host-name-container">
              <p>{logement.host.name.split(" ")[0]}</p>
              <p>{logement.host.name.split(" ")[1]}</p>
            </div>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="host-picture"
            />
          </div>
        </div>

        <div className="collapse-container">
          <Collapse title="Description" className="collapse">
            <p>{logement.description}</p>
          </Collapse>
          <Collapse title="Equipements" className="collapse">
            <ul>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </main>
    </Layout>
  );
}
