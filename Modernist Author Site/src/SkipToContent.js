import "./styles.css";

export default function SkipToContent() {
  let i = 1;

  function ScrollDown() {
    const authors = document.getElementById("container");

    if (document.getElementById("btnText").innerHTML === "Jump to Top") {
      document.getElementById("btnText").innerHTML = "Next Author";
    }

    window.scrollTo({
      // relative height of the menu section div
      top:
        authors.childNodes[i].offsetTop -
        authors.childNodes[i].scrollTop +
        authors.clientTop -
        170,
      behavior: "smooth"
    });
    if (i < authors.childNodes.length - 1) {
      i++;
    } else {
      i = 1;
      document.getElementById("btnText").innerHTML = "Jump to Top";
    }
  }

  return (
    <div className="SkipToContent" onClick={ScrollDown}>
      <label id="btnText">Next Author</label>
      <i className="SkipButton"></i>
    </div>
  );
}
