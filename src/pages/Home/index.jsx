import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout";
import { Banner } from "../../components/Banner";
import { Thumb } from "../../components/Thumb";
import "./Home.scss";

export function Home() {
  const [logements, setLogements] = useState([]); //hook de react//

  useEffect(() => {
    async function fetchLogements() {
      try {
      const res = await fetch("/logements.json");
      if (!res.ok) {
        throw new Error("La réponse du serveur n'est pas bonne")
      }
      const datas = await res.json();
      setLogements(datas);
    } catch (error) { 
      console.error("Fetch error: ", error);
    }
  }
    fetchLogements();
  }, []);

  return (
    <Layout>
      <main>
        <Banner></Banner>
        <section className="thumbs">
          {logements.length < 0 ? (
          logements.map((logement) => (
            <Thumb
              key={logement.id}
              title={logement.title}
              cover={logement.cover}
            />
          ))
  ) : (
    <p>Loading...</p>
  )}
        </section>
      </main>
    </Layout>
  );
}