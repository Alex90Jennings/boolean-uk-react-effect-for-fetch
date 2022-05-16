import { useEffect, useState } from "react";
import ArtListItem from "./components/ArtListItem";

function ArtsSection() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.artic.edu/api/v1/artworks?fields=title,artist_title,subject_titles,image_id&limit=5`
    )
      .then((res) => res.json())
      .then((parsedData) => setData(parsedData.data));
  }, []);

  console.log(data);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          {data.map((item, id) => (
            <ArtListItem item={item} key={id} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ArtsSection;
