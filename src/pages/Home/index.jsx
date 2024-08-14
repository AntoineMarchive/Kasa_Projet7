import { useEffect, useState } from "react";
import { Banner } from "../../components/Banner";
import { Thumb } from "../../components/Thumb";
import "./Home.scss";

export default function Home() {
  const [logements, setLogements] = useState([]); //hook de react//

  useEffect(() => {
    async function fetchLogements() {
      const res = await fetch("/logements.json");
      const datas = await res.json();
      setLogements(datas);
    }

    fetchLogements();
  }, []);

  return (
    <main>
      <Banner></Banner>
      <section className="thumbs">
        {logements.map((logement) => (
          <Thumb key={logement.id}
          title={logement.title}
          cover={logement.cover} />
        ))}
      </section>
    </main>
  );
}
