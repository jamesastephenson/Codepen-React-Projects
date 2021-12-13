import "./styles.css";

export default function Author(props) {
  return (
    <div className="Author">
      <h2 className="AuthorName">{props.name}</h2>

      {/* save image locally unless you're getting it from an API */}
      <img src={props.image} alt="James Joyce" />

      {/* make this horizontal line verical on larger screens to divide */}
      <hr />

      <p>{props.bio}</p>
    </div>
  );
}
