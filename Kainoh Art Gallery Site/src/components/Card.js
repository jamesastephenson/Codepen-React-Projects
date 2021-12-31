import "../styles/Card.css";

// card content filled in with props in Container.js
// onClick function also passed in through Container.js
export default function Card(props) {
  return (
    <div className="Card" onClick={props.onClick}>
      <h3>{props.title}</h3>
      <img src={props.image} alt="card content" />
      <h4>{props.lead}</h4>
      <p>{props.description}</p>
    </div>
  );
}
