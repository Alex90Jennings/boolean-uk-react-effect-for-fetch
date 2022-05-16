import SubjectList from "./SubjectList";

function ArtListItem(props) {
  const item = props.item;

  return (
    <li>
      <div className="frame">
        <img
          src={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
          alt="artwork"
        />
      </div>
      <h3>{item.title}</h3>
      <p>Artist: {item.artist_title}</p>
      <h4>Artistic Subjects:</h4>
      <ul>
        {item.subject_titles.map((subject, id) => (
          <SubjectList subject={subject} key={id} />
        ))}
      </ul>
    </li>
  );
}

export default ArtListItem;
