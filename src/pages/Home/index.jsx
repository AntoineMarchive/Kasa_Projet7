import React from "react";
import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout";
import { Banner } from "../../components/Banner";
import { Thumb } from "../../components/Thumb";
import "./Home.scss";
import { Link } from "react-router-dom";
import image from '../../assets/homeBanner.png';

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
          <Banner bannerImage={image} className="banner__img">
            <h1>Chez vous, partout et ailleurs</h1>
          </Banner>
        <section className="thumbs">
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
