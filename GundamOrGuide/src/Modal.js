import "./styles.css";
// display O or X based on correct or incorrect answer
export default function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.text}</h2>
    </div>
  );
}
