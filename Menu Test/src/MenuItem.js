import "./styles.css";

export default function MenuItem(props) {
  return (
    <div className="Menu-Item">
      <h2>
        {props.name} ${props.price}
      </h2>
      <p>
        This dish contains {props.ingredients} and other various ingredients. It
        is fit for human consumption.
      </p>
    </div>
  );
}
