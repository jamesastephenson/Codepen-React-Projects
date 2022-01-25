import "./styles.css";
//import axios from "axios";

// starting with XML for one results, page should be able to iterate multiple

export default function Results() {
  return (
    <div className="Results">
      <h3 className="ResultHeader">Result Name</h3>
      <h4 className="ResultSubheader">
        Some info some info some info some info
      </h4>
      <p className="ResultText">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
}
