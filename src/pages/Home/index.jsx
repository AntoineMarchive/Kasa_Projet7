import React from "react";
import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout";
import { Banner } from "../../components/Banner";
import { Thumb } from "../../components/Thumb";
import "./Home.scss";
import { Link } from "react-router-dom";

export function Home() {
  const [logements, setLogements] = useState([]); //hook de react//

  useEffect(() => {
    async function fetchLogements() {
      try {
        const res = await fetch("/logements.json");
        if (!res.ok) {
          throw new Error("La réponse du serveur n'est pas bonne");
        }
        const datas = await res.json();
        setLogements(datas);
      } catch (error) {
        console.error("Fetch error: ", error);
      }
    }
    fetchLogements();
  }, []);

  console.log("logements: ", logements);

  return (
    <Layout>
      <main>
          <Banner />
        <section className="thumb">
          {logements.length > 0 ? (
            logements.map((logement) => (
              <Link key={logement.id} to={"/logement/" + logement.id}>
                <Thumb title={logement.title} cover={logement.cover} />
              </Link>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </section>
      </main>
    </Layout>
  );
}
