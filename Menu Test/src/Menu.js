import "./styles.css";
import MenuItem from "./MenuItem.js";

export default function App() {
  // jump to lunch section
  function JumpLunch() {
    const lunch = document.getElementById("lunch");
    window.scrollTo({
      // relative height of the menu section div
      top: lunch.offsetTop - lunch.scrollTop + lunch.clientTop,
      behavior: "smooth"
    });
  }

  // jump to dinner section
  function JumpDinner() {
    const dinner = document.getElementById("dinner");
    window.scrollTo({
      // relative height of the menu section div
      top: dinner.offsetTop - dinner.scrollTop + dinner.clientTop,
      behavior: "smooth"
    });
  }

  return (
    <div className="Menu">
      <div className="Menu-Title">
        <h1>Our Menu</h1>
      </div>

      <div>
        <div className="Jump-Menu-Section">
          <button onClick={() => JumpLunch()}>Lunch</button>
          <button onClick={() => JumpDinner()}>Dinner</button>
        </div>
      </div>

      <div className="Menu-Section" id="lunch">
        <h1>Lunch</h1>

        <MenuItem name="Beef Salad" price="9" ingredients="beef" />
        <MenuItem name="Chicken Salad" price="7" ingredients="chicken" />
        <MenuItem name="Pork Salad" price="8" ingredients="pork" />
        <MenuItem name="Tuna Salad" price="9" ingredients="tuna" />
        <MenuItem name="Macaroni Salad" price="7" ingredients="macaroni" />
        <MenuItem name="Beet Salad" price="7" ingredients="beets" />
        <MenuItem name="Lettuce Salad" price="7" ingredients="lettuce" />
        <MenuItem name="Salad Salad" price="100" ingredients="salad" />
      </div>
      <div className="Menu-Section" id="dinner">
        <h1>Dinner</h1>

        <MenuItem name="Beef Steak" price="20" ingredients="beef" />
        <MenuItem name="Chicken Steak" price="17" ingredients="chicken" />
        <MenuItem name="Pork Steak" price="18" ingredients="pork" />
        <MenuItem name="Tuna Steak" price="20" ingredients="tuna" />
        <MenuItem name="Macaroni Steak" price="15" ingredients="macaroni" />
        <MenuItem name="Beet Steak" price="17" ingredients="beets" />
        <MenuItem name="Lettuce Steak" price="12" ingredients="lettuce" />
        <MenuItem name="Steak Steak" price="200" ingredients="steak" />
      </div>
    </div>
  );
}
